<template>
  <div class="">
    <h1>{{ entry.title }}</h1>
    <div v-html="myhtml"></div>
  </div>
</template>

<script>
import showdown from 'showdown';

export default {
  name: "SingleEntry",
  props: {
    entry: {
      type: Object
    },

  },
  data: function() {
    return {
      myhtml : ""
    }
  },
  mounted() {
    this.convertText();
  },
  methods: {
    convertText: function() {
      // console.log(`Content: ${this.entry.content}`)
      const converter = new showdown.Converter();
      const tmp = converter.makeHtml(this.entry.content);
      this.myhtml = tmp.replace('<img src="/uploads', '<img src="https://api.benedikt-bergenthal.de/uploads');

    }
  }

}
</script>

<style>

</style>
