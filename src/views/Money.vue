<template>
    <div>
        <Layout>
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
            <div>
                <label class="notes">
                    <span class="name">备注</span>
                    <input type="text" placeholder="在这里添加备注">
                </label>
            </div>
            <div>
                <ul class="types">
                    <li class="selected">支出</li>
                    <li>收入</li>
                </ul>
            </div>
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
                    <button>OK</button>
                    <button>0</button>
                    <button>.</button>
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

<style lang="scss" scoped>
.tags {
    font-size: 14px;

    >.current {
        display: flex;
        flex-direction: row;

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
        font-size: 36px;
        font-family: Consolas, monospace;
    }

    .buttons {}
}
</style>
