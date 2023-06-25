
import { createApp } from "vue";
import App from "./App.vue";
import Notifications from "@kyvg/vue3-notification";
import { createPinia } from "pinia";
import router from "./core/router/router";
import './core/utils/http_connection.axios';
import './style.css'

// initialize store
const pinia = createPinia();
// create app
const vitfitApp = createApp(App);
vitfitApp.use(pinia);
vitfitApp.use(router);
vitfitApp.use(Notifications);
vitfitApp.mount("#app");