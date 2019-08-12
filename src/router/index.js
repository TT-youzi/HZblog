import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue'
import Music from '../views/template/Music/music.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
    children: [{
      path: '/music',
      name: 'Music',
      component: Music,
    }]
  }]
})
