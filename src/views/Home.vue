<template>
  <div>
  <input-box></input-box>
  <swiper></swiper>
  </div>
</template>

<script>
import swiper from '@/components/Swiper.vue'
import InputBox from '@/components/InputBox.vue';
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    InputBox,
    swiper
  }
};
</script>

<style lang="less" scoped>
</style>
