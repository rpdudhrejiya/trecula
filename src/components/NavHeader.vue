<template>
	<div class = "nav">
		<a @click = "$router.back()">
			<it-icon class="back-icon" name = "arrow_back" color="#F01513" ></it-icon>
		</a>
	</div>
</template>

<script>
export default {
	name:'NavHeader',
}
</script>

<style lang='scss'>
.nav {
	position: fixed;
	z-index: 999;
	width: 500px;
	background: #FFFFFF;
	box-shadow: 6px 6px 18px rgba(0, 0, 0, 0.06);
	border-radius: 8px;
}
.back-icon {
	padding: 25px;
}
</style>