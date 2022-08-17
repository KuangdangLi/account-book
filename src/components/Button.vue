<template>
  <button class="button" @click="$emit('click',$event)"><slot></slot></button>
</template>

<script lang="ts">
import Vue from 'vue';

export default class Button extends Vue {

}
</script>

<style lang="scss" >
.button {
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