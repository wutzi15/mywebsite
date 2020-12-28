<template>
  <div class="app">
    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li v-for="restaurant in restaurants" :key="restaurant.id">
          {{ restaurant.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  data(){
    return {
     restaurants: [],
     error: null, 
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:1337/restaurants')
      this.restaurants = response.data;
    } catch(error){
      this.error = error;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
