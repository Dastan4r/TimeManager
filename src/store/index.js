import Vue from 'vue'
import Vuex from 'vuex'
import navbar from './navbar'
import loaders from './loaders'
import user from './user'
import tasks from './tasks'
import team from './team'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    navbar, loaders, user, tasks, team
  }
})
