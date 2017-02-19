import Vue from 'vue';
import Router from 'vue-router';
import FeedView from './../containers/FeedView';
import CardView from './../containers/CardView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: FeedView,
    },
    {
      path: '/card/:id',
      component: CardView,
      props: true,
    },
  ],
});
