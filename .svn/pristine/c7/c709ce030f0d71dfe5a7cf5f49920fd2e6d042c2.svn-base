<template>
  <div class="vote">
    <div class="background">
      <vote-detail :detail-item="voteDetail"></vote-detail>
      <vote-item :vote-items="voteItems"></vote-item>
      <div class="submitBtnContainer">
        <div class="submitBtn" :class="{'voted': voted}" @click="voteSub()">{{btnHtml}}</div>
      </div>
      <ul class="voteOptionUl">
        <li v-for="voteItem in voteItems">
          <vote-option :voteitem="voteItem" :votenum="$index"></vote-option>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import voteDetail from '../../components/DetailInfoItem/DetailInfoItem.vue';
import voteItem from '../../components/VoteItem/VoteItem.vue';
import voteOption from '../../components/VoteOption/VoteOption.vue';
import wx from 'weixin-js-sdk';
export default {
  components: {
    voteDetail,
    voteItem,
    voteOption
  },
  data () {
    return {
      voteDetail: {},
      voteItems: [],
      chosenId: '',
      voted: false,
      timeStamp: '',
      now: 0,
      wechatConfig: {}
    };
  },
  computed: {
    btnHtml () {
      if (!this.voted) {
        return '立即投票';
      } else if (this.now > this.timeStamp) {
        return '投票已结束';
      } else {
        return '已投票';
      }
    }
  },
  vuex: {
    getters: {
      prefix: ({ user }) => user.prefix,
      openid: ({ user }) => user.userInfo.openid
    }
  },
  created () {
    // 微信分享
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
        jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'showOptionMenu']
      });
      wx.ready(function () {
        wx.showOptionMenu();
        // 分享到朋友
        wx.onMenuShareAppMessage({
          title: '中车投票',
          desc: '中车投票描述',
          link: 'http://weixin.cnxiaomubiao.com/zhongche/src/index.html#!/vote',
          type: '',
          dataUrl: '',
          success: function () {
            window.alert('分享成功');
          },
          cancel: function () {
            window.alert('取消分享');
          }
        });
        // 分享给朋友圈
        wx.onMenuShareTimeline({
          title: '中车投票',
          link: 'http://weixin.cnxiaomubiao.com/zhongche/src/index.html#!/vote',
          success: function () {
            window.alert('分享成功');
          },
          cancel: function () {
            window.alert('取消分享');
          }
        });
        // 分享到QQ
        wx.onMenuShareQQ({
          title: '中车投票', // 分享标题
          desc: '中车投票描述', // 分享描述
          link: 'http://weixin.cnxiaomubiao.com/zhongche/src/index.html#!/vote', // 分享链接
          imgUrl: '', // 分享图标
          success: function () {
            window.alert('分享成功');
          },
          cancel: function () {
            window.alert('取消分享');
          }
        });
        // 分享到腾讯微博
        wx.onMenuShareWeibo({
          title: '中车投票', // 分享标题
          desc: '中车投票描述', // 分享描述
          link: 'http://weixin.cnxiaomubiao.com/zhongche/src/index.html#!/vote', // 分享链接
          imgUrl: '', // 分享图标
          success: function () {
            window.alert('分享成功');
          },
          cancel: function () {
            window.alert('取消分享');
          }
        });
        // 分享到QQ空间
        wx.onMenuShareQZone({
          title: '中车投票', // 分享标题
          desc: '中车投票描述', // 分享描述
          link: 'http://weixin.cnxiaomubiao.com/zhongche/src/index.html#!/vote', // 分享链接
          imgUrl: '', // 分享图标
          success: function () {
            window.alert('分享成功');
          },
          cancel: function () {
            window.alert('取消分享');
          }
        });
      });
    });
    this.$toast.config({
      position: 'center center',
      duration: 1000
    });
    this.now = new Date().getTime();
    this.$http.post(this.prefix + 'Vote/Wechat/voteList', { openid: this.openid }).then(res => {
      if (res.body.message === '暂无投票!') {
        window.alert('暂无活动');
        this.$router.go('/activity');
      }
      res.body.resData.voteOptions.forEach(item => {
        item.choose = false;
      });
      this.voteItems = res.body.resData.voteOptions;
      this.voteDetail = res.body.resData.voteDetail;
      this.voted = res.body.resData.voted;
      this.timeStamp = res.body.resData.timeStamp;
    });
    this.$on('option', (id) => {
      this.voteItems.forEach((item) => {
        item.choose = false;
        if (item.id === id) {
          item.choose = true;
        }
      });
      this.chosenId = id;
    });
  },
  methods: {
    voteSub () {
      if (this.voted || this.now < this.timeStamp) {
        return;
      } else if (this.chosenId === '') {
        this.$toast.error('请选择至少一项');
        return;
      }
      this.$http.post(this.prefix + 'Vote/Wechat/voteUser', {activeId: this.voteDetail.id, openid: this.openid, optionId: this.chosenId})
      .then(res => {
        if (res.body.message === '请先关注公众号') {
          this.$toast.error('请从公众号内进入投票');
          return;
        }
        switch (res.body.resData.result_msg) {
          case 0:
            this.$toast.success('投票成功');
            break;
          case 1:
            this.$toast.error('投票已关闭');
            break;
          case 2:
            this.$toast.error('您已经投过票了');
            break;
          default:
            this.$toast.error('投票失败，请重试');
        };
        setTimeout(() => {
          this.$router.go(0);
        }, 1500);
      });
    }
  }
};
</script>
<style lang="stylus">
.vote
  position: absolute
  top: 0
  bottom: 0
  background: #ffffff
  width: 100% 
  .background
    background: #fff
    .submitBtnContainer
      display: flex
      justify-content: center
      align-items: center
      height: 91px
      .submitBtn
        display: flex
        justify-content: center
        align-items: center
        box-sizing: border-box
        width: 275px
        height: 44px
        border-radius: 22px
        border: none
        color: #fff
        background: linear-gradient(90deg, #fc556b, #ef2f48)
        box-shadow: 0 1px 8px rgba(246, 67, 91, 0.6)
        &.voted
          background: #ccc
          box-shadow: none
    .voteOptionUl
      padding: 0
      margin: 0
      list-style: none
      li
        padding: 0 32px
        box-sizing: border-box
</style>