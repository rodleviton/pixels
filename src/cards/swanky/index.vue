<template>
  <div class="swanky">
    <slot></slot>
  </div>
</template>

<script>

</script>

<style scoped>
.swanky {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url('./cover.jpg') no-repeat;
  background-size: cover;
}
</style>
