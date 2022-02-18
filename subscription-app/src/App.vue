<template>

<div class="container app">
  <div class="row justify-content-center">
    <div class="col md-4">
      <h2>
        <router-link to="/">Subscriptions</router-link>
      </h2>

      <router-link to="/create" class="bt btn-sm btn-primary">Add subscription</router-link>
    <br /><hr />
      <router-view />
    </div>

  </div>

</div>


</template>

<script>

export default {
  name: 'App',
  components: {
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

.app {
  width: 40% !important;
}
</style>
