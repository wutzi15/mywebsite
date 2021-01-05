<template>
  <div class="">
    <img src="../assets/images/bg.jpg" alt="Background" />
    <div class="overlay"></div>
    <div class="text">
      <h2>Welcome</h2>
      <h3>Technology and Art</h3>
      <p>Work in progress</p>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.text {
  h2 {
    font-family: "Montserrat";
  }
  h3 {
    font-family: "Montserrat";
  }
}

.showcase {
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
}
.text {
  position: relative;
  z-index: 10;
  h2 {
    font-size: 5em;
    font-weight: 800;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
  }

  h3 {
    font-size: 4em;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
  }

  p {
    font-size: 1.1em;
    color: #fff;
    margin: 20px 0;
    font-weight: 400;
    max-width: 700px;
  }
}




@media (max-width: 991px) {
 h2 {
    font-size: 4em !important;
    font-weight: 800;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
  }

  h3 {
    font-size: 3em !important;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
  }

  .showcase {
    padding: 40px;
  }

  .showcase header
  {
    padding: 40px;
  }
}


</style>
