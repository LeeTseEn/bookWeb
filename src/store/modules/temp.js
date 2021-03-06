const state = {
  total: 0,
  flag: '',
  epilogue: ''
}
const getters = {
  mapGetTotal: state => {
    console.log('vuex total: ', state.total)
    return state.total
  },
  mapGetFlag: state => {
    console.log('vuex flag: ', state.flag)
    return state.flag

  },
  mapGetEpilogue: state => {
    console.log('vuex epilogue: ', state.epilogue)
    return state.epilogue
  }
}
const mutations = {
  changeTotal(state, val) {
    state.total = val
    console.log('vuex total is: ', state.total)
  },
  changeFlag(state, val) {
    if (state.total <= 5) {
      val = 'a'
    } else if (state.total > 5 && state.total <= 8) {
      val = 'b'
    } else if (state.total > 8 && state.total <= 12) {
      val = 'c'
    } else if (state.total > 12) {
      val = 'd'
    }
    state.flag = val
  },
  changeEpilogue(state) {
    switch (state.flag) {
      case 'a':
        state.epilogue = '日本'
        break
      case 'b':
        state.epilogue = '香港'
        break
      case 'c':
        state.epilogue = '義大利'
        break
      case 'd':
        state.epilogue = '印度'
        break
    }
  }
}
const actions = {
  setFlag(val) {
    val.commit('changeFlag')
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}