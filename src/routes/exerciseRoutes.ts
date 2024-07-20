// exercises routes
import Cookies from "js-cookie";
import { createRouter, createWebHistory } from "vue-router";
import MuscleSelector from "@/components/BodyModel/MuscleSelector.vue";

//routes
const routes = [
 

      {
        path: "/anatomy",
        component: MuscleSelector,
        name: "muscleModel",
      },
];

export const exerciseRoutes = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
