<template>
	<it-drawer v-model="isLogin" :closable-mask='false'>
		<NavHeader/>  
		<div class="main-card">
			<router-link to="/dashboard/active-members" id="anchor-link"><Card isIcon='true' cardtitle = 'Active Members' cardinfo = 'See live and active team members' carditem = '10/16' /></router-link>
			<Card isIcon='true' cardtitle = 'Reports' cardinfo = 'Team activity and tracking reports' />
			<Card isIcon='true' cardtitle = 'Settings' cardinfo = 'Workspace configurations & Settings' />
			<Card isIcon='true' cardtitle = 'Support' cardinfo = 'Connect us to get live support' />
		</div>
		<div class="power">
			<it-button class="power-button" @click="isLogin = false"> 
				<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M14.3 5.53329C15.3487 6.58228 16.0627 7.91866 16.3519 9.37345C16.6411 10.8282 16.4924 12.3361 15.9247 13.7064C15.357 15.0767 14.3957 16.2479 13.1624 17.0719C11.9291 17.8959 10.4791 18.3357 8.99585 18.3357C7.5126 18.3357 6.06265 17.8959 4.82933 17.0719C3.59602 16.2479 2.63472 15.0767 2.06699 13.7064C1.49926 12.3361 1.35059 10.8282 1.63978 9.37345C1.92897 7.91866 2.64304 6.58228 3.69169 5.53329M9.00002 1.66663V9.99996" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</it-button>
		</div>
	</it-drawer>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
import Card from '../components/Card.vue'
export default {
	name: 'Dashboard',
	data() {
		return {
			isLogin: true,
		}
	},
	components: {
    NavHeader,
    Card,
  },
}
</script>

<style>

</style>