<template>
    <div>
        {{ record }}
        <Layout classPrefix="layout">
            <NumberPad :value.sync="record.amount"></NumberPad>
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
import { Component } from 'vue-property-decorator';

type Record = {
    tags: string[]
    notes: string
    types: string
    amount: number
}

@Component({
    components: { Layout, NumberPad, Notes, Types, Tags }
})
export default class Money extends Vue {
    tags = ['衣', '食', '住', '行']
    record: Record = {
        tags: [], notes: '', types: '-', amount: 0
    }
    onUpdateTags(value: string[]) {
        this.record.tags = value
    }
    onUpdateNotes(value: string) {
        this.record.notes = value
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
