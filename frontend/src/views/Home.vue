<template>
  <!-- <section class="hero is-dark is-fullheight"> -->
  <div class="home">
    <div class="">
      <img src="../assets/images/bg.jpg" alt="Background" />
      <!-- <img src="../assets/images/bg.jpg" alt="Background" /> -->
      <div class="text-center">
        <h1>Hello World</h1>
      </div>
    </div>
  </div>
  <!-- </section> -->
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  text-align: center;
  color: white;
  height: 100%;
  img {
    width: 100%;
  }
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
    font-size: 10rem;
    font-weight: 200;
    font-family: "Montserrat", sans-serif;
    &:hover {
      transform: scale(1.25);
    }
    transition: transform 2000ms ease-in-out;
    -webkit-transition: -webkit-transform 2000ms ease-in-out;
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
