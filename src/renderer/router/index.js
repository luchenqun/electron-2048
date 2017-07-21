import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Game',
      component: require('@/components/Game')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
