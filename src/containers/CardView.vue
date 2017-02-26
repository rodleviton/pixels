<template>
  <div class="card-view">
    <div class="card-example">
      <Card class="view"></Card>
    </div>
    <CardDetails :card="card"></CardDetails>
  </div>
</template>

<script>
import axios from 'axios';
import loadjs from 'loadjs';
import Card from './../components/card';
import CardDetails from './../components/card-details';

export default {
  name: 'card-view',
  props: ['id'],
  data() {
    return {
      card: {},
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      axios.get(`https://reactivepixels.firebaseio.com/cards/${this.id}.json`)
        .then((response) => {
          this.card = response.data;
          this.loadComponent();
        });
    },
    loadComponent() {
      loadjs(this.card.componentSrc, {
        success: () => {
          const el = document.getElementById('card-content');
          el.classList.add('in');
        },
        error: () => {
          // console.log(err);
        },
      });
    },
  },
  components: {
    Card,
    CardDetails,
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
