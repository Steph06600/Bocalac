import { createRouter, createWebHistory } from "vue-router";
import ActuView from "@/views/ActuView.vue";
import Logview from "@/views/LogView.vue";
import ProfileView from "@/views/ProfileView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Logview,
  },
  {
    path: "/actus",
    name: "news",
    component: ActuView,
  },
  {
    path: "/profile",
    name: "myProfile",
    component: ProfileView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
