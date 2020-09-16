//这里写按需导入的vant组件
import { Tabbar, TabbarItem } from 'vant';
import { Icon } from 'vant';
import { NavBar } from 'vant';
import { Swipe, SwipeItem } from 'vant';
//引入轮播图
import Vue from 'vue'
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);