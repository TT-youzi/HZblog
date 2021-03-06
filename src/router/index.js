import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue'
import IndexDetail from '@/views/index_detail.vue'
import Music from '../views/template/Music/music.vue'
import Article from '../views/template/Article/article.vue'
import FoodList from '../views/template/FoodList/foodlist.vue'
import Vlog from '../views/template/Vlog/vlog.vue'
import PalyList from '../views/template/Music/play_list_detail.vue'
import EditArticle from '../views/template/Article/edit_article.vue'
import ArticleDetail from '../views/template/Article/article_detail.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
    redirect: '/article',
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
    }, {
      path: '/article/edit_article',
      name: 'edit_article',
      beforeEnter: (to, from, next) => {
        // authkey 存在 进入该路由，不存在跳转到登陆页面
        if (sessionStorage.getItem('pass')) {
          next()
        } else {
          next('/article')
        }
      },
      meta: {
        requireAuth: true
      },
      component: EditArticle,

    }]
  }, {
    path: '/index_detail',
    name: 'IndexDetail',
    component: IndexDetail,
    children: [{
      path: '/article_detail',
      name: 'article_detail',
      component: ArticleDetail,
    }]
  }]
})
