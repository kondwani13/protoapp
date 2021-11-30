import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/software",
    name: "software",
    component: () => import("../views/software.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () => import("../views/services.vue"),
  },
  {
    path: "/technologies",
    name: "technologies",
    component: () => import("../views/technologies.vue"),
  },
  {
    path: "/web",
    name: "web",
    component: () => import("../views/web.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import("../views/faq.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
