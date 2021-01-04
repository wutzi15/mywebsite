<template>
  <!-- <section class="hero is-dark is-fullheight"> -->
  <div class="home">
    <div class="">
      <!-- <img src="../assets/images/bg.jpg" alt="Background" /> -->
      <!-- <img src="../assets/images/bg.jpg" alt="Background" /> -->
      <div class="text-center">
        <h1>Welcome</h1>
        <h2>Technology & Art</h2>
        <h4>Work in Progress</h4>
      </div>
    </div>
  </div>
  <!-- </section> -->
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');
@import "../assets/scss/main.scss";
// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

.home {
  position: relative;
  text-align: center;
  color: white;
  height: 100vh;
  background-image: url("../assets/images/bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
}

.text-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  h1 {
    font-size: 10vh;
    font-weight: 200;
    font-family: "Montserrat", sans-serif;
    &:hover {
      transform: scale(1.25);
    }
    transition: transform 2000ms ease-in-out;
    -webkit-transition: -webkit-transform 2000ms ease-in-out;
  }
  h2{
    font-size: 3rem;
    font-weight: 200;
    font-family: "Montserrat", sans-serif;
  }
}

h1 {
  font-size: 10em;
  font-weight: 200;
  font-family: "Montserrat", sans-serif;
  &:hover {
    transform: scale(1.25);
  }
  transition: transform 2000ms ease-in-out;
  -webkit-transition: -webkit-transform 2000ms ease-in-out;
}

body, html {
  margin:0;
  padding:0;
  color: $primary;
  background: $dark;
}
</style>
