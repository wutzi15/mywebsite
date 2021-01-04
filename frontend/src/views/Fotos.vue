<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-half">
      <h1>Fotos</h1>
      <div class="grid">
        <div v-for="foto in myfotos" :key="foto.id">
          <router-link :to="`/SingleImage/${foto.id}`">
            <div class="grid-item">
              <img :src="foto.url" :alt="foto.alt">
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from "axios";
import Masonry from "masonry-layout";

export default {
  name: "Fotos",
  data: function() {
    return {
      myfotos: [],
    }
  },
  mounted(){
    this.getFotos();
  },
  methods: {
    getFotos: async function() {
      try {
        const result = await axios.get("https://api.benedikt-bergenthal.de/images");
        result.data.forEach((i) => {
          this.myfotos.push({
            id: i._id,
            url: "https://api.benedikt-bergenthal.de" + i.image.formats.medium.url,
            title: i.name,
            alt: i.description,
          })
        })
        const elem = document.querySelector(".grid");
        console.log(elem)
        const msnry = new Masonry( elem, {
          // options
          itemSelector: '.grid-item',
          columnWidth: 200
        });
        console.log(msnry)
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');
@import "../assets/scss/main.scss";
// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

h1 {
  font-size: 3rem;
}

body {
  padding: 20px;
}
html {
  padding-top: 50px;
  padding-bottom: 20px;
}

.grid-item {
  float: left;
  width: 200px;
  img {
    border-radius: 10px;
    border: 2px solid hsla(0, 0%, 0%, 0.5);
    &:hover{
      transform: scale(2);
    }
    transition: transform 500ms ease-in-out;
    -webkit-transition: -webkit-transform 500ms ease-in-out;
  }
  padding: 10px;
}

.grid-item--width2 { width: 400px; }

body, html {
  margin:0;
  padding:0;
  color: $primary;
  background: #233748;
}
</style>
