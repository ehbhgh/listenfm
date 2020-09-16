<template>
  <div id="app">
    <van-nav-bar :title="$route.meta.title" />
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue';
export default {
  components: {
    Tabbar
  }
};
</script>
<style lang="less" scoped>
#app {
  padding-top: 46px;
  padding-bottom: 50px;
  overflow: hidden;
  .van-nav-bar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(18, 150, 219) !important;
    /deep/ .van-nav-bar__title {
      color: #fff !important;
      font-size: 18px;
      font-weight: 600;
    }
  }
}
</style>
