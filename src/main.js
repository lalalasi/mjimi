// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'babel-polyfill';
import './assets/js/common.js';
import ft from '@/filters/filters';
import 'iview/dist/styles/iview.css';
import './assets/css/common.css';

//默认配置
Vue.use(iView);
// Vue.config.productionTip = false
//路由刷新返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
//注册全局过滤器
for(let key in ft){
  Vue.filter(key, ft[key]);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
