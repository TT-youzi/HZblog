import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  //定义初始数据
  state: {
    title: '',
    list: [],
    isShow: false
  },
  //同步的方法
  mutations: {
    //向state 里面设置数据
    changeListMutation(state, list) {
      state.list = list
    },
    //在list.vue里面点击下拉选项的时候触发 给state.title赋值
    changeTitleMutation(state, title) {
      state.title = title
    },
    //selectinput.vue里面点击input的时候触发 给state.isShow赋值
    toggleShow(state, isShow) {
      state.isShow = isShow
    }
  },
  //异步的方法
  actions: {
    //在list.vue里面created生命周期里面触发
    getListAction({
      commit
    }) {
      axios.get('/mock/5afd9dc0c088691e06a6ab45/example/dataList')
        .then((res) => {
          commit('changeListMutation', res.data) //调用mutations下面的changeListMutation方法并且传值过去
        })
        .catch((error) => {
          console.log(error)
        })

    }
  }
})
// 触发异步里面的方法是用 this.$store.dispatch('这里是方法名')
// 触发同步里面的方法是用 this.$store.commit('这里是方法名')
