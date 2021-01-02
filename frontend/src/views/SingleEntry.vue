<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-half">
    <h1>{{ entry.title }}</h1>
    <div v-html="myhtml"></div>

    </div>
    <div class="column"></div>
  </div>
</template>

<script>
import showdown from 'showdown';
import axios from "axios";

export default {
  name: "SingleEntry",
  data: function() {
    return {
      myhtml : "",
      entry: {}
    }
  },
  mounted() {
    this.convertText();
  },
  methods: {
    convertText: async function() {
      const id = this.$route.params.id;
      console.log(`ID: ${id}`)
      try {
        const results = await axios.get(
          `https://api.benedikt-bergenthal.de/blog-entries/${id}`
        );
        console.log(`Entrie ${results.data}`);
        this.entry = results.data;
        const converter = new showdown.Converter();
        const tmp = converter.makeHtml(this.entry.content);
        this.myhtml = tmp.replace('<img src="/uploads', '<img src="https://api.benedikt-bergenthal.de/uploads');
      } catch (error) {
        console.error(error);
      }
      // console.log(`Content: ${this.entry.content}`)
    }
  }

}
</script>

<style lang="scss" >
code {
  font-family: 'Fira Code', monospace;
  color: #333;
}

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

</style>
