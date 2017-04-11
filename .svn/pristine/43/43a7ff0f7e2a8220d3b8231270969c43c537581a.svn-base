<template>
  <div class="messageItem">
    <div class="item">
      <div class="message_content">
        <div class="message_title">{{messageinfo.message_content}}</div>
        <div class="message_describe">
          <div class="message_tag">{{messageinfo.message_tag}}</div>
          <div class="message_time">{{messageinfo.message_time}}</div>
          <div class="message_name">{{messageinfo.message_name}}</div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script type="text/javascript">
export default{
  props: {
    messageinfo: Object
  }
};
</script>
<style lang="stylus">
  @import '../../../static/css/border-1px.styl'
  
  .messageItem
    width: 100%
    padding:0 12px
    box-sizing:border-box
    background: #ffffff
    .item
      
      width: 100%
      padding: 13px 0
      box-sizing:border-box
      border-1px-bot('#e6e6e6')
      .message_content
        
        width: 100%
        height: 100%
        .message_title
          
          color:#353535
          font-size:14px
          line-height: 20px
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        .message_describe
          margin-top:10px
          height: 20px
          .message_tag
            float: left
            height: 16px
            line-height: 16px
            border-radius: 5px
            padding:2px 7px
            text-align:center
            color:#ffffff
            font-size:11px
            background:#26a59a
          .message_name
            float: right
            color:#808080
            font-size:14px
            margin-right: 21px
          .message_time
            float: right
            color:#808080
            font-size:14  px  
  
</style>