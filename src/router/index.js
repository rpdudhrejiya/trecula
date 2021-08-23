import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Forgot from '../views/Forgot.vue'
import Active_Members from '../views/Active_Members'
import Reports from '../views/Reports'
import Settings from '../views/Settings'
import Support from '../views/Support'
//let isAuthenticated = false;
const routes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard,
		// beforeEnter: (to, from, next) => {
		// 	if(!isAuthenticated)
		// 		next({ name:'Login' })
		// 	else
		// 		next()
		// }
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
	},
	{
		path: '/dashboard/reports',
		name: 'Reports',
		component: Reports
	},
	{
		path: '/dashboard/settings',
		name: 'Settings',
		component: Settings
	},
	{
		path: '/dashboard/support',
		name: 'Support',
		component: Support
	}
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
