<template>
  <nav class="navigation">
    <router-link to="alcohol">Alcohol</router-link>
    <router-link to="cocktails">Cocktails</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

.navigation 
  width: 100%
  height: 70px
  background-color: #9BC1BC
  margin: 0
  padding: 0
  display: flex
  align-items: center
  justify-content: space-around
  box-shadow: rgba(31,53,78,0.11) 0 1px
  
  & > a 
    color: #36C9C6
    line-height: 70px
    text-decoration: none
    color: #3c4859
    font-size: 2rem 
    text-align: center
    transition: all .3s ease

    &.router-link-active 
      color: #AD4E42


</style>
