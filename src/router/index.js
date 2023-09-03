import { createWebHistory, createRouter } from "vue-router";
import AppHome from "@/components/AppHome.vue";
import AppLogin from "@/components/AppLogin.vue";
import AppRegister from "@/components/AppRegister.vue";
import AppExplore from "@/components/AppExplore.vue";
import AppDashboard from "@/components/AppDashboard.vue";
import DashProfile from "@/components/DashProfile.vue";
import DashLocations from "@/components/DashLocations.vue";
import DashListings from "@/components/DashListings.vue";
import ProfileListings from "@/components/ProfileListings.vue";
import ProfileNewProperty from "@/components/ProfileNewProperty.vue";

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
    ,
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: AppDashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard/profile/:userEmail',
      name: 'Profil',
      component: DashProfile,
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard/locations/:userEmail',
      name: 'Locations',
      component: DashLocations,
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard/listings',
      name: 'Listings',
      component: DashListings,
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard/profile/:userEmail/mylistings',
      name: 'MyListings',
      component: ProfileListings,
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard/profile/:userEmail/newproperty',
      name: 'NewProperty',
      component: ProfileNewProperty,
      meta: { requiresAuth: true }
    }
  ];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
        linkActiveClass: "active"
    }
);
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('atoken');
  if (to.matched.some(route => route.meta.requiresAuth) && !token) {
    next('/login');
  } else {
    next();
  }
});
export default router;