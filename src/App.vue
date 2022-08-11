<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{ ticker }}</div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState([
      'ticker'
    ]),
    ...mapGetters([
      'getTickerIn'
    ])
  },

  methods:{
    ...mapActions([
      'getTicker'
    ])
  },

  mounted(){
    this.getTicker()
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
