<script setup lang="ts">
import { ref } from "vue";

import Buttons from "../components/Buttons.vue";
import { useAuthStore } from "../core/store";

const authStore = useAuthStore();

let open = ref(false);
let Links = [
  { name: "Home", link: "home" },
  { name: "Services", link: "services" },

  { name: "Programs", link: "programs" },
  // { name: "Custom Coach", link: "book-appointment" },
  { name: "Contact", link: "contact" },
];

function Menuopen() {
  open.value = !open.value;
}

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementById("gen")!.className =
      "bg-gray-700 w-full md:fixed absolute z-50  transition-shadow  duration-1000"; // Fade in
  } else {
    document.getElementById("gen")!.className =
      "bg-transparent w-full absolute"; // Fade in
  }
}
</script>

<template>
  <div class="bg-transparent w-full absolute" id="gen">
    <div
      class="bg-gray-900 md:opacity-90 z-50 text-gray-100 py-5 px-6 md:flex justify-between items-center w-full"
    >
      <div class="flex items-center">
        <ul>
          <li>
            <router-link to="/" class="flex items-center">
              <span class="py-1 px-1 mr-1">
                <img src="/img/reh.png" class="w-20 px-2" />
              </span>

              <h1 class="text-4xl text-red-900 font-bold">Vit Fit</h1>
            </router-link>
          </li>
        </ul>
      </div>
      <span
        @click="Menuopen()"
        class="absolute md:hidden right-6 sm:top-3 top-7 cursor-pointer text-2xl"
      >
        <i :class="[open ? 'fa fa-times' : 'fa fa-bars']"></i>
      </span>

      <ul
        class="bg-gray-900 opacity-90 z-40 md:flex md:items-center md:px-0 px-6 md:pb-0 pb-10 md:static absolute bg-[#202020] md:w-auto w-full top-14 duration-700 ease-in"
        :class="[open ? 'right-0' : 'right-[100%]']"
      >
        <hr class="mt-10" />
        <li class="md:mx-4 md:my-0 my-6" v-for="link in Links" :key="link.name">
          <router-link :to="link.link">{{ link.name }}</router-link>
        </li>

        <div class="flex space-x-3">
          <Buttons v-if="authStore.isAuthenticated" @click="authStore.logoutUser"> Logout </Buttons>
          <div v-else class="flex space-x-2">
            <Buttons route="/login"> Login </Buttons>
            <Buttons route="/signup"> Get Started </Buttons>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.activepage {
  padding-bottom: 8px;
  border-bottom: 2px solid red;
  margin-bottom: 20px;
  /* transition-delay: 100ms; */
  transition-duration: 1000ms;
}
.activepage:hover {
  color: red;
}
</style>
