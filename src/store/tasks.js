export default {
  state: {
    tasks: []
  },
  actions: {
    addTask ({commit}, task) {
      commit('setTaskToState', task)
    },
    removeTask ({commit}, id){
      commit('deleteTask', id)
    },
    doneTask ({commit}, id){
      commit('doneTask', id)
    },
  },
  mutations: {
    setTaskToState (state, task) {
      state.tasks.push(task)
    },
    deleteTask (state, id) {
      state.tasks = state.tasks.filter(e => e.id !== id)
    },
    doneTask (state, id) {
      state.tasks.map(element => {
        if(element.id === id){
          element.done = true
        }
      })
    }
  },
  getters: {
    getTasks (state) {
      return state.tasks
    }
  }
}