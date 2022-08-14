<template>
    <div>
        <label class="notes">
            <span class="name">备注</span>
            <input type="text" placeholder="在这里添加备注">
        </label>
    </div>
</template>

<style lang="scss" scoped>
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
</style>