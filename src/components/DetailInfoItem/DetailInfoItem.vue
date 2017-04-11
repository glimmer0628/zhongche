<template>
  <div class="detailInfoItem">
    <div class="headContainer">
      <div class="title">{{ detailItem.title }}</div>
      <div class="time">
        <a class="foucs" href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzUzNzAzNzQ0OA==#wechat_redirect">点击关注中车
        </a>
        {{ detailItem.time }}
      </div>
    </div>
    <div class="container" v-if="detailItem.video_url">
      <iframe width="100%" frameborder=0 :src="detailItem.video_url"></iframe>
    </div>
    <div class="infoContainer" v-html="detailItem.info"></div>
  </div>
</template>
<script>
  import wx from 'weixin-js-sdk';
  export default {
    props: {
      detailItem: Object
    },
    created () {
      this.$http.post(this.prefix + 'System/Myweichart/getconfig', {openid: this.openid})
      .then(res => {
        this.wechatConfig = res.body.resData;
        if (!this.wechatConfig) {
          window.alert('获取微信授权失败');
          return;
        }
        wx.config({
          debug: false,
          appId: this.wechatConfig.appId,
          timestamp: this.wechatConfig.timestamp,
          nonceStr: this.wechatConfig.nonceStr,
          signature: this.wechatConfig.signature,
          jsApiList: ['showOptionMenu']
        });
        wx.ready(function () {
          wx.showOptionMenu();
        });
      });
    }
  };
</script>
<style lang="stylus">
  .detailInfoItem
    padding-top: 19px
    background-color: #FFF
    .headContainer
      margin-bottom: 20px
      padding: 0 12px
      .title
        margin-bottom: 9px
        word-wrap:break-word
        font-size: 16px
        font-weight: bold
        color: #323232
      .time
        font-size: 13px
        color: #b4b4b4
        .foucs
          margin-right: 5px
          text-decoration: none
          &:link
            color: rgb(131, 115, 160)
    .container
      iframe
        width: 100%
    .infoContainer
      padding: 0 12px
      color: #353535
      font-size: 14px
      p
        line-height: 1.3!important
      img
        width: 100%
</style>