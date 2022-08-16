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

window.localStorage.setItem('version', '0.0.1')

type Record = {
    tags: string[]
    notes: string
    types: string
    amount: number
    createdAt: Date | undefined
}

@Component({
    components: { Layout, NumberPad, Notes, Types, Tags }
})
export default class Money extends Vue {
    tags = ['衣', '食', '住', '行']
    record: Record = {
        tags: [], notes: '', types: '-', amount: 0, createdAt: undefined
    }
    recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]')
    onUpdateTags(value: string[]) {
        this.record.tags = value
    }
    onUpdateNotes(value: string) {
        this.record.notes = value
    }
    dataSave() {
        this.record.createdAt = new Date()
        this.recordList.push(JSON.parse(JSON.stringify(this.record)))//深拷贝
    }
    @Watch('recordList')
    onRecordListChange() {
        window.localStorage.setItem('recordList', JSON.stringify(this.recordList))
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
