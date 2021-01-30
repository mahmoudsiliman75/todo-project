import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Projects from "../views/Projects.vue";
import Team from "../views/Team.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
