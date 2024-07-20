// exercises routes
import Cookies from "js-cookie";
import { createRouter, createWebHistory } from "vue-router";
import MuscleSelector from "@/components/BodyModel/MuscleSelector.vue";

// check if user is logged-in / registered or not
const ifAuthenticated = (to, from, next) => {
  if (Cookies.get("token")) {
    next();
  } else {
    next("/authentication");
  }
};

//routes
const routes = [
 

      {
        path: "/anatomy",
        beforeEnter: ifAuthenticated,
        component: MuscleSelector,
        name: "muscleModel",
      },
];

export const exerciseRoutes = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
