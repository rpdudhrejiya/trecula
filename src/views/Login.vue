<template>
	<it-drawer v-model="isAuthorized" :closable-mask='false'>
		<div class="login">
			<form @submit.prevent >
				<div class="layout-form">
					<div class="head-login">
						<div class="icon-title">
							<svg width="35" height="26" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M15.744 3.36796C16.1012 2.86796 17.0635 2.7628 17.5 2.77272C17.9365 2.76281 18.8988 2.86797 19.256 3.36797C19.4048 2.9513 19.881 2.92154 20.0595 3.01083C20.0709 3.01652 20.0827 3.02222 20.0947 3.02804C20.2709 3.11345 20.5022 3.22548 20.4464 3.75488C20.375 3.99297 20.2579 4.21122 20.2083 4.29059C20.2976 4.37987 20.4821 4.62392 20.506 4.88583C20.5738 4.83786 20.6431 4.78867 20.7141 4.73837C23.1954 2.97869 27.5927 -0.139801 35 0.00487595C25.559 2.6474 21.6249 7.69438 19.1127 14.958C19.0962 17.3158 19.3436 19.6537 19.8565 22.356C20.1408 23.8537 19.0197 25.2727 17.4953 25.2727C15.9739 25.2727 14.8534 23.8589 15.1319 22.3632C15.6427 19.62 15.8806 17.2531 15.8534 14.8602C13.3396 7.64905 9.39861 2.63551 0 0.00486239C7.40732 -0.139814 11.8046 2.97868 14.2859 4.73836L14.494 4.88581C14.5179 4.62391 14.7024 4.37986 14.7917 4.29058C14.7421 4.21121 14.625 3.99296 14.5536 3.75486C14.4978 3.22546 14.7291 3.11343 14.9053 3.02803C14.9173 3.02221 14.9291 3.01651 14.9405 3.01081C15.119 2.92153 15.5952 2.95129 15.744 3.36796ZM5.26786 8.99297C5.24405 5.82631 2.44048 2.33623 1.04167 0.987023C9.07739 3.39774 13.5417 9.17155 15.2679 15.3323C12.3214 10.987 9.8512 9.35012 5.26786 8.99297ZM34.0179 0.987023C32.619 2.33623 29.8155 5.82631 29.7917 8.99297C25.2083 9.35012 22.7381 10.987 19.7917 15.3323C21.5179 9.17155 25.9821 3.39774 34.0179 0.987023Z" fill="url(#paint0_linear)"/>
							<defs>
							<linearGradient id="paint0_linear" x1="6.60714" y1="-19.3701" x2="33.7202" y2="41.4334" gradientUnits="userSpaceOnUse">
							<stop stop-color="#EE0979"/>
							<stop offset="1" stop-color="#FD5D11"/>
							</linearGradient>
							</defs>
							</svg>
						</div>
						<div class="title">
							TRACULA
						</div>
					</div>
					<div class="form-group" :class="{error: validation.hasError('email')}">
						<div class="label">Email</div>
						<div class="content"><it-input v-model="email"/></div>
						<div class="message">{{ validation.firstError('email') }}</div>
					</div>
					<div class="form-group" :class="{error: validation.hasError('password')}">
						<div class="label">Password</div> 
						<div class="content"><it-input type="password" v-model="password" /></div>
						<div class="message">{{ validation.firstError('password') }}</div>
					</div>
					<div class="form-group">
						<router-link to="/forgot">Forgot password?</router-link>
					</div>
				</div>
				<div class="action">
						<it-button @click="submit" block>Log in</it-button>
						<div class="p-4">
							<small>By continuing, you are agree to our <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>.</small>
						</div>
				</div>
			</form>
		</div>
	</it-drawer>
</template>

<script>
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;
import { mapActions } from 'vuex'
export default {
	name:'Login',
	data() {	
		return {
			email : '',
      password : '',
			isAuthorized: true,
		}
	},
	validators: {
    email: function (value) {
      return Validator.value(value).required().email();
    },
    password: function (value) {
      return Validator.value(value).required().minLength(6);
    },
  },
	methods: {
		...mapActions(["LogIn"]),
		submit: async function () {
      const success = await this.$validate();
      if (success) {
				const User = {
					'email': this.email,
					'password': this.password
				}
				try {
					await this.LogIn(User);
					this.$router.push('/dashboard');
				}
				catch(error) {
					console.log(error);
				}
      }
    },
	}
}
</script>

<style>

</style>