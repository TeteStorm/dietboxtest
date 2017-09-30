import Vue from 'vue'
import Router from 'vue-router'
import Avaliacoes from '@/components/Avaliacoes'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Avaliacoes',
      component: Avaliacoes
    },

  ]
})
