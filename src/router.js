import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/city",
      name: "city",
      component: () =>
        import( "./views/city/City.vue")
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: () =>
          import( "./views/detail/Detail.vue")
    }
  ],
  strict: process.env.NODE_ENV !== 'production'
});
