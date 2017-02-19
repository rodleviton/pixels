<template>
  <div class="navbar">
    <slot></slot>
  </div>
</template>

<script>

</script>

<style scoped>
.navbar {
  position: fixed;
  height: 6rem;
  width: 100%;
  left: 0;
  top: 0;
  background: #fff;
  z-index: 5;
}

@media screen and (min-width: 928px) {
  .navbar {
    width: 6rem;
    height: 100%;
  }
}
</style>
