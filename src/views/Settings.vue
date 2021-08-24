<template>
	<it-drawer v-model="showSettings" :closable-mask='false'>
		<NavHeader/> 
		<div class="main-card">
			settings goes here..
		</div>
	</it-drawer>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
export default {
	name: 'Settings',
	data() {
		return {
			showSettings : true,
		}
	},
	components: {
    NavHeader,
  },
}
</script>

<style>

</style>