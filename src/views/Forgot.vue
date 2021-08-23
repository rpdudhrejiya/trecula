<template>
	<it-drawer v-model="forgot" :closable-mask='false'>
		<NavHeader/>
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
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
import {phone} from 'phone';
export default {
	name:'Forgot',
	data() {
		return {
			pNumber : null,
      country : null,
      digit1 : null,
      digit2 : null,
      digit3 : null,
      digit4 : null,      
      sent : false,
			forgot: true,
		}
	},
	components: {
    NavHeader,
  },
	methods:{
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

<style>

</style>