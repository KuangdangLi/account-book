<template>
    <div>
        <Layout>
           <Tabs :data-source="recordTypeList" :value.sync="type" class-prefix="type"></Tabs>
          <ol>
            <li v-for="(group, index) in groupedList" :key="index">
              <h3 class="title">{{beautify(group.title)}} <span>￥{{group.total}}</span></h3>
              <ol>
                <li v-for="item in group.items" :key="item.id"
                    class="record">
                  <span>{{tagString(item.tags)}}</span>
                  <span class="notes">{{item.notes}}</span>
                  <span>￥{{item.amount}} </span>
                </li>
              </ol>
            </li>
          </ol>
        </Layout>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';
import clone from '@/lib/clone';
import dayjs from 'dayjs';
type Tag ={
  id: string
  name: string
}
@Component({
  components: {Tabs}
})
export default class Statistics extends Vue{
  type = '-'
  recordTypeList = recordTypeList;

  // eslint-disable-next-line no-undef
  get recordList() {return (this.$store.state as RootState).recordList}
  get groupedList(){
    const {recordList} = this
    if(recordList.length === 0) {return []}
    const newList= clone(recordList ).filter((item : RecordItem)=>item.types === this.type).sort((a: RecordItem,b: RecordItem)=>dayjs(b.createdAt).valueOf()-dayjs(a.createdAt).valueOf())
    if(newList.length === 0) {return []}
    type Result = { title: string, total?: number, items: RecordItem[] }[]
    const result:Result = [{title:dayjs(newList[0].createdAt).format('YYYY-MM-DD'),items:[newList[0]]}]
    for(let i=1;i<newList.length;i++){
      const current = newList[i]
      const last = result[result.length-1]
      if(dayjs(last.title).isSame(dayjs(current.createdAt),'day')){
        last.items.push(current)
      }else{
        result.push({title:dayjs(current.createdAt).format('YYYY-MM-DD'),items: [current]})
      }
    }
    result.map(group => {
      group.total = group.items.reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
    });
    return result
  }
  beautify(title:string){
    const target = dayjs(title)
    const now = dayjs(new Date())
    if(now.isSame(target,'day')){
      return '今天'
    }else if(now.subtract(1,'day').isSame(target,'day')){
      return '昨天'
    }else if(now.subtract(2,'day').isSame(target,'day')){
      return '前天'
    }else if(now.isSame(target,'year')){
      return target.format('M月D日')
    }else{
      return target.format('YYYY年M月D日')
    }
  }
  tagString(tags: Tag[]) {
    if(tags.length === 0) return '无标签'
    return tags.map(tag=>tag.name).join(',')
  }
  mounted(){
    this.$store.commit('fetchRecord')
  }
}
</script>

<style lang="scss" scoped>
  ::v-deep .type-tabs-item {
    background-color: #fff;
  }
  %item {
     padding: 8px 16px;
     line-height: 24px;
     display: flex;
     justify-content: space-between;
     align-content: center;
   }
  .title {
    @extend %item;
  }
  .record {
    background: white;
    @extend %item;
  }
  .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }

</style>