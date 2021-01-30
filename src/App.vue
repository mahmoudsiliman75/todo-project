<template>
  <v-app>
    <v-main>
      <the-nav-bar></the-nav-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheNavBar from './components/TheNavigationBar.vue';

export default {
  name: "App",
  components: { TheNavBar },
  data: () => ({
    
  })
};
</script>
