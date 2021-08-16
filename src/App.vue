<template>
  <div>
    <it-drawer v-model="drawerVisible">
      <div class="login">
      <div class="layout-form">
        <div class="title">TRACULA</div>
        <div class="form-group" :class="{error: validation.hasError('email')}">
          <div class="label">* Email</div>
          <div class="content"><input type="text" class="form-control" v-model="email"/></div>
          <div class="message">{{ validation.firstError('email') }}</div>
        </div>
        <div class="form-group" :class="{error: validation.hasError('password')}">
          <div class="label">* Password</div>
          <div class="content"><input type="password" class="form-control" v-model="password"/></div>
          <div class="message">{{ validation.firstError('password') }}</div>
        </div>
        <div class="form-group">
          <a href="">Forgot password?</a>
        </div>
      </div>
      <div class="action">
        <div class="form-group">
          <it-button @click="submit" block>Login</it-button>
          <div class="p-4">
            <small>By continuing, you are agree to our <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>.</small>
          </div>
        </div>
      </div>
    </div>
    </it-drawer>
    <it-drawer v-model="isLogin">
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
    padding: 40px;
  }
  .form-group{
    a {
      color:$theme;
    }
    button {
      color: #ffffff;
      background-image: linear-gradient(95.78deg, #EE0912 -11.11%, #FC5916 88.69%);
    }
    padding: 10px;
  }
  .p-4 {
    font-size: 12px;
  }
  .layout-form .message {
    position: absolute;
  }
  .message {
    color: #FC5916;
  }
  .card {
    height: 101px;
    width: 428px;
    left: 0px;
    top: 0px;
    border-radius: 8px;

    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background: #FFFFFF;
    box-shadow: 6px 6px 18px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
  }
  .icon {
    width: 29.33px;
    height: 24px;
    top :4px;
    left: 1.33px;
    mix-blend-mode:Pass through;
    position: absolute;
    left: 4.17%;
    right: 4.17%;
    top: 12.5%;
    bottom: 12.5%;

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
