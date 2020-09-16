<template>
 <div class="input_box">
<span class="iconfont icon-soushuo"></span>
<input type="text" placeholder="在此搜索节目，最新最热为您推荐">
 </div>
</template>

<script>
 export default {
 name:'InputBox',
 data () {
 return {

 }
 },
 components: {

 }
 }
</script>

<style lang="less" scoped>
@import "//at.alicdn.com/t/font_2070812_gqkr63s5ynd.css";
 .input_box{
     position: relative;
   margin-top: 20px;
   margin-left: 20px;
     span{
       display: block;
       position: absolute;
       top:50%;
       transform: translateY(-50%);
       left:10px;
       font-size: 20px;
       color: #aaa;
     }
     input{
         width: 85%;
         height: 30px;
         padding-left: 35px;
         border-radius: 20px;
         outline: none;
         background-color: rgb(228,228,228);
         border: none;

     }
 }
</style>
