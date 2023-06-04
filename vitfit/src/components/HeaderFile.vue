<script setup lang="ts">
import { ref } from "vue";

import Buttons from "../components/Buttons.vue";
let open = ref(false)
let Links = [
  { name: "Home", link: "#" },
  { name: "Services", link: "#" },
  { name: "About", link: "#" },
  { name: "Contact", link: "#" },
];

function Menuopen(){
  open.value=!open.value
}
</script>
<template>
  <div class="   bg-transparent    w-full absolute  ">
  <div
    class="bg-gray-900 opacity-90 text-orange-900 font-bold text-1xl justify-between  hidden  px-5 items-center py-2.5  sm:block sm:flex w-full"
  >
    <div class="flex justify-between px-2 space-x-4 text-xs">
      <span class="text-orange-500 font-bold text-1xl">
        <span class="fa fa-phone text-red-900 px-2"></span>
        1-800-488-60402</span
      >

      <span class="bi bi-telephone text-orange-0 font-bold text-1xl"
        ><span class="fa fa-clock-o text-red-900 px-2"></span> Mon - Fri: 8:00AM
        - 7:00PM | Sat - Sun: Closed</span
      >
    </div>

    <div class=" flex">
      <span
        class="fa fa-facebook text-gray-500 hover:text-blue-500 px-2"
      ></span>
      <span
        class="fa fa-twitter text-gray-500 hover:text-green-500 px-2"
      ></span>
      <span
        class="fa fa-instagram text-gray-500 hover:text-yellow-500 px-2"
      ></span>
    </div>
  </div>
<hr class="w-94 mx-20 bg-red-900">
  <div
    class="bg-gray-900 md:opacity-90 z-50  text-gray-100 py-1 px-6  md:flex justify-between items-center w-full "
  >
    <div class="flex items-center">
      <span class="py-1 px-1 mr-1">
        <img src="/img/reh.png" class="w-20 px-2" />
      </span>

      <h1 class="text-4xl text-red-900 font-bold">Vit Fit</h1>
    </div>
    <span @click="Menuopen()" class="absolute md:hidden right-6 top-3 cursor-pointer text-2xl">
      <i :class="[open? 'fa fa-times':'fa fa-bars']"></i>
    </span>
    
    <ul class="bg-gray-900 opacity-90 z-40 md:flex md:items-center md:px-0 px-6 md:pb-0 pb-10 md:static absolute bg-[#202020] md:w-auto w-full top-14 duration-700 ease-in" :class="[open ? 'right-0':'right-[100%]']">
      <hr class="mt-10">
      <li class="md:mx-4 md:my-0 my-6" v-for="link in Links" :key="link.name">
        <a href="{{link.link }}" class="text-xl hover:text-green-500">{{
          link.name
        }}</a>
      </li>

      <Buttons> Get Started </Buttons>
    </ul>
  </div>
  </div>
</template>
