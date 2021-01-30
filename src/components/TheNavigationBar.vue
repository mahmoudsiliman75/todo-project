<template>
  <nav>
    <v-app-bar app flat>
      <v-app-bar-nav-icon class="text--grey" @click="toggle"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light"> todo </span>
        <span class="font-weight-bold"> project </span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text color="grey"> 
        <span>Sign Out</span>
        <v-icon right> mdi-exit-to-app </v-icon> 
      </v-btn>
    </v-app-bar>

    <menu-drawer></menu-drawer>

  </nav>
</template>

<script>
import MenuDrawer from './MenuDrawer.vue';

export default {
  components: {MenuDrawer},
  data: () => {
    return {
      // 
    }
  },
  methods: {
    toggle() {
      this.$store.commit('toggleDrawer');
    }
  },
}
</script>