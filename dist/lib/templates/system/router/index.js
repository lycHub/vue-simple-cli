import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// import store from '@/store'
// import { getMenuByRouter } from '../../../utils/util'
import { routerAuth } from '../../../utils/auth'
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
// const menus = getMenuByRouter(routes)
// store.commit('app/SET_SIDE_MENU', menus)
router.beforeEach((to, from, next) => {
  routerAuth(to, from, next, routes, '{{plate}}', 'guowy-channel-manage-webapp')
})

export default router
