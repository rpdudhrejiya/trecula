<template>
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
        <it-button @click="isLogin = true" block>Login</it-button>
        <div class="p-4">
          <small>By continuing, you are agree to our <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>.</small>
        </div>
      </div>
    </div>
    <it-drawer v-model="isLogin">
      <Card/>
    </it-drawer>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      isLogin: false,
    }
  },
  components: {
    Card,
  },
  validators: {
    email: function (value) {
      return Validator.value(value).required().email();
    },
    password: function (value) {
      return Validator.value(value).required().minLength(6);
    },
  },
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
</style>
