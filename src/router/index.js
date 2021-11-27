import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/:patchMatch(.*)*",
    redirect: { name: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
