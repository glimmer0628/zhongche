<template>
  <div class="detailInfo">
    <detail-info-item :detail-item="detailInfo"></detail-info-item>
  </div>
</template>
<script>
  import detailInfoItem from '../../components/DetailInfoItem/DetailInfoItem.vue';
  export default {
    data () {
      return {
        detailInfo: {}
      };
    },
    vuex: {
      getters: {
        prefix: ({ user }) => user.prefix
      }
    },
    created () {
      let options = {infoid: this.$route.params.detailid};
      if (this.$route.query.type) {
        options.type = 2;
      };
      this.$http.post(this.prefix + 'News/Wechat/newsdetail', options)
      .then(res => {
        this.detailInfo = res.body.resData;
      });
    },
    components: {
      detailInfoItem
    }
  };
</script>
<style lang="stylus">
  .detailInfo
    position: absolute
    top: 0
    bottom: 0
    width: 100%
    background-color: #FFF
</style>