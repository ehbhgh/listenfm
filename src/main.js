import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入vant组件
import "./plugin/vant"

//移动端适配
import 'lib-flexible'

//引入全局css
import "./assets/common.css"

//引入时间过滤组件
import moment from 'moment'


Vue.config.productionTip = false

//定义时间过滤全局组件
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
