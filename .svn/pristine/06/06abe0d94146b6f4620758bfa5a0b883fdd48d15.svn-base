<template>
  <div class="blockadeItemContainer">
    <div class="title">
      {{ itemnum }}、{{ blockitem.subTitle }}
    </div>
    <div class="optionsContainer">
      <ul class="optionUl">
        <li class="optionLi" @click="chosenThis(subOption)" v-for="subOption in blockitem.subOptions">
          <div class="optionIcon" :class="{'active': subOption.chosenOption}">{{ subOption.optionType }}</div>
          <div class="optionInfo">{{ subOption.optionInfo }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      blockitem: Object,
      itemnum: Number
    },
    methods: {
      chosenThis (optionItem) {
        this.blockitem.subOptions.forEach((item) => {
          item.chosenOption = false;
        });
        optionItem.chosenOption = true;
      }
    }
  };
</script>
<style lang="stylus">
  .blockadeItemContainer
    padding: 15px 12px
    background-color: #fff
    .title
      margin-bottom: 20px
      font-size: 15px
    .optionsContainer
      .optionUl
        margin: 0
        padding: 0
        .optionLi
          display: flex
          align-items: center
          margin-bottom: 10px
          list-style: none
          &:last-child
            margin-bottom: 0
          .optionIcon
            display: flex
            justify-content: center
            align-items: center
            box-sizing: border-box
            width: 37px
            height: 25px
            font-size: 12px
            color: #999
            border: 1px solid #999
            border-radius: 11px
            &.active
              color: #fff
              background: linear-gradient(90deg, #fc556b, #ef2f48)
              border: none
          .optionInfo
            padding-left: 19px
            font-size: 15px
            color: #999
</style>