<template>
    <div>
        <Layout>
            <div>
                <ol class="tags">
                    <li><span>衣</span>
                        <Icon name="right"></Icon>
                    </li>
                    <li><span>食</span>
                        <Icon name="right"></Icon>
                    </li>
                    <li><span>住</span>
                        <Icon name="right"></Icon>
                    </li>
                    <li><span>行</span>
                        <Icon name="right"></Icon>
                    </li>
                </ol>
            </div>
            <div class="createTag-wrapper">
                <button class="createTag">新增标签</button>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';


export default class Label extends Vue {
}
</script>

<style lang="scss">
.tags {

    padding-left: 15px;

    >li {
        display: flex;
        min-height: 44px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #dddde0;

        svg.icon {
            width: 20px;
            height: 20px;
            margin-right: 23px;
        }
    }
}

.createTag {
    font-family: Source Han Sans;
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.4099999964237213px;
    text-align: left;
    color: #fff;
    padding: 9px 15px 9px 16px;
    background-color: #767676;
    border: none;
    border-radius: 4px;

    &-wrapper {
        text-align: center;
        padding-top: 44px;
    }
}
</style>