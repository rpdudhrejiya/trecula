<template>
  <div class="card">
    <div class="icon" v-show="isIcon">
			<svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M22.6666 25V22.3333C22.6666 20.9188 22.1047 19.5623 21.1045 18.5621C20.1043 17.5619 18.7477 17 17.3333 17H6.66658C5.2521 17 3.89554 17.5619 2.89535 18.5621C1.89516 19.5623 1.33325 20.9188 1.33325 22.3333V25M30.6666 25V22.3333C30.6657 21.1516 30.2724 20.0037 29.5484 19.0698C28.8244 18.1358 27.8108 17.4688 26.6666 17.1733M21.3333 1.17333C22.4805 1.46707 23.4973 2.13427 24.2234 3.06975C24.9496 4.00523 25.3437 5.15577 25.3437 6.34C25.3437 7.52423 24.9496 8.67477 24.2234 9.61025C23.4973 10.5457 22.4805 11.2129 21.3333 11.5067M17.3333 6.33333C17.3333 9.27885 14.9454 11.6667 11.9999 11.6667C9.0544 11.6667 6.66658 9.27885 6.66658 6.33333C6.66658 3.38781 9.0544 1 11.9999 1C14.9454 1 17.3333 3.38781 17.3333 6.33333Z" stroke="#090A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
    </div>
    <div class="card-right">
    <div class="cardtitle">
      {{cardtitle}}
    </div>
    <div class="cardinfo">
      {{cardinfo}}
    </div>
    </div>
			<div class="card-item">
			{{carditem}}
    </div>
	</div>
</template>

<script>
export default {
	name:"card",
	props:['isIcon','cardtitle', 'cardinfo', 'carditem'],
}
</script>

<style lang='scss'>
@import '@/assets/scss/card';
</style>