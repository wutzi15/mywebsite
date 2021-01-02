<template>
  <!-- <section class="hero is-dark is-fullheight"> -->
  <div class="home">
    <div class="">
      <!-- <img src="../assets/images/bg.jpg" alt="Background" /> -->
      <!-- <img src="../assets/images/bg.jpg" alt="Background" /> -->
      <div class="text-center">
        <h1>Welcome!</h1>
        <h2>Technology & Art!</h2>
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
</style>
