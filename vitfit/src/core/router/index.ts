// nav components


import HeaderFile from "../../components/HeaderFile.vue";
import Homepage from "../../components/Homepage.vue";
import buttons from "../../components/Buttons.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { h, resolveComponent } from 'vue'


const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "page.home", components: {default:Homepage, NavBar: HeaderFile } },
//   { path: "/login", components: { default: LoginView, banner: banner, FooterPage: FooterPage, } },
//   { path: "/internetbanking", components: { default: InternetBanking } },
//   { path: "/signup", components: { default: NewAccount, banner: banner, FooterPage: FooterPage } },
//   { path: "/register", components: { default: RegisterPage, banner: banner, FooterPage: FooterPage, } },

  // { path: "/secure/transfer", components: { dashheader: dashheader, sideBar:sideBar,default:transfer,baldash:dashboard  }},
  {
    path: "/:catchAll(.*)",
    components: { default: HeaderFile, FooterPage: HeaderFile, NavBar: HeaderFile } ,
  },

];





const history = createWebHistory();
const router = createRouter({
  history,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// router.beforeEach((route) => {
//   if (route.meta && route.meta.requireAuth == true) {
//     const isAuth = authenticate();
//     if (isAuth == true) {
//       return;
//     } else {
//       return (route.path = "/auth/login");
//     }
//   } else {
//     return;
//   }
// });

export default router;
