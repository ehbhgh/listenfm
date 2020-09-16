<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in images" :key="item.id">
        <img :src="item.url" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
//引入封装axios
import http from "../../utils/http";
export default {
  name: "Swiper",
  data() {
    return {
      swiperList: [
        {
          id: "02",
          url:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=30261002,3718743282&fm=26&gp=0.jpg"
        },
        {
          id: "03",
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600199390368&di=1a891d9361f970f61c4152aec6778512&imgtype=0&src=http%3A%2F%2F08imgmini.eastday.com%2Fmobile%2F20190415%2F20190415120339_faaaa9db1d055b90ca64852952bf1f17_10.jpeg"
        }
      ],
      images: []
    };
  },
  created() {
    this.getSwiper();
  },
  methods: {
    //获取轮播图
    async getSwiper() {
      //请求轮播图数据
      const res = await http("get", "/app/adverts.do", {
        params: {
          miniAppId: 4
        }
      });
      let {
        data: { adMap }
      } = res;
      let list = adMap["1"];
      this.swiperList.map(item => {
        list.push(item);
      });
      this.images = list;
    }
  },

  components: {}
};
</script>

<style lang="less" scoped>
/deep/.van-swipe__track {
  margin-top: 20px !important;
  .van-swipe-item {
    width: 100%;
    /deep/img {
      width: 100%;
      height: 180px;
    }
  }
}

/deep/.van-swipe__indicator {
  width: 10px;
  height: 10px;
  background-color: rgba(44, 44, 44, 0.5);
}
/deep/.van-swipe__indicator--active {
  background-color: orangered;
}

.van-swipe__indicators {
  position: absolute !important;
  bottom: 20px !important;
  width: 100px;
  right: 4px !important;
}
</style>
