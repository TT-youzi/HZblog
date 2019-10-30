// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import animated from 'animate.css'
//封装axios，注册为全局组件
import http from './utils/http'
Vue.prototype.$http = http;
import iView from 'iview';
import 'iview/dist/styles/iview.css';
//视频插件
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video;
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(iView);
Vue.use(mavonEditor)
Vue.use(animated)
//解决 vue-router报错Uncaught (in promise) undefined
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
