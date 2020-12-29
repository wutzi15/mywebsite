<template>
  <b-navbar :fixed-top="true"  :transparent="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../assets/images/Logo.png"
          alt="Benedikt Bergenthal"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }"> Home </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/fotos' }"> Fotos </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/blog' }"> Blog </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>

</style>
