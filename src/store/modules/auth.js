import axios from 'axios';
import router from '../../router';
const state = {
	user: null
};
const getters = {
	isAuthenticated: state => !!state.user,
	StateUser: state => state.user,
};
const actions = {
	async LogIn({commit}, User) {
		await axios({
			method: 'post',
			url: 'http://localhost:8000/login',
			headers:{
				'Content-Type': 'application/json',
			},
			data: JSON.stringify(User)
		})
		.then((response) => {
			console.log(response);
			router.push('/dashboard')
		}, (error) => {
			console.log(error);
		});
		await commit('setUser', User.email)
	},
	async LogOut({commit}){
		commit('logout')
	}
};
const mutations = {
	setUser(state, email) {
		state.user = email
	},
	logout(state) {
		state.user = null
	},
};
export default {
  state,
  getters,
  actions,
  mutations
};