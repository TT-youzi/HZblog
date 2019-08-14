import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue'
import Music from '../views/template/Music/music.vue'
import Article from '../views/template/Article/article.vue'
import FoodList from '../views/template/FoodList/foodlist.vue'
import Vlog from '../views/template/Vlog/vlog.vue'
import PalyList from '../views/template/Music/play_list_detail.vue'
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
    }, {
      path: '/article',
      name: 'Article',
      component: Article,
    }, {
      path: '/foodlist',
      name: 'FoodList',
      component: FoodList,
    }, {
      path: '/vlog',
      name: 'Vlog',
      component: Vlog,
    }, {
      path: '/music/paly_list',
      name: 'paly_list',
      component: PalyList,
    }]
  }]
})
