<template>
  <div class="reportItem">
    <div class="item">
      <div class="content">
        <div class="title">{{reportinfo.title}}</div>
        <div class="describe">
          <div v-if="haveTag" class="tag">{{reportinfo.tag}}</div>
          <div :class="{'nothing': !haveTag}" class="time">{{reportinfo.time}}</div>
        </div>
      </div>
      <div class="content_img">
        <img :src="reportinfo.img_url"/>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default{
  props: {
    reportinfo: Object
  },
  computed: {
    haveTag () {
      if (this.reportinfo.tag === '') {
        return false;
      }
      return true;
    }
  }
};
</script>
<style lang="stylus">
  @import '../../../static/css/border-1px.styl'
  
  .reportItem
    height: 100px
    width: 100%
    padding:0 12px
    box-sizing:border-box
    background: #ffffff
    .item
      height: 100%
      width: 100%
      padding: 15px 0
      box-sizing:border-box
      border-1px-bot('#e6e6e6')
      .content
        float: left
        width: 70%
        height: 100%
        .title
          height: 40px
          color:#323232
          font-size:16px
          line-height: 20px
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        .describe
          margin-top:8px
          .tag
            float: left
            height: 16px
            line-height: 16px
            border-radius: 5px
            padding:2px 7px
            text-align:center
            color:#ffffff
            font-size:11px
            background:#26a59a
          .time
            float: right
            color:#b4b4b4
            font-size:13px
            &.nothing
              float: left
              margin-top: 4px
      .content_img
        float: right
        width: 25%
        height: 100%
        img
          width: 100%
          height: 100%
</style>