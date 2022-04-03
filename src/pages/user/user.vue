<template>
  <div>
    <div class="app-flex-center">
    <h1>This is the User page of your project.</h1>
    </div>
    <div class="app-flex-center">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
