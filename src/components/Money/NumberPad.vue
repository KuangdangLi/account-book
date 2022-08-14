<template>
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
</template>

<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/helper.scss";

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
</style>