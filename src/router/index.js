import { createWebHistory, createRouter } from "vue-router";
import AppHome from "@/components/AppHome.vue";
import AppLogin from "@/components/AppLogin.vue";
import AppRegister from "@/components/AppRegister.vue";
import AppExplore from "@/components/AppExplore.vue";


const routes = [
    {
      path: '/',
      name: 'Home',
      component: AppHome
    },
    {
      path: '/login',
      name: 'Login',
      component: AppLogin
    },
    {
      path: '/register',
      name: 'Register',
      component: AppRegister
    },
    {
      path: '/explore',
      name: 'Explore',
      component: AppExplore
    }
  ];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
        linkActiveClass: "active"
    }
);
export default router;