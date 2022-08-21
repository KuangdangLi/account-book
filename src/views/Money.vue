<template>
    <div>
        {{ recordList }}
        <Layout classPrefix="layout">
            <NumberPad :value.sync="record.amount" @submit="saveRecord"></NumberPad>
            <Types :value.sync="record.types" :data-source="recordTypeList"></Types>
            <FormItem @update:value="onUpdateNotes" filed-name="备注" place-holder="请输入备注"></FormItem>
            <Tags @update:tags="pushTags"/>

        </Layout>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Layout from '@/components/Layout.vue';
import NumberPad from '../components/Money/NumberPad.vue';
import FormItem from '../components/Money/FormItem.vue';
import Types from '../components/Tabs.vue';
import Tags from '../components/Money/Tags.vue';
import { Component, Watch } from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';
// import store from '@/store/store2';

window.localStorage.setItem('version', '0.0.1')


@Component({
    components: { Layout, NumberPad, FormItem, Types, Tags }
})
export default class Money extends Vue {
    record: RecordItem = {
        tags: [], notes: '', types: '-', amount: 0, createdAt: undefined
    }

    recordTypeList = recordTypeList
    get recordList(){
      return this.$store.state.recordList
    }
    created(){
      this.$store.commit("fetchRecord")
    }
    onUpdateNotes(value: string): void {
        this.record.notes = value
    }
    pushTags(tags:string[]){
      this.record.tags = tags
    }
    saveRecord(){
      this.$store.commit('createRecord',this.record)
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
