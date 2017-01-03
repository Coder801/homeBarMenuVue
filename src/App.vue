<template>
  <div id="app">
    <Navigation></Navigation>
    <component :is="component"></component>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Alcohol from './components/Alcohol'
import Cocktails from './components/Cocktails'

export default {
  name: 'app',
  data () {
    return {
      component: 'alcohol'
    }
  },
  components: {
    Navigation,
    Alcohol,
    Cocktails
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
