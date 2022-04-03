<template>
  <div>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
// import a component
import HelloWorldPart from '@/components/HelloWorld.vue'

export default {
  name: 'UserSociety',
  data () {
    return {
      msg: 'Welcome to UserSociety'
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
