
import { createApp } from "vue";
import Notifications from "@kyvg/vue3-notification";
import { createPinia } from "pinia";
import App from "./App.vue";
import './style.css'
import router from "./core/router";
import './axios';
const cryptoApp = createApp(App);
cryptoApp.use(createPinia());
cryptoApp.use(router);
cryptoApp.use(Notifications);

cryptoApp.mount("#app");