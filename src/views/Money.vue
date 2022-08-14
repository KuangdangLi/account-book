<template>
    <div>
        <Layout classPrefix="layout">
            <NumberPad></NumberPad>
            <Types></Types>
            <Notes></Notes>
            <Tags></Tags>

        </Layout>
    </div>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
import NumberPad from '../components/Money/NumberPad.vue';
import Notes from '../components/Money/Notes.vue';
import Types from '../components/Money/Types.vue';
import Tags from '../components/Money/Tags.vue';

export default {
    name: "Money",
    components: { Layout, NumberPad, Notes, Types, Tags }
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
</style>
