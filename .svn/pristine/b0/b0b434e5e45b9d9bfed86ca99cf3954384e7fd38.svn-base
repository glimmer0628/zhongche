<template>
  <div class="ranking">
    <div class="ranking_top">
      <ul>
        <li v-link="{ path: '/ranking/ranktog' }">综合</li>
        <li v-link="{ path: '/ranking/rankculture' }">文化</li>
        <li v-link="{ path: '/ranking/ranksport' }">体育</li>
        <li v-link="{ path: '/ranking/rankskill' }">技能</li>
        <li v-link="{ path: '/ranking/rankmy' }">我的</li>
      </ul>

    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
  };
</script>
<style lang="stylus">
@import '../../../static/css/border-1px.styl'
  .ranking
    position: absolute
    top: 0
    bottom: 0
    background: #ffffff
    width: 100%
    .ranking_top
      height: 40px
      width: 100%
      border-1px-bot('#e6e6e6')
      ul
        display: flex
        align-items: center
        margin: 0
        padding: 0
        width: 100%
        height: 100%
        li
          display: flex
          justify-content: center
          align-items: center
          font-size: 14px
          flex: 1
          height: 100%
          list-style: none
          &.active
            color: #ef2f48
            font-size: 16px
</style>