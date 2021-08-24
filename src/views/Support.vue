<template>
	<it-drawer v-model="showSupport" :closable-mask='false'>
		<NavHeader/> 
		<div class="main-card">
			Support goes here..
		</div>
	</it-drawer>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
export default {
	name:'support',
	data() {
		return {
			showSupport: true,
		}
	},
	components: {
    NavHeader,
  },
}
</script>

<style>

</style>