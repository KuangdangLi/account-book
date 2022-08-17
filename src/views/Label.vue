<template>
    <div>
        <Layout>
            <div class="tags">
                  <router-link :to="`/label/edit/${tag.id}`" v-for="tag in tags" :key="tag.id" class="tag"><span>{{tag.name}}</span>
                        <Icon name="right"></Icon>
                    </router-link>
            </div>
            <div class="button-wrapper">
                <Button  @click="createTag">新增标签</Button>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';
import Button from '@/components/Button.vue';
@Component({
  components: {Button}
})
export default class Label extends Vue {
  tags =tagListModel.fetch()
  createTag(){
    const name =window.prompt('请输入标签名')
    if(name) {
      try {
        tagListModel.create(name)
      } catch (error) {
        window.alert(`${error.message}`)
      }
    }else{
    window.alert(`the label cannot be empty`)
  }}
}
</script>

<style lang="scss">
.tags {

    padding-left: 15px;

    >.tag {
        display: flex;
        min-height: 44px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #dddde0;

        svg.icon {
            width: 20px;
            height: 20px;
            margin-right: 23px;
        }
    }
}

//.createTag {
//    font-family: Source Han Sans;
//    font-size: 17px;
//    font-weight: 400;
//    line-height: 22px;
//    letter-spacing: -0.4099999964237213px;
//    text-align: left;
//    color: #fff;
//    padding: 9px 15px 9px 16px;
//    background-color: #767676;
//    border: none;
//    border-radius: 4px;
//
//    &-wrapper {
//        text-align: center;
//        padding-top: 44px;
//    }
//}
</style>