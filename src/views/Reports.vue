<template>
	<it-drawer v-model="showReports" :closable-mask='false'>
		<NavHeader/> 
		<div class="main-card">
			Reports goes here..
		</div>
	</it-drawer>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
export default {
	name:'Reports',
	data() {
		return {
			showReports: true,
		}
	},
	components: {
    NavHeader,
  },
}
</script>

<style>

</style>