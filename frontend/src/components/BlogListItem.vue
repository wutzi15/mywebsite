<template>
<div class="">
  <h2>{{ title }}</h2>
  <h3>{{ myDate }}</h3>
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
    }
  },
  computed: {
    myDate: function() {
      const d = new Date(this.datecreated);
      return d.toLocaleString(navigator.language);
    }

  }


}
</script>

<style>

</style>
