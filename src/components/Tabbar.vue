<template>
  <div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/home">
        <template #icon="props">
          <img :src="props.active ? icon1.active : icon1.inactive" />
        </template>
        首页
      </van-tabbar-item>

      <van-tabbar-item to="/album">
        <template #icon="props">
          <img :src="props.active ? icon2.active : icon2.inactive" />
        </template>
        <span>专辑</span>
      </van-tabbar-item>

      <van-tabbar-item to="/broadcast">
        <template #icon="props">
          <img :src="props.active ? icon3.active : icon3.inactive" />
        </template>
        广播
      </van-tabbar-item>

      <van-tabbar-item to="/mine">
        <template #icon="props">
          <img :src="props.active ? icon4.active : icon4.inactive" />
        </template>
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      active: 0,
      icon1: {
        active: require("../images/icons/home1.png"),
        inactive: require("../images/icons/home.png")
      },
      icon2: {
        active: require("../images/icons/ablum1.png"),
        inactive: require("../images/icons/ablum.png")
      },
      icon3: {
        active: require("../images/icons/broadcast1.png"),
        inactive: require("../images/icons/broadcast.png")
      },
      icon4: {
        active: require("../images/icons/mine1.png"),
        inactive: require("../images/icons/mine.png")
      }
    };
  },
  components: {}
};
</script>

<style>
</style>
