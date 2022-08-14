<template>
    <div>
        <ul class="types">
            <li class="selected">支出</li>
            <li>收入</li>
        </ul>
    </div>
</template>

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