<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-two-thirds">
      <h1>Blog</h1>
      <div v-for="entry in entries" :key="entry.id">
        <router-link :to="`/SingleEntry/${entry.slug}`" >
          <BlogListItem :title="entry.title"
                        :datecreated="entry.createdAt"
                        :imageURL="entry.media.url"
                        :imageAlt="entry.media.alternativeText">
          </BlogListItem>
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
          "https://api.benedikt-bergenthal.de/blog-entries?_sort=createdAt:desc"
        );
        const myData = results.data;
        let outData = [];

        for(let i = 0; i < myData.length; i++) {
          let d = myData[i];
          if (d.media[0] === undefined) {
            d.media = {url:"", alt:""};
          } else  {
            d.media = d.media[0]
          }
          outData.push(d);
        }

        this.entries = outData;

        console.log(JSON.stringify(this.entries))
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" >

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
