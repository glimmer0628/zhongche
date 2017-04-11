<template>
  <div class="myItem">
    <div class="left">
      <i class="icon" :class="urlArr[urlnum]"></i>
      <span class="text">{{ title }}</span>
    </div>
    <div class="right"></div>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    title: String,
    urlnum: Number
  },
  data () {
    return {
      urlArr: ['baoming', 'jifen', 'paiming', 'changeNum', 'bangding', 'chuangguan', 'jianbu', 'guize']
    };
  }
};
</script>
<style lang="stylus" type="text/css">
@import '../../../static/css/border-1px.styl';
.myItem
  display: flex
  justify-content: space-between
  align-items: center
  margin: 0 12px
  height: 44px
  font-size: 0
  border-1px-bot('#e6e7eb')
  .left
    display: flex
    align-items: center
    .text
      margin-left: 9px
      font-size: 15px
      color: #323232
    .icon
      width: 24px
      height: 24px
      &.baoming
        background: url(baoming.png) left top no-repeat
        background-size: 100% 100%
      &.jifen
        background: url(jifen.png) left top no-repeat
        background-size: 100% 100%
      &.paiming
        background: url(paiming.png) left top no-repeat
        background-size: 100% 100%
      &.changeNum
        background: url(changeNum.png) left top no-repeat
        background-size: 100% 100%
      &.bangding
        background: url(bangding.png) left top no-repeat
        background-size: 100% 100%
      &.chuangguan
        background: url(chuangguan.png) left top no-repeat
        background-size: 100% 100%
      &.jianbu
        background: url(jianbu.png) left top no-repeat
        background-size: 100% 100%
      &.guize
        background: url(guize.png) left top no-repeat
        background-size: 100% 100%
  .right
    margin-right: 5px
    width: 9px
    height: 15px
    background: url(right.png) left top no-repeat
    background-size: 100% 100%
</style>