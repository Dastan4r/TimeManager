import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  state: {
    members: []
  },
  actions: {
    getTeamMembersFromAPI ({commit}) {
      const memberURL = 'https://randomuser.me/api/?results=9'
      Vue.axios.get(memberURL)
        .then(result => commit('setTeamToState', result.data.results))
    }
  },
  mutations: {
    setTeamToState (state, team) {
      state.members = team
    }
  },
  getters: {
    getAllTeam (state) {
      return state.members
    }
  }
}