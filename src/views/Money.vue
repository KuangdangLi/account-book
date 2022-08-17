<template>
    <div>
        {{ recordList }}
        <Layout classPrefix="layout">
            <NumberPad :value.sync="record.amount" @submit="dataSave"></NumberPad>
            <Types :value.sync="record.types"></Types>
            <FormItem @update:value="onUpdateNotes" filed-name="备注" place-holder="请输入备注"></FormItem>
            <Tags :dataSource.sync="tags" @update:tags="onUpdateTags"></Tags>

        </Layout>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Layout from '@/components/Layout.vue';
import NumberPad from '../components/Money/NumberPad.vue';
import FormItem from '../components/Money/FormItem.vue';
import Types from '../components/Money/Types.vue';
import Tags from '../components/Money/Tags.vue';
import { Component, Watch } from 'vue-property-decorator';
import recordListModel from "@/models/recordListModel"
import tagListModel from '@/models/tagListModel';

window.localStorage.setItem('version', '0.0.1')
const tagList = tagListModel.fetch()


@Component({
    components: { Layout, NumberPad, FormItem, Types, Tags }
})
export default class Money extends Vue {
    tags = tagList
    record: RecordItem = {
        tags: [], notes: '', types: '-', amount: 0, createdAt: undefined
    }
    recordList: RecordItem[] = recordListModel.fetch()
    onUpdateTags(value: string[]): void {
        this.record.tags = value
    }
    onUpdateNotes(value: string): void {
        this.record.notes = value
    }
    dataSave(): void {
        this.record.createdAt = new Date()
        this.recordList.push(recordListModel.clone(this.record))//深拷贝
    }
    @Watch('recordList')
    onRecordListChange(data: RecordItem[]): void {
        recordListModel.save(data)
    }
}
</script>

<style lang="scss">
.layout-content {
    display: flex;
    flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
</style>
