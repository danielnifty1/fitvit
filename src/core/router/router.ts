
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// nav components
const HeaderFile=()=>import("../../components/HeaderFile.vue")
const Homepage=()=>import( "../../components/Homepage.vue");
const Servicespage=()=>import( "../../components/ProgramPage.vue");
const aboutpage=()=>import( "../../components/CustomeCoach.vue");
const contactpage=()=>import( "../../components/ContactPage.vue");
const buttons=()=>import("../../components/Buttons.vue");
const BreadCrumb=()=>import("../../components/BreadCrumb.vue");
const FooterFile=()=>import("../../components/FooterFile.vue");
const Regform=()=>import("../../components/Regform.vue");
const LoginPage=()=>import("../../components/LoginPage.vue");


const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "page.home", components: {default:Homepage, NavBar: HeaderFile,FooterPage: FooterFile } },
  { path: "/custome", name: "Custome Coaching", components: {default:aboutpage, NavBar: HeaderFile,banner: BreadCrumb,FooterPage: FooterFile } },
  { path: "/servicesg",name:"Programs", components: { default: Servicespage, NavBar: HeaderFile, banner: BreadCrumb, FooterPage: FooterFile, } },
  { path: "/contact",name:"Contact Us", components: { default: contactpage,NavBar: HeaderFile, banner: BreadCrumb, FooterPage: FooterFile, } },
  { path: "/secure/signup", components: { default: Regform, NavBar: HeaderFile, FooterPage: FooterFile,buttons:buttons } },
  //  { path: "/login",name:"Progrhams", components: { default: Servicespage, NavBar: HeaderFile, banner: BreadCrumb, FooterPage: FooterFile, } },

  { path: "/secure/login", components: {default:LoginPage,NavBar:HeaderFile,FooterPage:FooterFile  }},
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
