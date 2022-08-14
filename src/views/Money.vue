<template>
    <div>
        <Layout classPrefix="layout">
            <div class="numberPad">
                <div class="output">100</div>
                <div class="buttons">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button class="ok">OK</button>
                    <button class="zero">0</button>
                    <button>.</button>
                </div>
            </div>
            <div>
                <ul class="types">
                    <li class="selected">支出</li>
                    <li>收入</li>
                </ul>
            </div>
            <div>
                <label class="notes">
                    <span class="name">备注</span>
                    <input type="text" placeholder="在这里添加备注">
                </label>
            </div>
            <div class="tags">
                <ul class="current">
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ul>
                <div class="new">
                    <button>新增标签</button>
                </div>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts" scoped>
import Layout from '@/components/Layout.vue';

export default {
    name: "Money",
    components: { Layout }
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

.notes {
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;

    >.name {
        padding: 12px;
        color: #333;
    }

    input {
        height: 50px;
        flex-grow: 1;
        color: #999;
        border: none;
        background-color: #f5f5f5;
    }
}

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

.numberPad {
    .output {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 72px;
        font-size: 36px;
        font-family: Consolas, monospace;
        padding-right: 16px;
        box-shadow: 0px -2px 3px 0px fade_out(#000, 0.75) inset;
    }

    .buttons {
        $h: 7.8vh;

        >button {
            @extend %clearfix;
            width: 25%;
            height: $h;
            background-color: transparent;
            border: none;
            $b: #F2F2F2;

            &.ok {
                height: $h*2;
                float: right;
            }

            &.zero {
                width: 50%;
            }

            &:nth-child(1) {
                background-color: $b;
            }

            &:nth-child(2),
            &:nth-child(5) {
                background-color: darken($b, 4%);
            }

            &:nth-child(3),
            &:nth-child(6),
            &:nth-child(9) {
                background-color: darken($b, 4%*2);
            }

            &:nth-child(4),
            &:nth-child(7),
            &:nth-child(10),
            &:nth-child(13) {
                background-color: darken($b, 4%*3);
            }

            &:nth-child(8),
            &:nth-child(11) {
                background-color: darken($b, 4%*4);
            }

            &:nth-child(12),
            &:nth-child(14) {
                background-color: darken($b, 4%*5);
            }
        }
    }
}
</style>
