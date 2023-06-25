// nav components


import HeaderFile from "../../components/HeaderFile.vue";
import Homepage from "../../components/Homepage.vue";
import Servicespage from "../../components/ProgramPage.vue";
import aboutpage from "../../components/CustomeCoach.vue";
import contactpage from "../../components/ContactPage.vue";
import buttons from "../../components/Buttons.vue";
import BreadCrumb from "../../components/BreadCrumb.vue";
import FooterFile from "../../components/FooterFile.vue";



import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { h, resolveComponent } from 'vue'


const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "page.home", components: {default:Homepage, NavBar: HeaderFile,FooterPage: FooterFile } },
  { path: "/custome", name: "Custome Coaching", components: {default:aboutpage, NavBar: HeaderFile,banner: BreadCrumb,FooterPage: FooterFile } },
  { path: "/services",name:"Programs", components: { default: Servicespage, NavBar: HeaderFile, banner: BreadCrumb, FooterPage: FooterFile, } },
  { path: "/contact",name:"Contact Us", components: { default: contactpage,NavBar: HeaderFile, banner: BreadCrumb, FooterPage: FooterFile, } },
//   { path: "/signup", components: { default: NewAccount, banner: banner, FooterPage: FooterPage } },
//   { path: "/register", components: { default: RegisterPage, banner: banner, FooterPage: FooterPage, } },

  // { path: "/secure/transfer", components: { dashheader: dashheader, sideBar:sideBar,default:transfer,baldash:dashboard  }},
  {
    path: "/:catchAll(.*)",
    components: { default: HeaderFile, FooterPage: FooterFile, NavBar: HeaderFile } ,
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
  linkActiveClass:'activepage',
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
