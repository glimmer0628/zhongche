<template>
  <div class="doneBlockadeContainer">
    <ul class="doneBlockUl">
      <li class="doneBlockLi" v-for="doneBlock in doneBlocks">
        <div class="left" :class="{'done': doneBlock.done, 'lock': doneBlock.lock}">
          {{ showNum(doneBlock) }}
        </div>
        <div class="right">
          <span class="total" v-if="!doneBlock.lock">第{{ blockNum(doneBlock.num) }}关共{{ doneBlock.blockInfo ? doneBlock.blockInfo.total : 10 }}题</span>
          <span class="correct" v-if="doneBlock.blockInfo">，答对{{ doneBlock.blockInfo.correctNum }}题</span>
          <span class="error" v-if="doneBlock.blockInfo">，答错{{ doneBlock.blockInfo.errorNum }}题</span>
        </div>
      </li>
    </ul>
    <div class="submitBtnContainer">
      <div class="submitBtn" v-link="{path: '/blockade'}">继续答题</div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        doneBlocks: []
      };
    },
    vuex: {
      getters: {
        prefix: ({ user }) => user.prefix,
        openid: ({ user }) => user.userInfo.openid
      }
    },
    methods: {
      showNum (doneBlock) {
        if (doneBlock.lock === false) {
          return doneBlock.num;
        }
        return;
      },
      blockNum (num) {
        switch (num) {
          case 1:
            return '一';
          case 2:
            return '二';
          case 3:
            return '三';
        }
      }
    },
    created () {
      this.$http.post(this.prefix + 'Litter/Wechat/doneblock', {openid: this.openid})
      .then(res => {
        this.doneBlocks = res.body.resData.doneBlocks;
      });
    }
  };
</script>
<style lang="stylus">
  .doneBlockadeContainer
    padding-top: 40px
    width: 100%
    .doneBlockUl
      margin: 0
      padding: 0
      .doneBlockLi
        display: flex
        justify-content: space-between
        align-items: center
        margin-bottom: 30px
        padding: 0 12px
        list-style: none
        &:last-child
          margin-bottom: 0
        .left
          display: flex
          justify-content: center
          align-items: center
          width: 57px
          height: 57px
          box-sizing: border-box
          color: #ef2f48
          font-size: 23px
          border: 1px solid #ef2f48
          border-radius: 8px
          &.done
            border: none
            background: linear-gradient(90deg, #fc556b, #ef2f48)
            color: #fff
          &.lock
            border: none
            background: url(lockIcon.png) left top no-repeat
            background-size: 100% 100%
        .right
          font-size: 12px;
          color: #999
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
</style>