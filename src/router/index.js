import Vue from "vue";
import VueRouter from "vue-router";
/*import Home from "../views/Home.vue"; */
import Router1 from "../views/Router1.vue";
import Router2 from "../views/Router2.vue";
import Router3 from "../views/Router3.vue";
import Router4 from "../views/Router4.vue";


Vue.use(VueRouter);

const routes = [
/*   {
    path: "/",
    name: "Home",
    component: Home
  },
    {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  }, */
  {
    path: "/router1",
    name: "Router1",
    component: Router1
  },
  {
    path: "/router2",
    name: "Router2",
    component: Router2
  },
  {
    path: "/router3",
    name: "Router3",
    component: Router3
  },
  {
    path: "/router4",
    name: "Router4",
    component: Router4
  },
];

const router = new VueRouter({
  routes
});

export default router;
