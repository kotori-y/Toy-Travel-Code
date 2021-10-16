import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home";
import Agreement from "@/pages/ServiceArgeement/Agreement";
import Policy from "@/pages/PrivacyPolicy/Policy";
import LogInPage from "@/pages/LogIn/LogInPage";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: LogInPage,
      name: "login",
      meta: {
        index: 0,
        notBack: true,
      },
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("phoneNum")) next({name: "home"});
        else next();
      },
    },
    {
      path: "/home",
      component: Home,
      name: "home",
      meta: {
        index: 1
      }
    },
    {
      path: "/agreement",
      name: "agreement",
      component: Agreement,
      meta: {
        index: 2
      }
    },
    {
      path: "/policy",
      name: "policy",
      component: Policy,
      meta: {
        index: 2
      }
    },
    {
      path: '*',
      name: 'catchAll',
      component: Home,
      meta: {
        index: 0
      }
    }
  ]
})

router.beforeEach((to, from, next) => {

  if ((to.meta["index"] !== 0) || !from.meta["index"]) {
    next()
  }

  window.history.pushState(null, null, location.href)

})

export default router;