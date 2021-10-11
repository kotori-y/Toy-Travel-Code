import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home";
import Agreement from "@/pages/ServiceArgeement/Agreement";
import Policy from "@/pages/PrivacyPolicy/Policy";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
      meta: {
        index: 0,
        notAllowBack: true
      },
    },
    {
      path: "/agreement",
      name: "agreement",
      component: Agreement,
      meta: {
        index: 1
      }
    },
    {
      path: "/policy",
      name: "policy",
      component: Policy,
      meta: {
        index: 1
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
  ],
})

router.beforeEach((to, from, next) => {
  // Redirect if user is disallowed to view the page
  if (to.meta["notAllowBack"]) {
    history.pushState(null, null, location.protocol + '//' + location.host + '/#' + to.path)
  }

  return next()
})

export default router;