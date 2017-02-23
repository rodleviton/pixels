<template>
  <div class="card-container">
    <div class="card">
      <slot></slot>
    </div>
    <div class="diffuse-shadow"></div>
    <div class="card-name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  props: ['name'],
};
</script>

<style scoped>
.card-container {
  display: inline-block;
  position: relative;
  width: 320px;
  height: 540px;
  margin: 2rem;
  transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.card {
  position: absolute;
  z-index: 10;
  top: 0;
  transition: all 0.15s cubic-bezier(0.165, 0.84, 0.44, 1);
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  height: 460px;
  width: 320px;
}

.card > a {
  position: absolute;
  z-index: 15;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card-name {
  position: absolute;
  z-index: 5;
  font-weight: 500;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem;
  text-align: center;
  width: 320px;
  top: 500px;
}

.diffuse-shadow {
  position: absolute;
  z-index: 5;
  width: 200px;
  height: 200px;
  top: 250px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 2px 133px 0 rgba(0,0,0,0.25), 0 2px 60px 0 rgba(0,0,0,0.50);
}

.card-container.animate:hover .diffuse-shadow, .card-container.view .diffuse-shadow {
  top: 235px;
  box-shadow: 0 7px 200px 0 rgba(0,0,0,0.5), 0 30px 100px 0 rgba(0,0,0,0.35);
}

.card-container.animate:hover .card {
  top: -15px;
}
</style>
