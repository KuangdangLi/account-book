
<template>
    <div>
        <ul class="types">
            <li @click="selectType('-')" :class="value === '-' && 'selected'">支出</li>
            <li @click="selectType('+')" :class="value === '+' && 'selected'">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
@Component
export default class Types extends Vue {
    @Prop({ default: '-' }) readonly value!: string;

    selectType(type: string) {
        if (type !== '-' && type !== '+') {
            throw new Error('type is unknown');
        }
        this.$emit('update:value', type);
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