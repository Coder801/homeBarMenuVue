<template>
  <nav class="navigation">
    <a href="#" @click="showComponent('alcohol')">Alcohol</a>
    <a href="#" @click="showComponent('cocktails')">Cocktails</a>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    showComponent: function (name) {
      this.$parent.component = name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
  width: 100%;
  height: 50px;
  background-color: #ccc;
  text-align: center;
  margin: 0;
  padding: 0;
}
</style>
