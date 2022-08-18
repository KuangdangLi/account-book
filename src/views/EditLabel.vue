<template>
  <layout>
    <div class="navBar">
      <Icon name="left" class="leftIcon" @click.native="goBack"></Icon>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <form-item filed-name="标签" place-holder="请修改标签" value="" @update:value="update"></form-item>
    <div class="button-wrapper">
      {{tag}}
    <Button @click.native="remove">删除标签</Button>
    </div>
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
  tag?:{id:string,name:string} = undefined
  update(name:string){
    console.log('编辑页触发了');
    if(this.tag) tagListModel.update(this.tag.id,name)
  }
  remove(id:string){
    if(this.tag) {
      if(tagListModel.remove(id)){
        this.$router.replace('/label')
      }
    }
  }
  goBack(){
    this.$router.back()
  }
  created(){
    const id = this.$route.params.id;
    tagListModel.fetch()
    const tags= tagListModel.data;
    const tag = tags.filter(item=>item.id === id)[0]
    if(tag){
      this.tag = tag;
    }else{
      this.$router.replace('/404')
    }
  }
}
</script>

<style lang="scss" >
  .navBar{
    display: flex;
    flex-direction: row;
    height: 48px;
    justify-content: space-between;
    align-items: center;
    padding:0 23px;
      >.leftIcon{
        svg.icon{
        width: 1.5em;
        height: 1.5em;
        }
      }


    }
</style>