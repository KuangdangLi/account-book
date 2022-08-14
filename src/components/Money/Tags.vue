<template>
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
</template>

<style lang="scss" scoped>
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
</style>