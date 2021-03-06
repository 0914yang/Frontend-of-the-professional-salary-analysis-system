import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		isLogin: false
	},
	mutations: {
		loginChange: state => {
			state.isLogin = !state.isLogin;
		}
	}
});