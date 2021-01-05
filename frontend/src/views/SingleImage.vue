<template>
<div class="columns">
  <div class="column"></div>
  <div class="column is-two-thirds">
    <h1><img src="../assets/images/arrow-left-solid.png" alt="go back" class="back-arrow" @click="goBack">{{title}}</h1>
    <a :href="url">
      <img :src="url" :alt="desc">
    </a>
    <p>{{desc}}</p>
  </div>
  <div class="column"></div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "SingleImage",
  data: function() {
    return {
      url: "",
      title: "",
      desc: ""
    }
  },
  mounted() {
    this.getImage();
  },
  methods: {
    getImage: async function(){
      const id = this.$route.params.id;
      try {
        const results = await axios.get("https://api.benedikt-bergenthal.de/images/" + id);
        // console.log(results.data)
        this.url = "https://api.benedikt-bergenthal.de" + results.data.image.url;
        this.title = results.data.name;
        this.desc = results.data.description;

      } catch (error) {
        // console.error(error)
      }
    },
    goBack: function() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
img {
  width: 100%;
}
h1 {
  font-size: 3rem;
  color: #fff;
  margin-bottom: 20px;
  span {
    cursor: pointer;
  }
}

.back-arrow {
  width: 0.8em;
  margin-right: 10px;
  cursor: pointer;
}


p {
  color: #fff;
}
</style>
