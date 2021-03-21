import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast';
Vue.config.productionTip = false
// 安装toast插件
Vue.use(Toast)

Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('assets/img/common/placeholder.gif')
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
