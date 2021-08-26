import router from '../../router'
const state = {
	user: null,
	token: null
};
const getters = {
	isAuthenticated: state => !!state.user,
	StateUser: state => state.user,
};
const actions = {
	async LogIn({commit}, { User, Token}) {
		commit('setUser', User)
		commit('setToken', Token)
		router.push('/dashboard')
	},
	async LogOut({commit}){
		commit('logout')
	}
};
const mutations = {
	setUser(state, user ) {
		state.user = user
	},
	setToken(state, token) {
		state.token = token
	},
	logout(state) {
		state.user = null
		state.token = null
	},
};
export default {
  state,
  getters,
  actions,
  mutations
};