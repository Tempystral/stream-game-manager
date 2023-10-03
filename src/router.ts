import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Home = () => import("/pages/Home.vue");
const NotFound = () => import("/pages/404.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: () => ({})
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
