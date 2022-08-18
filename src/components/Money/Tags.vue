<template>
    <div class="tags">
        <ul class="current">
            <li v-for="tag in this.tagList" :key="tag.id" @click="toggle(tag)"
                :class="{ selected: selectedTags.indexOf(tag) >= 0 }">{{ tag.name }}</li>
        </ul>
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import store from '@/store/store2';

@Component
export default class Tags extends Vue {
    tagList = store.tagList
    selectedTags: string[] = []
    toggle(tag: string) {
        const index = this.selectedTags.indexOf(tag)
        if (index >= 0) {
            this.selectedTags.splice(index, 1)
        } else {
            this.selectedTags.push(tag)
        }
        this.$emit('update:tags', this.selectedTags)
    }
    create() {
        const name = window.prompt('请输入标签名')
        if(!name) {
          window.alert('标签不能为空')
        }else store.createTag(name)
    }
}
</script>

<style lang="scss" scoped>
.tags {
    font-size: 14px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;

    >.current {
        display: flex;
        flex-direction: row;
        order: 2;
        flex-wrap: wrap;

        >li {
            background-color: #D9D9D9;
            $h : 24px;
            height: $h;
            line-height: $h;
            padding: 0 18px;
            border-radius: 18px;
            margin-left: 24px;

            &.selected {
                background-color: darken(#D9D9D9, 50%);
                color: white;
            }
        }
    }

    >.new {
        order: 1;
        padding-top: 16px;
        padding-bottom: 12px;
        padding-left: 18px;

        button {
            color: #999;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid #666;
            padding: 0 2px;
        }
    }
}
</style>