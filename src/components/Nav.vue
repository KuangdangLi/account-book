<template lang="">
    <div class="nav">
    <router-link to="/money">
        <Icon name="money"/>
       <p> Money</p></router-link>
    <router-link to="/label">
        <Icon name="labels"/>
       <p> Label</p></router-link>
    <router-link to="/statistics">
        <Icon name="chart"/>
        <p>Statistics</p></router-link>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Nav'
};
</script>


<style lang="scss" scoped>
.nav {
    border: 1px solid red;
    display: flex;
    flex-direction: row;
}
</style>