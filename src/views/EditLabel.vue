<template>
  <layout>
    <div>
      <Icon name="left"></Icon>
      <span>编辑标签</span>
    </div>
    <form-item filed-name="标签" place-holder="请修改标签"></form-item>
      <Button>删除标签</Button>
  </layout>
</template>





<script lang="ts">
import Vue from 'vue';
import tagListModel from '@/models/tagListModel';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';
@Component({
  components: {Button, FormItem}
})
export default class EditLabel extends Vue {
  id:any=[]
  created(){
    const id = this.$route.params.id;
    tagListModel.fetch()
    const tags= tagListModel.data;
    const tag = tags.filter(item=>item.id === id)[0]
    if(tag){
      console.log(tag);
    }else{
      this.$router.replace('/404')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>