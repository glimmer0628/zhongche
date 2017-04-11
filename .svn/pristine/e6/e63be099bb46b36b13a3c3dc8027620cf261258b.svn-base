<template>
 <div class="RankMy">
   <ul class="rankContent">
     <li v-for="rankInfo in rankInfos">
       <rank-item :rankinfo="rankInfo" :rank-num="$index"></rank-item>
     </li>
   </ul>
 </div>
</template>
<script>
import rankItem from '../RankItem/RankItem.vue';
export default {
  components: {
    rankItem
  },
  data () {
    return {
      rankInfos: []
    };
  },
  vuex: {
    getters: {
      prefix: ({ user }) => user.prefix,
      openid: ({ user }) => user.userInfo.openid
    }
  },
  created () {
    this.$toast.config({
      position: 'center center',
      duration: 1000
    });
    this.$http.post(this.prefix + 'sports/wechat/MyRanking', {openid: this.openid}).then(res => {
      if (res.body.message === '用户不存在!') {
        this.loading = false;
        this.$toast.error('请先绑定工号');
        setTimeout(() => {
          this.$router.go('/binding');
        }, 1500);
        return;
      }
      this.rankInfos = res.body.resData.eachRank;
    });
  }
};
</script>
<style lang="stylus">
@import '../../../static/css/border-1px.styl'
.rankContent
  padding: 0
  margin: 0
  list-style: none
  padding: 0 12px
  box-sizing: border-box
  li
    border-1px-bot('#ebebeb')
</style>