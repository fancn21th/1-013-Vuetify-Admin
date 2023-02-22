// Composables
import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { RouterView } from "vue-router";

NProgress.configure({ showSpinner: false });

export const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: RouterView,
        redirect: "/home/dashboard",
        children: [
          {
            path: "/home/dashboard",
            name: "Dashboard",
            component: () =>
              import(/* webpackChunkName: "home" */ "@/views/Dashboard.vue"),
          },
          {
            path: "/home/charts",
            name: "Charts",
            component: () =>
              import(/* webpackChunkName: "home" */ "@/views/Charts.vue"),
          },
        ],
      },
      {
        path: "/about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/About.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start(); // start progress bar
  next();
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});

export default router;
