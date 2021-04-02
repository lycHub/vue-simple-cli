import Vue from 'vue'
import App from './App.vue'
import '../../registerServiceWorker'
import router from './router'
import store from '../../store'
import '@/config/iview-global'
import '@/config/global-directives'
import '@/assets/styles/index.less'
import Cookies from 'js-cookie'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  provide () {
    return {
      sysName: '{{nameCn}}',
      sysIcon: 'tms'
    }
  },
  created () {
    Cookies.set('system-type', '{{plate}}')
  },
  render: h => h(App)
}).$mount('#app')
