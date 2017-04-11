<template>
  <div class="main">
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
import store from './vuex/store.js';
import { saveOpenId, saveAvatar, saveNickname } from './vuex/actions';
import wx from 'weixin-js-sdk';
export default {
  store,
  data () {
    return {
      wechatConfig: {}
    };
  },
  vuex: {
    getters: {
      openid: ({ user }) => user.userInfo.openid,
      prefix: ({ user }) => user.prefix
    },
    actions: {
      saveOpenId,
      saveAvatar,
      saveNickname
    }
  },
  created () {
    if (this.$route.query.id) {
      this.saveOpenId(this.$route.query.id);
      window.localStorage.setItem('openid', this.$route.query.id);
    } else if (window.localStorage.getItem('openid')) {
      this.saveOpenId(window.localStorage.getItem('openid'));
    };
    this.$http.post(this.prefix + 'User/Wechat/getmy', {openid: this.openid})
    .then(res => {
      this.saveNickname(res.body.resData.nickname);
      if (!res.body.resData.avatar) {
        return;
      }
      this.saveAvatar(res.body.resData.avatar);
    });
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
        jsApiList: ['hideOptionMenu']
      });
      wx.ready(function () {
        wx.hideOptionMenu();
      });
    });
  }
};
</script>

<style lang="stylus">
  @import '../static/css/normalize.css';
  html
    height: 100%
    background: #f0f0f5
  body
    color: #323232
</style>