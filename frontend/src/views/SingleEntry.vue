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
      console.log(`Content: ${this.entry.content}`)
      const converter = new showdown.Converter();
      this.myhtml = converter.makeHtml(this.entry.content);

    }
  }

}
</script>

<style>

</style>
