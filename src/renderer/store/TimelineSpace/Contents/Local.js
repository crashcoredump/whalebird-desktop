import Mastodon from 'megalodon'

const Local = {
  namespaced: true,
  state: {
    timeline: [],
    unreadTimeline: [],
    lazyLoading: false,
    heading: true,
    filter: ''
  },
  mutations: {
    changeHeading (state, value) {
      state.heading = value
    },
    appendTimeline (state, update) {
      if (state.heading) {
        state.timeline = [update].concat(state.timeline)
      } else {
        state.unreadTimeline = [update].concat(state.unreadTimeline)
      }
    },
    updateTimeline (state, messages) {
      state.timeline = messages
    },
    mergeTimeline (state) {
      state.timeline = state.unreadTimeline.slice(0, 80).concat(state.timeline)
      state.unreadTimeline = []
    },
    insertTimeline (state, messages) {
      state.timeline = state.timeline.concat(messages)
    },
    archiveTimeline (state) {
      state.timeline = state.timeline.slice(0, 40)
    },
    clearTimeline (state) {
      state.timeline = []
      state.unreadTimeline = []
    },
    updateToot (state, message) {
      state.timeline = state.timeline.map((toot) => {
        if (toot.id === message.id) {
          return message
        } else if (toot.reblog !== null && toot.reblog.id === message.id) {
          // When user reblog/favourite a reblogged toot, target message is a original toot.
          // So, a message which is received now is original toot.
          const reblog = {
            reblog: message
          }
          return Object.assign(toot, reblog)
        } else {
          return toot
        }
      })
    },
    deleteToot (state, message) {
      state.timeline = state.timeline.filter((toot) => {
        if (toot.reblog !== null && toot.reblog.id === message.id) {
          return false
        } else {
          return toot.id !== message.id
        }
      })
    },
    changeLazyLoading (state, value) {
      state.lazyLoading = value
    },
    changeFilter (state, filter) {
      state.filter = filter
    }
  },
  actions: {
    fetchLocalTimeline ({ commit }, account) {
      const client = new Mastodon(
        account.accessToken,
        account.baseURL + '/api/v1'
      )
      return client.get('/timelines/public', { limit: 40, local: true })
        .then(res => {
          commit('updateTimeline', res.data)
          return res.data
        })
    },
    lazyFetchTimeline ({ state, commit, rootState }, last) {
      if (last === undefined || last === null) {
        return Promise.resolve(null)
      }
      if (state.lazyLoading) {
        return Promise.resolve(null)
      }
      commit('changeLazyLoading', true)
      const client = new Mastodon(
        rootState.TimelineSpace.account.accessToken,
        rootState.TimelineSpace.account.baseURL + '/api/v1'
      )
      return client.get('/timelines/public', { max_id: last.id, limit: 40, local: true })
        .then(res => {
          commit('changeLazyLoading', false)
          commit('insertTimeline', res.data)
          return res.data
        })
        .catch(err => {
          commit('changeLazyLoading', false)
          throw err
        })
    }
  }
}

export default Local
