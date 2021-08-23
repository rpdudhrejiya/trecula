import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Forgot from '../views/Forgot.vue'
import Active_Members from '../views/Active_Members'
const routes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/forgot',
		name: 'Forgot',
		component: Forgot
	},
	{
		path: '/dashboard/active-members',
		name: 'Active Members',
		component: Active_Members
	}
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
