<template>
  <div>
    <h2>{{msg}}</h2>
    <hello></hello>
    <button @click="sendPostRequest">Send a POST request</button>
    <button @click="sendGetRequest">Send a GET request</button>
  </div>
</template>

<script>
// import a component
import HelloWorldPart from '@/components/HelloWorld.vue'

export default {
  name: 'UserHome',
  components:{
  	hello: HelloWorldPart
  },
  data () {
    return {
      msg: 'Welcome to UserHome'
    }
  },
  methods: {
    async sendPostRequest(){
      let ret = await this.$request.post('/user/login/',{
        'username': 'Aiden',
        'password': '123'
      })
      console.log(ret.data)
    },
    async sendGetRequest(){
      let ret = await this.$request.get('/user/getinfo/',{
        'username': 'Aiden'
      })
      console.log(ret.data)
    },
  }
}
</script>

<style>

</style>
