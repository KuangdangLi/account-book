<template>
    <div>
        {{ recordList }}
        <Layout classPrefix="layout">
            <NumberPad :value.sync="record.amount" @submit="dataSave"></NumberPad>
            <Types :value.sync="record.types"></Types>
            <Notes @update:value="onUpdateNotes"></Notes>
            <Tags :dataSource.sync="tags" @update:tags="onUpdateTags"></Tags>

        </Layout>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Layout from '@/components/Layout.vue';
import NumberPad from '../components/Money/NumberPad.vue';
import Notes from '../components/Money/Notes.vue';
import Types from '../components/Money/Types.vue';
import Tags from '../components/Money/Tags.vue';
import { Component, Watch } from 'vue-property-decorator';
import model from "@/model"

window.localStorage.setItem('version', '0.0.1')



@Component({
    components: { Layout, NumberPad, Notes, Types, Tags }
})
export default class Money extends Vue {
    tags = ['衣', '食', '住', '行']
    record: RecordItem = {
        tags: [], notes: '', types: '-', amount: 0, createdAt: undefined
    }
    recordList: RecordItem[] = model.fetch()
    onUpdateTags(value: string[]): void {
        this.record.tags = value
    }
    onUpdateNotes(value: string): void {
        this.record.notes = value
    }
    dataSave(): void {
        this.record.createdAt = new Date()
        this.recordList.push(model.clone(this.record))//深拷贝
    }
    @Watch('recordList')
    onRecordListChange(data: RecordItem[]): void {
        model.save(data)
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
