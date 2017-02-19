<template>
  <div class="submarine">
    <slot></slot>
  </div>
</template>

<script>

</script>

<style scoped>
.submarine {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url('./cover.jpg') no-repeat;
  background-size: cover;
}
</style>
