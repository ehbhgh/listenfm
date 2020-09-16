import Vue from 'vue'
import VueRouter from 'vue-router'
//路由模块
const Home=()=>import("../views/Home.vue")
const Broadcast=()=>import("../views/Broadcast.vue")
const Mine=()=>import("../views/Mine.vue")
const Album=()=>import("../views/Album.vue")

Vue.use(VueRouter)

const routes = [
  {
     path:"/",
     redirect: "/home"
  },
  {
   path:"/home",
   component:Home,
   meta:{
    title:"听听FM"
  }
  },
  {
    path:"/broadcast",
    component:Broadcast,
    meta:{
      title:"听听广播"
    }
  },
  {
    path:"/mine",
    component:Mine,
    meta:{
      title:"个人中心"
    }
  },
  {
    path:"/album",
    component:Album,
    meta:{
      title:"听听专辑"
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
