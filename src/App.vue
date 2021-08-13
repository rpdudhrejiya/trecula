<template>
  <it-drawer v-model="drawerVisible">
    <Login/>
  </it-drawer>
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59528.56014312462!2d72.88647608461409!3d21.170895506680917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1628855800613!5m2!1sen!2sin" width="1920" height="1099" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</template>

<script>
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Login   
  },
  data() {
    return {
      drawerVisible : true
    }
  }
}
</script>

<style>
</style>
