import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast';
Vue.config.productionTip = false
// 安装toast插件
Vue.use(Toast)
//解决移动端300毫秒延迟
FastClick.attach(document.body)
Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('assets/img/common/placeholder.gif')
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
