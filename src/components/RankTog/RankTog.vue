<template>
 <div class="RankTog">
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
      prefix: ({ user }) => user.prefix
    }
  },
  created () {
    this.$http.post(this.prefix + 'sports/wechat/synthesizeRanking').then(res => {
      this.rankInfos = res.body.resData.rank;
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