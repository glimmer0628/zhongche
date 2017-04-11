<template>
 <div class="Rank">
    <div class="nameContainer">
      <div v-if="haveTag" class="rankNum" :class="rankTop">{{ this.rankNum > 2 ? this.rankNum + 1 +'.' : '' }}</div>
      <div v-if="haveTag" class="rankName">{{rankinfo.name}}</div>
      <div v-if="!haveTag" class="ranktag">{{rankinfo.tag}}: </div>
      <div v-if="!haveTag" class="rank">{{rankinfo.rank}}</div>
    </div>
    <div class="scoreConatiner">
     <div class="rankScore">积分:  {{rankinfo.score ? rankinfo.score : 0 }}</div>
    </div>
 </div>
</template>
<script>
  export default {
    props: {
      rankinfo: Object,
      rankNum: Number
    },
    computed: {
      rankTop () {
        return { 'first': this.rankNum === 0, 'second': this.rankNum === 1, 'third': this.rankNum === 2 };
      },
      haveTag () {
        if (!this.rankinfo.tag) {
          return true;
        }
        return false;
      }
    }
  };
</script>
<style lang="stylus">
.Rank
  display: flex
  justify-content: space-between
  align-items: center
  font-size: 15px
  width: 100%
  
  .nameContainer
    display: flex
    align-items: center
    justify-content: space-between
    line-height: 26px
    .rankNum
      display: flex
      align-items: center
      justify-content: center
      float: left
      width: 26px
      margin-right: 17px
      height: 49px
      &.first
        height: 57px
        background: url(gold-medal.png) center center no-repeat
        background-size: 26px 26px
      &.second
        height: 57px
        background: url(silver-medal.png) center center no-repeat
        background-size: 26px 26px
      &.third
        height: 57px
        background: url(copper-medal.png) center center no-repeat
        background-size: 26px 26px
    .rankName
      float:left
    .ranktag
      display: flex
      align-items: center
      justify-content: center
      float: left
      height: 57px
      margin-right: 5px
    .rank
      float:left
      
  .rankScore
    float: right
    color: #646464
</style>