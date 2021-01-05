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

<style lang="scss">

.menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    position: relative;
    li{
      list-style: none;
      a {
        text-decoration: none;
        font-size: 24px;;
        color: #111;
        &:hover {
          color: #03a9f4;
        }
      }
    }
  }
}
</style>
