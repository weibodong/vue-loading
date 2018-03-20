// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import ku from './assets/js/ku.js'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(ku)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
  watch: {
    "$route": 'checkLogin'
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      //检查是否存在session
      if (!this.getCookie('loging')) {
        this.$router.push('/login');
      } else {
        this.$router.push('/home');
      }
    }
  }
})
