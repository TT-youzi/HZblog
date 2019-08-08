<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
require("./assets/css/reset.css");

export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: -webkit-fill-available;
  background: -webkit-linear-gradient(left, #2c3e50, #fd746c);
  background: -o-linear-gradient(left, #2c3e50, #fd746c);
  background: -moz-linear-gradient(left, #2c3e50, #fd746c);
  background: linear-gradient(to right, #2c3e50, #fd746c);
}
</style>
