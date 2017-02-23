<template>
  <div class="griddy">
    <canvas ref="griddy" width="320" height="460"></canvas>
  </div>
</template>

<script>
import Pixels from './js/pixels';

export default {
  mounted() {
    const pixels = new Pixels(this.$refs.griddy);

    pixels.animate();
  },
};

</script>

<style scoped>
.griddy {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
}
</style>
