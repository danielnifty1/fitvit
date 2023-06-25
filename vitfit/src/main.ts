
import { createApp } from "vue";
import Notifications from "@kyvg/vue3-notification";
import { createPinia } from "pinia";
import App from "./App.vue";
// import {registerLicense} from '@syncfusion/ej2-base'
import './style.css'
import router from "./core/router";
import './axios';
const vitfitApp = createApp(App);
vitfitApp.use(createPinia());
vitfitApp.use(router);
vitfitApp.use(Notifications);

vitfitApp.mount("#app");