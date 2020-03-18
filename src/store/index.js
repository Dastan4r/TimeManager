import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import tasks from './tasks'
import team from './team'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user, tasks, team
  }
})
