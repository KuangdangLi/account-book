
<template>
    <div>
        <ul class="types">
            <li @click="selectType('-')" :class="type === '-' && 'selected'">支出</li>
            <li @click="selectType('+')" :class="type === '+' && 'selected'">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
@Component
export default class Types extends Vue {
    type = '-'; // '-'表示支出，'+'表示收入

    @Prop(Number) readonly propA: number | undefined;

    selectType(type: string) {
        if (type !== '-' && type !== '+') {
            throw new Error('type is unknown');
        }
        this.type = type;
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