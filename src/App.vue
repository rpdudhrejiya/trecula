<template>
  <div>
    <it-drawer v-model="drawerVisible">
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
              <div class="content"><it-input type="password" v-model="password"/></div>
              <div class="message">{{ validation.firstError('password') }}</div>
            </div>
            <div class="form-group">
              <a href="">Forgot password?</a>
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
    <it-drawer v-model="isLogin">
      <div>
        <div class="card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/></svg>
          </div>
          <div class="cardtitle">
            Active Members
          </div>
          <div class="cardinfo">
            See live and active team members
          </div>
        </div>
        <div class="card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/></svg>
          </div>
          <div class="cardtitle">
            Active Members
          </div>
          <div class="cardinfo">
            See live and active team members
          </div>
        </div>
      </div>
    </it-drawer>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59528.56014312462!2d72.88647608461409!3d21.170895506680917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1628855800613!5m2!1sen!2sin" width="1920" height="1099" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>
</template>

<script>
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;
export default {
  name: 'App',
  data() {
    return {
      email: '',
      password: '',
      drawerVisible : true,
      isLogin : true,
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
  methods:{
    submit: async function () {
      const success = await this.$validate();
      if (success) {
        this.isLogin = true;
      }
    },
  }
}
</script>

<style lang='scss'>
@import "@/assets/scss/colors","@/assets/scss/typography","@/assets/scss/mixin";
  .login{
    .title{
      color: $dark;
      font-family: $Font-Title;
      font-weight: $Weight;
      font-style: $Style;
      font-size: $Size;
      line-height: $Line-height;
      @include centering;
    }
    padding: 40px;
    position: relative;
    height: 100%;
    @include centering;
  }
  .action{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 40px;
    a {
      color:#F01513;
    }
    button {
      color: #ffffff;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      background-image: linear-gradient(95.78deg, #EE0912 -11.11%, #FC5916 88.69%);
    }
  }
  .form-group{
    a {
      color:#F01513;
    }
    padding: 10px;
  }
  .icon-title {
    margin-top: 9px;
  }
  .p-4 {
    font-size: 12px;
  }
  .layout-form .message {
    position: absolute;
  }
  .head-login {
    display: flex;
    flex-direction: row;
  }
  .label {
    color: #72777A
  }
  .message {
    color: #ff0000;
    font-size: 13px;
    opacity: .5;
  }
  .card {
    height: 101px;
    width: 428px;
    padding: 13px;
    position: absolute;
    background: #FFFFFF;
    box-shadow: 6px 6px 18px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
  }
  .icon {
    width: 32px;
    height: 32px;
    mix-blend-mode:Pass through;
    position: absolute;
    left: 30px;
    top: 35px;
  }
  .cardtitle {
    position: absolute;
    left: 20.09%;
    right: 34.58%;
    top: 24.75%;
    bottom: 43.56%;
    font-family: Varela Round;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    color: #141212;
  }
  .cardinfo {
    position: absolute;
    left: 20.09%;
    right: 17.76%;
    top: 46.53%;
    bottom: 21.78%;
    font-family: Varela Round;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 32px;
    color: rgba(20, 18, 18, 0.5);
  }
  
</style>
