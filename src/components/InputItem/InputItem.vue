<template>
  <div class="inputItem">
    <input :disabled="pending" v-if="!text" v-model="bindData" type="text" placeholder="{{ placeText }}">
    <div v-if="text" class="left">{{ title }}</div>
    <div v-if="text" class="right">{{ text }}</div>
  </div>
</template>
<script>
  export default {
    props: {
      placeText: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      pending: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        bindData: ''
      };
    },
    watch: {
      bindData () {
        this.$dispatch(this.type, this.bindData);
      }
    }
  };
</script>
<style lang="stylus">
  .inputItem
    display: flex
    align-items: center
    padding-left: 10px
    height: 48px
    font-size: 13px
    .left
      flex: 3
      color: #999
    .right
      flex: 10
      color: #323232
    input
      width: 70%
      padding: 0
      border: none
      outline: none
      font-size: 13px
      &[disabled]
        background-color: #FFF
    ::-webkit-input-placeholder
      color: #b4b4b4
    :moz-placeholder
      color: #b4b4b4
    ::moz-placeholder
      color: #b4b4b4
    :-ms-input-placeholder
      color: #b4b4b4
</style>