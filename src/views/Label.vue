<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link :to="`/label/edit/${tag.id}`" v-for="tag in tags" :key="tag.id" class="tag">
          <span>{{ tag.name }}</span>
          <Icon name="right"></Icon>
        </router-link>
      </div>
      <div class="button-wrapper">
        <Button @click="createTag">新增标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
// import store from '@/store/store2';
@Component({
  components: { Button }
})
export default class Label extends Vue {
  get tags(){
    return this.$store.state.tagList
  }
  created(){
    this.$store.commit('fetchTags')
  }
  createTag(): void {
    const name = window.prompt('请输入标签名')
    if (name) {
      try {
        this.$store.commit('createTag',name)
      } catch (error) {
        window.alert(`${error.message}`)
      }
    } else {
      window.alert(`the label cannot be empty`)
    }
  }
}
</script>

<style lang="scss">
.tags {

  padding-left: 15px;

  >.tag {
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

</style>