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
              <div class="content"><it-input type="password" v-model="password" /></div>
              <div class="message">{{ validation.firstError('password') }}</div>
            </div>
            <div class="form-group">
              <a @click="forgot = true">Forgot password?</a>
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
    <it-drawer v-model="forgot">
      <Header @currentDrawer="forgot=false"/>
      <div class="number-input">
        <vue-tel-input v-model="pNumber" v-on:country-changed="countryChanged" :autoFormat="false"></vue-tel-input>
      </div>
      <div class="code-sent" v-show="sent">
        <div class="code">
          Enter authentication code
        </div>
        <div class="code-info">
          Enter the 4-digit that we have sent via the
          phone number +{{ country }} {{ pNumber }}
          <div class="code-input">
            <input v-model="digit1" id="1" class="c1" type="text" maxlength="1" @keyup="onKeyUpEvent(1, $event)" @focus="onFocusEvent(1)"/>
            <input v-model="digit2" id="2" class="c1" type="text" maxlength="1" @keyup="onKeyUpEvent(2, $event)" @focus="onFocusEvent(2)"/>
            <input v-model="digit3" id="3" class="c1" type="text" maxlength="1" @keyup="onKeyUpEvent(3, $event)" @focus="onFocusEvent(3)"/>
            <input v-model="digit4" id="4" class="c1" type="text" maxlength="1" @keyup="onKeyUpEvent(4, $event)" @focus="onFocusEvent(4)"/>
          </div>
        </div>
      </div>
      <div class="forgot">
        <it-button class="verify-button" @click="checkNumber" block>Send me verification code</it-button>
      </div>
    </it-drawer>
    <it-drawer v-model="isLogin">
      <Header @currentDrawer="isLogin=false"/>  
      <div class="main-card">
        <a id="anchor-link" @click="member = true"><Card isIcon='true' cardtitle = 'Active Members' cardinfo = 'See live and active team members' carditem = '10/16' /></a>
        <Card isIcon='true' cardtitle = 'Reports' cardinfo = 'Team activity and tracking reports' />
        <Card isIcon='true' cardtitle = 'Settings' cardinfo = 'Workspace configurations & Settings' />
        <Card isIcon='true' cardtitle = 'Support' cardinfo = 'Connect us to get live support' />
      </div>
      <div class="power">
        <it-button class="power-button" @click="isLogin = false"> 
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.3 5.53329C15.3487 6.58228 16.0627 7.91866 16.3519 9.37345C16.6411 10.8282 16.4924 12.3361 15.9247 13.7064C15.357 15.0767 14.3957 16.2479 13.1624 17.0719C11.9291 17.8959 10.4791 18.3357 8.99585 18.3357C7.5126 18.3357 6.06265 17.8959 4.82933 17.0719C3.59602 16.2479 2.63472 15.0767 2.06699 13.7064C1.49926 12.3361 1.35059 10.8282 1.63978 9.37345C1.92897 7.91866 2.64304 6.58228 3.69169 5.53329M9.00002 1.66663V9.99996" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </it-button>
      </div>
    </it-drawer>
    <it-drawer v-model="member">
      <Header @currentDrawer="member=false"/> 
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
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59528.56014312462!2d72.88647608461409!3d21.170895506680917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1628855800613!5m2!1sen!2sin" width="1920" height="1099" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Card from './components/Card.vue'
import {phone} from 'phone';
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;
export default {
  name: 'App',
  data() {
    return {
      email : '',
      password : '',
      drawerVisible : true,
      isLogin : false,
      forgot : false,
      pNumber : null,
      country : null,
      digit1 : null,
      digit2 : null,
      digit3 : null,
      digit4 : null,      
      sent : false,
      member : false,
    }
  },
  components: {
    Header,
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
  methods:{
    submit: async function () {
      const success = await this.$validate();
      if (success) {
        this.isLogin = true;
      }
    },
    countryChanged(country) {
      this.country = country.dialCode
    },
    getElement(index) {
      return document.getElementById('' + index);
    },
    onKeyUpEvent(index, event) {
      const eventCode = event.which || event.keyCode;
      if (this.getElement(index).value.length === 1) {
        if (eventCode > 31 && (eventCode < 48 || eventCode > 57))
          this.getElement(index).value='';
        else {
          if (index !== 4) {
            this.getElement(index+ 1).focus();
          } else {
            this.getElement(index).blur();
            this.forgot = false;
            this.isLogin = true;
          }
        }
      }
      if (eventCode === 8 && index !== 1) {
        this.getElement(index - 1).focus();
      }
    },
    onFocusEvent(index) {
      for (let item = 1; item < index; item++) {
        const currentElement = this.getElement(item);
        if (!currentElement.value) {
          currentElement.focus();
          break;
        }
      }
    },
    checkNumber() {
      let str = `+${this.country}${this.pNumber}`;
      const data = phone(str);
      if(data.isValid) this.sent = true;
      else this.sent = false;
    }
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
  #anchor-link {
    text-decoration: none;
  }
  .main-card {
    padding: 35px;
    margin-top: 30px;
    .card {
      position: relative;
      margin: 26px;
      background: #FFFFFF;
      box-shadow: 6px 6px 18px rgba(0, 0, 0, 0.06);
      border-radius: 8px;
      font-family: Varela Round;
      font-style: normal;
      font-weight: normal;
      display: flex;
      flex-direction: row;
      padding: 15px;
      .icon {
        float: left;
        margin: 10px 10px 0px 20px;
        width: 29px;
        height: 24px;
      }
      .card-right {
        float: right;
        padding-left: 10px;
        .cardtitle {
          font-size: 18px;
          line-height: 32px;
          color: #141212;
        }
        .cardinfo {
          position: relative;
          margin-top: -15px;
          font-size: 12px;
          line-height: 32px;
          color: rgba(20, 18, 18, 0.5);
        }
      }
      .card-item {
        margin: auto;
        font-family: Varela Round;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 32px;
        color: #141212;         
      }
    }
  }
  .power {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 40px;
    .power-button {
      width: 45px;
      height: 45px;
      background: #F9462D;
      box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.06);
      border-radius: 8px;
    }
  }
  .number-input {
    padding: 100px 40px 0px 40px;
    top: 0;
    left: 0;
    right: 0;
  }
  .code {
    position: absolute;
    left: 0;
    right: 0;
    padding: 10px;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #090A0A;
  }
  .code-info {
    position: absolute;
    left: 0;
    right: 0;
    padding: 40px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #090A0A;
    .code-input {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 4%;
      padding: 20px;
      .c1 {
        background: #FFFFFF;
        border: 1px solid #E3E5E6;
        border-radius: 64px;
        padding: 20px; 
        width: 52px;
        height: 52px;
      }
    }
  }
  .forgot {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 40px;
    .verify-button {
      color: #ffffff;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      background-image: linear-gradient(95.78deg, #EE0912 -11.11%, #FC5916 88.69%);
    }
    @include centering;
  }
</style>
