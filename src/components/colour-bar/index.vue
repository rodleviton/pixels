<template>
  <div class="colour-bar-wrapper">
    <div class="icon-droplet"></div>
    <div class="colour-bar">
      <div class="segment" v-for="colour in colours" :style="{'background-color': colour}"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['colours'],
};

</script>

<style scoped>
.colour-bar-wrapper {
  display: inline-block;
  margin: 2rem 0;
}

.colour-bar {
  display: inline-block;
  vertical-align: top;
  width: 280px;
  height: 10px;
}

.segment {
  height: 100%;
  width: 20%;
  display: inline-block;
}

.icon-droplet {
  display: inline-block;
  width: 15px;
  height: 22px;
  margin-right: 2rem;
  background: url('./img/droplet.svg');
}
</style>
