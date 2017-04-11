<template>
  <div class="nav">
    <ul>
      <li v-link="{ path: '/activity' }">
        <div class="textContainer">
          <div class="icon nav_icon1"></div>
          <div>活动</div>
        </div>
      </li>
      <li v-link="{ path: '/news', query: {num: 2} }">
        <div class="textContainer">
          <div class="icon nav_icon2"></div>
          <div>资讯</div>
        </div>
      </li>
      <li v-link="{ path: '/rights' }">
        <div class="textContainer">
          <div class="icon nav_icon3"></div>
          <div>维权</div>
        </div>
      </li>
      <li v-link="{ path: '/my' }">
        <div class="textContainer">
          <div class="icon nav_icon4"></div>
          <div>我的</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
  };
</script>
<style lang="stylus">
@import '../../../static/css/border-1px.styl'
.nav
  position: fixed
  bottom: 0
  display: flex
  width: 100%
  height: 49px
  background-color: #fff
  border-1px('#e6e6e6')
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
      font-size: 12px
      flex: 1
      height: 100%
      list-style: none
      .textContainer
        display: flex
        align-items: center
        flex-direction: column
        .icon
          margin-bottom: 4px
          display: inline-block
          &.nav_icon1
            width: 17px
            height:21px
            background: url(activity.png) no-repeat
            background-size: 17px 21px
          &.nav_icon2
            width: 21px
            height:20px
            background: url(message.png) no-repeat
            background-size: 21px 20px
          &.nav_icon3
            width: 20px
            height:21px
            background: url(safeguard.png) no-repeat
            background-size: 20px 21px
          &.nav_icon4
            
            width: 20px
            height:21px
            background: url(me.png) no-repeat
            background-size: 20px 21px
      &.active
        .textContainer
          color: #ef2f48
          .nav_icon1
            background-image: url(activity-fill.png)
          .nav_icon2
            background-image: url(message-fill.png)
          .nav_icon3
            background-image: url(safeguard-fill.png)
          .nav_icon4
            background-image: url(me-fill.png)
</style>