import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Forgot from '../views/Forgot.vue'
import Active_Members from '../views/Active_Members'
import Reports from '../views/Reports'
import Settings from '../views/Settings'
import Support from '../views/Support'
import store from '../store'
const routes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
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
router.beforeEach((to, from, next) => {
  const publicPages = ['/login','/forgot'];
  const authRequired = !publicPages.includes(to.path);
  if (authRequired && !store.getters.isAuthenticated) {
    return next('/login');
  }
	else {
		next();
	}
})
export default router
