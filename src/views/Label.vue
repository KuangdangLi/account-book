<template>
    <div>
        <Layout>
            <div>
                <ol class="tags">
                  <li v-for="tag in tags" :key="tag"><span>{{tag}}</span>
                        <Icon name="right"></Icon>
                    </li>
                </ol>
            </div>
            <div class="createTag-wrapper">
                <button class="createTag" @click="createTag">新增标签</button>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';

@Component
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

    >li {
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

.createTag {
    font-family: Source Han Sans;
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.4099999964237213px;
    text-align: left;
    color: #fff;
    padding: 9px 15px 9px 16px;
    background-color: #767676;
    border: none;
    border-radius: 4px;

    &-wrapper {
        text-align: center;
        padding-top: 44px;
    }
}
</style>