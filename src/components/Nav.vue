<template lang="">
    <div class="nav">
    <router-link to="/money">Money</router-link>
    <router-link to="/label">
        <svg>
            <use xlink:href="#labels"/>
        </svg>
        Label</router-link>
    <router-link to="/statistics">Statistics</router-link>
    </div>
</template>

<script lang="ts">
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
try {
    importAll(require.context('../assets/icons', true, /\.svg$/));
} catch (error) {
    console.log(error)
}

export default {
    name: 'Nav'
};
</script>


<style lang="scss" scoped>
.nav {
    border: 1px solid red;
}
</style>