<template>
  <div id="app" class="container">
    <Cabezera></Cabezera>
    <Lista></Lista>
  </div>
</template>

<script>
import Cabezera from './components/Cabezera.vue'
import Lista from './components/Lista.vue'

export default {
  name: 'App',
  components: {
    Cabezera,
    Lista
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
