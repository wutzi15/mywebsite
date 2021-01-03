<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-third">
      <h1>Blog</h1>
      <div v-for="entry in entries" :key="entry.id">
        <router-link :to="`/SingleEntry/${entry.slug}`" >
          <BlogListItem :title="entry.title" :datecreated="entry.createdAt"></BlogListItem>
          </router-link>
          <hr>
      </div>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
import axios from "axios";
import BlogListItem from "../components/BlogListItem";

export default {
  name: "Blog",
  components: {
    BlogListItem
  },
  data() {
    return {
      entries: [],
    };
  },
  created() {
    this.getEntries()
  },
  methods: {
    getEntries: async function () {
      try {
        const results = await axios.get(
          "https://api.benedikt-bergenthal.de/blog-entries"
        );
        console.log(`Entrie ${results.data}`);
        const myData = results.data.sort((a,b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          if (dateA < dateB) {
            return 1;
          }
          if (dateA > dateB) {
            return -1;
          }
          return 0;
        })
        this.entries = myData;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" >

// @import "~bulma/sass/utilities/_all";
// @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
// @import "../assets/scss/main.scss";
// // Import Bulma and Buefy styles
// @import "~bulma";
// @import "~buefy/src/scss/buefy";
body {
  padding: 20px;
}
html {
  padding-top: 50px;
  padding-bottom: 20px;
}
h1 {
  font-size: 3rem;
}

h2{
  font-size: 2rem;
}

a{
  &:hover {
    color: white;
  }
}


</style>
