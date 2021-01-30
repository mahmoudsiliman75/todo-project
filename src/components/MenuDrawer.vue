<template>
  <v-navigation-drawer v-model="this.$store.state.drawerIsVisible" app class="yellow darken-1">

    <v-list flat>
      <v-list-item-group>

        <!-- START:: LIST ITEM LINKS -->
        <v-list-item class="white--text" v-for="link in links" :key="link.text" router :to="link.route">
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
        {icon: 'mdi-home', text: 'DashBoard', route: '/dashboard' },
        {icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        {icon: 'mdi-heart', text: 'Team', route: '/team' },
        {icon: 'mdi-help', text: 'About Us', route: '/about' },
      ],
    }
  },
}
</script>