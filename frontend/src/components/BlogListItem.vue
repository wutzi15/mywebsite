<template>
<div class="">
  <h2>{{ title }}</h2>
  <h5 class="blogDate">{{ myDate }}</h5>
  <img :src="`https://api.benedikt-bergenthal.de${imageURL}`" :alt="imageAlt">
</div>
</template>

<script>
export default {
  name: "BlogListItem",
  props: {
    title: {
      type: String,
      default: ""
    },
    datecreated: {
      type: String,
      default: ""
    },
    imageURL: {
      type: String,
      default: ""
    },
    imageAlt: {
      type: String,
      default: ""
    },
  },
  computed: {
    myDate: function() {
      const d = new Date(this.datecreated);
      return d.toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        });
    }

  }


}
</script>

<style>
.blogDate {
  text-align: right;
}
</style>
