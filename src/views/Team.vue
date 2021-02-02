<template>
  <div class="team">
    <h1 class="title grey--text"> Team Page </h1>

    <v-container class="my-4">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="member in team" :key="member.name">
          <v-card flat class="text-center ma-3" color="grey lighten-4">
            <v-img>
              image will go here
            </v-img>

            <v-card-text class="pb-1">
              <div class="subheading"> {{member.name}} </div>
              <div class="grey--text"> {{member.role}} </div>
            </v-card-text>

            <v-card-actions>
              <v-btn text color="grey">
                <v-icon> mdi-comment </v-icon>
                <span> Message </span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'Mahmoud Siliman', role: 'Front-End Developer' },
        { name: 'Mohamed Eid', role: 'Back-End Developer' },
        { name: 'Omar Ehab', role: 'Back-End Developer' },
        { name: 'Karim Hosam', role: 'UI / UX Designer' },
      ],
    }
  },
}
</script>