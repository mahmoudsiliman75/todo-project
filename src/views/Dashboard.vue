<template>
  <div class="home">
    <h1 class="title grey--text"> Home Page </h1>

    <v-container class="my-4">
      <v-card :class="`project pa-3 my-3 ${project.status}`" v-for="project in projects" :key="project.title">
        <v-row>
          <v-col cols="12" md="6">
            <div class="caption grey--text"> Project Title </div>
            <div> {{project.title}} </div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text"> Person </div>
            <div> {{project.person}} </div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text"> Due By </div>
            <div> {{project.due}} </div>
          </v-col>

          <v-col cols="4" sm="4" md="2" class="d-flex align-center justify-start justify-md-end">
            <v-chip outlined :class="`chip ${project.status}`"> {{project.status}} </v-chip>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
    projects: [
        { title: 'Create Vuetify App', person: 'Mahmoud Siliman', due: '5th May 2021', status: 'Ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eos quasi, nam asperiores possimus ad placeat vel id facilis nemo maxime, odit vero enim suscipit aut ea ipsam aspernatur explicabo.' },
        { title: 'Create Laravel Website', person: 'Mohamed Eid', due: '15th May 2021', status: 'Ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eos quasi, nam asperiores possimus ad placeat vel id facilis nemo maxime, odit vero enim suscipit aut ea ipsam aspernatur explicabo.' },
        { title: 'Create php Website', person: 'Mohamed Eid', due: '21th Jan 2021', status: 'Complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eos quasi, nam asperiores possimus ad placeat vel id facilis nemo maxime, odit vero enim suscipit aut ea ipsam aspernatur explicabo.' },
        { title: 'Create Vue Website', person: 'Mahmoud Siliman', due: '3rd Mars 2021', status: 'Overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eos quasi, nam asperiores possimus ad placeat vel id facilis nemo maxime, odit vero enim suscipit aut ea ipsam aspernatur explicabo.' },
      ],
    };
  },
};
</script>

<style scoped>

/* SATRT:: PROJECT CARD STYLE */
.project.Complete {
  border-left: 4px solid #3cd17f;
  transition: all 0.3s ease-in-out;
}

.project.Ongoing {
  border-left: 4px solid orange;
  transition: all 0.3s ease-in-out;
}

.project.Overdue {
  border-left: 4px solid tomato;
  transition: all 0.3s ease-in-out;
}

.project:hover {
  transform: scale(1.03);
}
/* END:: PROJECT CARD STYLE */

/* START:: CHIPS STYLE */
.chip.Complete {
  color: #3cd17f;
  border-color: #3cd17f;
}

.chip.Ongoing {
  color: orange;
  border-color: orange;
}

.chip.Overdue {
  color: tomato;
  border-color: tomato;
}
/* END:: CHIPS STYLE */
</style>
