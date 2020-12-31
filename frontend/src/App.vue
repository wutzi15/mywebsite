<template>
  <div class="">

    <Navbar></Navbar>

    <router-view></router-view>

    <Footer></Footer>

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/views/Navbar.vue";
import Footer from "@/views/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  computed: {
    isStart() {
      console.log(this.$route.name);
      return this.$route.name == "Home";
    }
  }
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import "./assets/scss/main.scss";
// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}

body{
  padding-top: 0px!important;
}

body, html {
  margin:0;
  padding:0;
  color: $primary;
  background: $dark;
}
</style>
