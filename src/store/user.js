import * as firebase from "firebase";

class User {
  constructor (id, firstName, lastName, email, password) {
    this.id = id,
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
  }
}

export default {
  state: {
    user: null
  },
  actions: {
    async registerUser ({commit}, {email, password, firstName, lastName}) {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
      commit('setUser', new User(user.user.uid, firstName, lastName, email, password))
    },
    async loginUser({commit},  payload){
      const user = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      commit('setUser', new User(user.user.uid, payload.firstName, payload.lastName, payload.email, payload.password))
    },
    logoutUser ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  getters: {
    getUser (state) {
      return state.user
    }
  }
}