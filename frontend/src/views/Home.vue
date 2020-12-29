<template>
  <div class="home">
    <h1>Hello World</h1>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',

};
</script>

<style lang="scss" scoped>
.home {
  background-image: url("../assets/images/bg.jpg")   ;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

  h1  {
    font-size: 10em;
    font-weight: 200;
    font-family: 'Montserrat', sans-serif;
    color: white;
    height: 100vh;
    padding: 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

  }
}
</style>
