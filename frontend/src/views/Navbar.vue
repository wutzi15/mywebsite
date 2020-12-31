<template>
  <b-navbar :transparent="true" :fixed-top="true" :mobile-burger="true">

        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/fotos' }">
                Fotos
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/blog' }">
                Blog
            </b-navbar-item>

        </template>


    </b-navbar>
  <!-- <div class="hero-head hero">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">

          <span class="navbar-burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div class="navbar-menu" id="navbarMenuHeroC">
          <div class="navbar-start">
            <a href="/" class="navbar-item">Start</a>
            <a href="/fotos" class="navbar-item">Fotos</a>
            <a href="/blog" class="navbar-item">Blog</a>
          </div>
        </div>
      </div>
    </header>
  </div> -->
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
nav.navbar.is-fixed-top {
  background: transparent;

}

a {
  color: white;
}

@media(max-width: 1024px){
  a {
    color: #222;
  }

.navbar-burger {
  color: #fff !important;
}
}


.navbar-burger {
  color: #fff !important;
}
</style>
