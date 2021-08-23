<template>
	<it-drawer v-model="showMembers">
		<NavHeader/> 
		<div class="main-card">
			<Card cardtitle = 'Harsh Malhotra' cardinfo = 'Visited 12 locations and 11 reports' carditem = '20min' />
			<Card cardtitle = 'Sajid Husain' cardinfo = 'Visited 9 locations and 5 reports' carditem = '12min' />
			<Card cardtitle = 'Harish Nadiyadwala' cardinfo = 'Visited 23 locations and 20 reports' carditem = '47min' />
			<Card cardtitle = 'Manohar Yadav' cardinfo = 'Visited 12 locations and 11 reports' carditem = '24min' />
			<Card cardtitle = 'Lavkush Mishra' cardinfo = 'Visited 23 locations and 17 reports' carditem = '01hrs' />
			<Card cardtitle = 'Bhupendra Sahi' cardinfo = 'Visited 12 locations and 8 reports' carditem = '32min' />
			<Card cardtitle = 'Vishal Dahiwala' cardinfo = 'Visited 9 locations and 9 reports' carditem = '20min' />
			<Card cardtitle = 'Rahul Mishra' cardinfo = 'Visited 12 locations and 11 reports' carditem = '18min' />
			<Card cardtitle = 'Harsh Malhotra' cardinfo = 'Visited 12 locations and 11 reports' carditem = '20min' />
			<Card cardtitle = 'Sajid Husain' cardinfo = 'Visited 9 locations and 5 reports' carditem = '12min' />
		</div>
	</it-drawer>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
import Card from '../components/Card.vue'
export default {
	name: 'Active Members',
	data() {
		return {
			showMembers: true,
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