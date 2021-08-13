<template>
  <it-button @click="drawerVisible = true" type="primary">
    Right drawer
  </it-button>
  <it-drawer v-model="drawerVisible">
    <Login/>
  </it-drawer>
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
      drawerVisible : false
    }
  }
}
</script>

<style>
</style>
