<template>
  <v-navigation-drawer v-model="this.$store.state.drawerIsVisible" app class="grey lighten-4">
    <!-- <v-list>
      <v-list-tile>
        <v-list-action>
          <v-icon> mdi-dashboard </v-icon>
        </v-list-action>
        <v-list-tile-content>
          <v-list-tile-title>
            <router-link to="/home" class="text-decoration-none black--text"> Dashboard </router-link>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list> -->

    <v-list flat>
      <v-list-item-group>

        <!-- START:: LIST ITEM LINKS -->
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon>
            <v-icon> {{ link.icon }} </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> 
              {{link.text}} 
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- START:: LIST ITEM LINKS -->

      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {icon: 'mdi-home', text: 'DashBoard', route: '/home' },
        {icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        {icon: 'mdi-help', text: 'About Us', route: '/about' },
      ],
    }
  },
}
</script>