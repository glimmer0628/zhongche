<template>
  <div class="VoteOption">
    <div class="optionTop"><span class="num">NO.{{ votenum + 1 }}</span><span class="name">{{voteitem.name}}</span></div>
    <div class="content" v-html="voteitem.Ocontent"></div>
  </div>
</template>
<script>
export default {
  props: {
    voteitem: Object,
    votenum: Number
  }
};
</script>
<style lang="stylus">
.VoteOption
  width: 100%
  .optionTop
    color: #000000
    .num
      font-size: 17px
      margin-right: 8px
    .name
      font-size: 16px
  .content
    font-size: 14px
    color: #353535 
    margin-top: 15px
    padding-bottom: 15px
    img
      width: 100%       
</style>