// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueFire from 'vuefire'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueFire)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store: new Vuex.Store({
    state:  {
      obj:[],
      avaliacoes:{
        nome: '',
        idade: '',
        peso: ''
      }
    },
    mutations:  {
        SET_AVALIACOES(store, obj) {
       // window.console.log(store)
      //  window.console.log(obj)
        store.avaliacoes = obj
      }
    },
    actions: {
      setAvaliacoes({dispatch}, {obj} ){
      dispatch('SET_AVALIACOES', obj)
     },
     SET_AVA ({ dispatch }, { obj} ) {
      window.console.log(obj);
      dispatch('SET_AVALIACOES', {obj})
    },
     SET_AVALIACOES ({ commit, state }, { obj }) {
      window.console.log(obj);
      commit('SET_AVALIACOES', obj)
    }
   },
    strict:true
  })
})
