<template>
  <div class="blog-container">
  <h1>Blog</h1>
    <div v-for="entry in entries" :key="entry.id" class="columns">
      <div class="gap"></div>
      <div class="column">
        <router-link :to="`/SingleEntry/${entry.slug}`">
          <BlogListItem
            :title="entry.title"
            :datecreated="entry.createdAt"
            :imageURL="entry.media.url"
            :imageAlt="entry.media.alternativeText"
          >
          </BlogListItem>
        </router-link>
        <hr />
      </div>
      <div class="gap"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BlogListItem from "../components/BlogListItem";

export default {
  name: "Blog",
  components: {
    BlogListItem,
  },
  data() {
    return {
      entries: [],
    };
  },
  created() {
    this.getEntries();
  },
  methods: {
    getEntries: async function () {
      try {
        const results = await axios.get(
          "https://api.benedikt-bergenthal.de/blog-entries?_sort=createdAt:desc"
        );
        const myData = results.data;
        let outData = [];

        for (let i = 0; i < myData.length; i++) {
          let d = myData[i];
          if (d.media[0] === undefined) {
            d.media = { url: "", alt: "" };
          } else {
            d.media = d.media[0];
          }
          outData.push(d);
        }

        this.entries = outData;

        console.log(JSON.stringify(this.entries));
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.columns {
  display: grid;
 grid-template-columns: repeat(12, 1fr);
}

.column {
  grid-column: span 8;
}

.gap {
  grid-column: span 2;
}

h1 {
  font-size: 3rem;
  color: #fff;
}

h2 {
  font-size: 2rem;
  color: #fff;
}

a {
  &:hover {
    color: white;
  }
  text-decoration: none;
}

hr {
  margin-top: 10px;
  margin-bottom: 30px;
}

@media (max-width: 991px) {
  .blog-container {
    margin-top: 120px;
  }

  .columns {
    display:flex;
    padding: 0px 10px 10px 10px;
    width: 100%;
  }
  .column {
    width: 100%;
    // max-width: 80vw;
  }

  .gap {
    display: none;
    column-span: span 0;
  }

  .showcase {
    padding: 0;
  }

  .showcase header
  {
    padding: 40px;
  }
}
</style>
