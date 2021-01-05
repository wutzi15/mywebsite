<template>
  <div class="fotos-container">
    <h1>Fotos</h1>
    <div class="columns">
      <div v-for="foto in myfotos" :key="foto.id">
        <router-link :to="`/SingleImage/${foto.id}`">
          <div class="grid-item">
            <img :src="foto.url" :alt="foto.alt" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import Masonry from "masonry-layout";

export default {
  name: "Fotos",
  data: function () {
    return {
      myfotos: [],
    };
  },
  mounted() {
    this.getFotos();
  },
  methods: {
    getFotos: async function () {
      try {
        const result = await axios.get(
          "https://api.benedikt-bergenthal.de/images"
        );
        result.data.forEach((i) => {
          this.myfotos.push({
            id: i._id,
            url:
              "https://api.benedikt-bergenthal.de" + i.image.formats.medium.url,
            title: i.name,
            alt: i.description,
          });
        });
        const elem = document.querySelector(".grid");
        // console.log(elem);
        const msnry = new Masonry(elem, {
          // options
          itemSelector: ".grid-item",
          columnWidth: 200,
        });
        // console.log(msnry);
      } catch (error) {
        // console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" >
.columns {
  display: grid;
  grid-template-columns: repeat(4, 3fr);
  width: 100%;
  //  padding-right: 30px;
}

.grid-item {
  // float: left;
  // width: 200px;
  img {
    border-radius: 10px;
    // border: 2px solid hsla(0, 0%, 0%, 0.5);
    &:hover {
      transform: scale(1.5);
    }
    width: 90%;
    transition: transform 500ms ease-in-out;
    -webkit-transition: -webkit-transform 500ms ease-in-out;
  }
  // margin: 10px;
}

h1 {
  color: #fff;
  font-size: 3em;
}

@media (max-width: 991px) {
  .fotos-container {
    margin-top: 120px;
  }
  h1 {
    color: #fff;
    font-size: 3em;
  }

  .columns {
    display: flex;
    flex-direction: column;
    .grid-item {
      margin-bottom: 20px;
    }
  }
}
</style>
