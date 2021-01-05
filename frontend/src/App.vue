<template>
  <div class="">
    <section class="showcase">
      <header>
        <h2 class="logo">Benedikt Bergenthal</h2>
        <div class="toggle" @click="toggleMenu"></div>
      </header>
      <router-view></router-view>
    </section>
    <Navbar></Navbar>

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/views/Navbar.vue";


export default {
  name: "App",
  components: {
    Navbar,

  },
  computed: {
    isStart() {
      console.log(this.$route.name);
      return this.$route.name == "Home";
    },
  },
  methods: {
    toggleMenu: function(){
      const menuToggle = document.querySelector('.toggle');
      const showcase = document.querySelector('.showcase');

      menuToggle.classList.toggle('active');
      showcase.classList.toggle('active');
    }
  }
};
</script>

<style lang="scss">
// @import "~bulma/sass/utilities/_all";
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");
// @import "./assets/scss/main.scss";
// Import Bulma and Buefy styles
// @import "~bulma";
// @import "~buefy/src/scss/buefy";

* {
  margin: 0;
  padding: 0;
  font-family: "Lato", sans-serif;
  box-sizing:border-box;

}

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
  }
}

.toggle {
  position: relative;
  width: 60px;
  height: 60px;
  background: url(https://i.ibb.co/HrfVRcx/menu.png);
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: center;
  cursor: pointer;
}

.toggle.active {
  background: url(https://i.ibb.co/rt3HybH/close.png);
  background-repeat: no-repeat;
  background-size: 25px;
  background-position: center;
  cursor: pointer;
}

.showcase {
  position: absolute;
  right: 0;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111;
  transition: 0.5s;
  z-index: 2;

  img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
}

.showcase.active {
  right: 300px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #03a9f4;
  mix-blend-mode: overlay;
}

.text {
  position: relative;
  z-index: 10;
  h2 {
    font-size: 5em;
    font-weight: 800;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
  }

  h3 {
    font-size: 4em;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
  }

  p{
    font-size: 1.1em;
    color: #fff;
    margin: 20px 0;
    font-weight: 400;
    max-width: 700px;
  }

}

.menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    position: relative;
    li{
      list-style: none;
      a {
        text-decoration: none;
        font-size: 24px;;
        color: #111;
        &:hover {
          color: #03a9f4;
        }
      }
    }
  }
}

@media(max-width: 991px) {
  .showcase,
  .showcase header
  {
    padding: 40px;
  }
  .text h2
  {
    font-size: 3em;
  }
  .text h3
  {
    font-size: 2em;
  }
}

</style>
