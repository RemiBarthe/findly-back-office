import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";
import { storeToRefs } from "pinia";
import { useTokenStore } from "@/stores/token";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: LoginView,
    beforeEnter(to, from, next) {
      const { token } = storeToRefs(useTokenStore());

      if (token.value) next("/posts");
      else next();
    },
  },
  {
    path: "/posts",
    name: "posts",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/PostsView.vue"),
    beforeEnter(to, from, next) {
      const { token } = storeToRefs(useTokenStore());

      if (token.value) next();
      else next("/");
    },
  },
  {
    path: "/users",
    name: "users",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/UsersView.vue"),
    beforeEnter(to, from, next) {
      const { token } = storeToRefs(useTokenStore());

      if (token.value) next();
      else next("/");
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
