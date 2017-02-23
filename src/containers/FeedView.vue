<template>
  <div class="feed-view">
    <h1 class="title">ReactivePixels</h1>
    <Card name="Griddy" class="animate">
      <router-link to="/card/griddy"></router-link>
      <Griddy></Griddy>
    </Card>
    <Card name="Yellow Submarine" class="animate">
      <router-link to="/card/submarine"></router-link>
      <Submarine></Submarine>
    </Card>
    <Card name="Swanky Docs" class="animate">
      <router-link to="/card/swanky"></router-link>
      <Swanky></Swanky>
    </Card>
  </div>
</template>

<script>
import Card from './../components/card';

export default {
  name: 'feed-view',
  data() {
    return {

    };
  },
  components: {
    Card,
    /* eslint-disable */
    Griddy: (resolve) => {
      require(['./../cards/griddy'], resolve);
    },
    Submarine: (resolve) => {
      require(['./../cards/submarine'], resolve);
    },
    Swanky: (resolve) => {
      require(['./../cards/swanky'], resolve);
    },
  },
};
</script>

<style scoped>
.feed-view {
  padding-top: 10rem;
  width: 360px;
  margin: 0 auto;
}

@media screen and (min-width: 928px) {
  .feed-view {
    padding-left: 6rem;
    width: 784px;
  }
}

@media screen and (min-width: 1240px) {
  .feed-view {
    width: 1148px;
  }
}

@media screen and (min-width: 1560px) {
  .feed-view {
    width: 1511px;
  }
}

.title {
  display: block;
  margin: 0 auto 6rem auto;
  text-indent: -99999em;
  overflow: hidden;
  width: 223px;
  height: 35px;
  background: url('./../assets/logo.svg') no-repeat;
}
</style>
