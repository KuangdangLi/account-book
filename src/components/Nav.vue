<template lang="">
    <nav>
        <router-link to="/money" class="item" active-class="selected">
            <Icon name="money"/>
            Money
        </router-link>
        <router-link to="/label" class="item" active-class="selected">
            <Icon name="labels"/>
           Label
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="chart"/>
            Statistics
        </router-link>
    </nav>
</template>

<script lang="ts">
export default {
    name: 'Nav'
};
</script>


<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

nav {
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    flex-direction: row;
    font-size: 12px;

    >.item {
        padding: 2px 0;
        width: 33.33333%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .icon {
            width: 32px;
            height: 32px;
        }
    }

    >.item.selected {
        color: $color-highlight;
    }
}
</style>