<template>
  <div class="card-details">
    <div class="card-details-inner">
      <h2>{{ title }}</h2>

      <div v-html="description"></div>

      <h3>Highights</h3>
      <ul>
        <li v-for="highlight in highlights"><span>{{ highlight }}</span></li>
      </ul>

      <ColourBar :colours="colours"></ColourBar>

      <footer class="details-footer">
        <a v-bind:href="source" target="_blank" class="link-btn"><i class="icon-github"></i> View source</a>
      </footer>
    </div>
  </div>
</template>

<script>
import ColourBar from './../colour-bar';

export default {
  components: {
    ColourBar,
  },
  data() {
    return {
      title: 'Griddy',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas sollicitudin urna, non semper nulla. Maecenas iaculis nisl ac ex posuere, et finibus velit interdum. Praesent tortor felis, elementum at semper et, tincidunt placerat arcu. Proin vel posuere risus. Integer quis quam finibus, aliquet libero sit amet, iaculis eros. Maecenas porttitor mollis semper.</p>',
      colours: [
        '#7FC6FF',
        '#488CFF',
        '#3A57C3',
        '#373F96',
        '#272D6B',
      ],
      highlights: [
        'HTML5 Canvas',
        'CSS3 Transitions',
      ],
      source: 'https://github.com/swanky-docs/swanky',
    };
  },
};

</script>

<style scoped>
.card-details {
  background: #fff;
  text-align: left;
  width: 100%;
  position: relative;
  overflow: auto;
}

.card-details-inner {
  padding: 4rem;
  position: relative;
}

@media screen and (min-width: 928px) {
  .card-details {
    background: #fff;
    text-align: left;
    width: 45%;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
  }
}

@media screen and (min-width: 928px) {
  .card-details-inner {
    padding: 4rem 4rem 4rem 6rem;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}

@media screen and ( max-height: 600px ){
  .card-details-inner {
    top: 0;
    transform: translateY(0);
  }
}

.card-details h2 {
  border-bottom: 1px solid #FFBD00;
  padding-bottom: 0.4rem;
  width: 2rem;
}

.card-details li {
  list-style-type: square;
  color: #FFBD00;
}

.card-details li > span {
  color: #000;
}

.details-footer {
  padding: 2rem 2rem 4rem 0;
  width: 100%;
}

.details-footer .link-btn {
  display: block;
  height: 33px;
  line-height: 33px;
}

.icon-github {
  display: inline-block;
  float: left;
  margin-right: 10px;
  width: 33px;
  height: 32px;
  background: url('./img/github.svg');
}
</style>
