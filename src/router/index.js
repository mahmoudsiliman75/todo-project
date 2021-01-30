import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
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
