import { createRouter, createWebHistory } from "vue-router";
// import routes from "./routes";
import Home from "@/views/homepageV1.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [ 
    {
      path: "/",
      component: Home
    }
   ],
  
});

export default router;
