import Vue from 'vue'
import Vuex from 'vuex'
import { cryptonator } from './src/main'


Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		ticker: {}
	},

	getters: {
		getTickerIn(state) {
			return state.ticker
		}
	},

	mutations: {
		SET_TICKER_IN(state, ticker) {
			state.ticker = ticker
		}
	},

	actions: {
		getTicker({ commit }) {
			return cryptonator.get('ticker/btc-usd').then(response => {
				commit('SET_TICKER_IN', response.data.ticker)
			})
		}
	}
})