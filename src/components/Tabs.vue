
<template>
    <div>
        <ul class="types">
            <li v-for="item in dataSource" :key="item.value" @click="selectType(item)" :class="liClass(item)">
              {{item.text}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
type DataSourceItem = {text:string,value:string}
@Component
export default class Types extends Vue {

    @Prop() readonly value!: string;
    @Prop() readonly  dataSource!:DataSourceItem[]
    @Prop() readonly classPrefix!:string
    selectType(item:DataSourceItem) {
        this.$emit('update:value', item.value);
    }
    liClass(item:DataSourceItem){
        return{
          selected: item.value === this.value,
          [this.classPrefix + '-tabs-item']: this.classPrefix
        }
    }
}
</script>


<style lang="scss" scoped>
.types {
    font-size: 24px;
    display: flex;
    background-color: #c4c4c4;
    text-align: center;

    li {
        position: relative;
        height: 64px;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        &.selected::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: #333;
        }
    }
}
</style>