<template>
    <v-app>
      <navbar />
      <router-view></router-view>
  </v-app>
</template>

<script>
import navbar from './components/navbar.vue';

export default {
  components: { navbar },
  name: "App",

  data: () => ({
  })
};
</script>

<style>
html, body, #app {
  overflow: hidden !important;
  width: 100%;
  height: 100%;
  background-color: hsl(207, 26%, 17%);
}

.container {
  height: 100%;
}

</style>
