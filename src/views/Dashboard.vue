<template>
  <div class="home">
    <h1 class="title grey--text"> Home Page </h1>

    <v-container class="my-4">
      <v-card class="pa-3">
        <v-row>
          <v-col cols="12" md="6">
            <div class="caption grey--text"> Project Title </div>
            <div> Create Vuetify App </div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text"> Person </div>
            <div> Mahmoud Siliman </div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text"> Due By </div>
            <div> 5th May 2021 </div>
          </v-col>

          <v-col cols="2" sm="4" md="2">
            <div class="caption grey--text"> Status </div>
            <div> Ongoing </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
