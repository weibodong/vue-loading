import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: { //保存用户信息
      nick: '',
      ulevel: '',
      uid: '',
      portrait: ''
    }
  },
  getters: {},
  mutations: {
    //更新用户信息
    updateUserInfo(state, val) {
      state.userInfo = val;
    }
  },
  actions: {}
})

export default store
