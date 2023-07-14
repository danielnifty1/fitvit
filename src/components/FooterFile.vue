<script setup lang="ts">
import { ref } from "vue";

// import Buttons from "../components/Buttons.vue";
let open = ref(false)
let Links = [
  { name: "Home", link: "home" },
  { name: "Programs", link: "services" },
  { name: "About", link: "about" },
  { name: "Contact", link: "contact" },


];


</script>
<template>
     <div class="h-[200px] bg-[#111827] w-full grid justify-items-center p-10 ">
        <div class="flex items-center">
      <span class="py-1 px-1 mr-1">
        <img src="/img/reh.png" class="w-20 px-2" />
      </span>

      <h1 class="text-4xl text-red-900 font-bold">Vit Fit</h1>
    </div>

        <ul class="bg-gray-900 opacity-90 z-40 md:flex md:items-center md:px-0 px-6 md:pb-0 pb-10 md:static absolute bg-[#202020] md:w-auto w-full top-14 duration-700 ease-in" :class="[open ? 'right-0':'right-[100%]']">
      <hr class="mt-10">
      <li class="md:mx-4 md:my-0 my-6" v-for="link in Links" :key="link.name">
        <router-link :to="link.link" class="text-xl text-white hover:text-green-500 ">{{
            link.name
          }}</router-link>
      </li>
      </ul>
      <div class="space-x-10 py-5    ">
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


  
</template>

<style scoped>
.activepage{
    padding-bottom: 8px;
  border-bottom: 2px solid red;
  margin-bottom: 20px;
  transition-delay: 100ms;
  transition-duration: 1000ms;
}
.activepage:hover{
  color: red;
}
</style>