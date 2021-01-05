<template>
  <div class="menu">
    <ul>
      <li>
        <router-link v-on:click.native="toggleMenu" :to="{ path: '/' }">Home</router-link>
      </li>
      <li>
        <router-link v-on:click.native="toggleMenu" :to="{ path: '/fotos' }">Fotos</router-link>
      </li>
      <li>
        <router-link v-on:click.native="toggleMenu" :to="{ path: '/blog' }">Blog</router-link>
      </li>
      <li>
        <router-link v-on:click.native="toggleMenu" :to="{ path: '/impressum' }">Impressum</router-link>
      </li>
      <li>
        <router-link v-on:click.native="toggleMenu" :to="{ path: '/datenschutz' }">Datenschutz</router-link>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "Navbar",
  methods: {
     toggleMenu: function(){
      const menuToggle = document.querySelector('.toggle');
      const showcase = document.querySelector('.showcase');

      menuToggle.classList.toggle('active');
      showcase.classList.toggle('active');
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
