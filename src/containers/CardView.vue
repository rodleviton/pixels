<template>
  <div class="card-view">
    <div class="card-example">
      <Card class="view">
        <component v-bind:is="id"></component>
      </Card>
    </div>
    <CardDetails></CardDetails>
  </div>
</template>

<script>
import Card from './../components/Card';
import CardDetails from './../components/CardDetails';

export default {
  name: 'card-view',
  props: ['id'],
  components: {
    Card,
    CardDetails,
    /* eslint-disable */
    griddy: (resolve) => {
      require(['./../cards/griddy'], resolve);
    },
    submarine: (resolve) => {
      require(['./../cards/submarine'], resolve);
    },
    swanky: (resolve) => {
      require(['./../cards/swanky'], resolve);
    },
  },
};
</script>

<style scoped>
.card-view {
  position: relative;
  height: 100%;
}

.card-example {
  padding-top: 10rem; /* navbar */
  background: #00A4F3;
  width: 100%;
  position: relative;
}

.card-example > div {
  left: 50%;
  margin-left: 0;
  transform: translateX(-50%);
}

@media screen and (min-width: 928px) {
  .card-example {
    padding-top: 0;
    background: #00A4F3;
    width: 55%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
  }
}

@media screen and (min-width: 928px) {
  .card-example > div {
    top: 50%;
    left: 50%;
    margin-left: 3rem; /* navbar offset */
    transform: translate(-50%, -50%);
  }
}
</style>
