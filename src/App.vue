<template>
  <div id="app">
    <NavBar>
      <Logo />
    </NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import Logo from './components/Logo';

export default {
  name: 'app',
  components: {
    NavBar,
    Logo,
  },
};
</script>

<style>
@import './css/index.css';

#app {
  height: 100%;
}
</style>
