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
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';
// import store from '@/store/store2';
@Component({
  components: {Button, FormItem}
})
export default class EditLabel extends Vue {
  tag?:{id:string,name:string} = undefined
  update(name:string){
    const id = this.tag!.id
    if(this.tag) this.$store.commit('updateTag',{id, name})
  }
  remove(id:string){
    if(this.tag) {
        this.$store.commit('removeTag',id)
        this.$router.replace('/label')

    }
  }
  goBack(){
    this.$router.back()
  }
  created(){
    this.$store.commit('fetchTags')
    const id = this.$route.params.id;
    this.$store.commit('setCurrentTag', id);
    this.tag = this.$store.state.currentTag
    if(!this.tag)this.$router.replace('/404')

  }
}
</script>

<style lang="scss" scoped>
  ::v-deep.navBar{
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