  <script setup lang="ts">
  // import { reactive} from 'vue'
  import buttons from "../components/Buttons.vue";
  import { Collapse, Ripple, initTE } from "tw-elements";


  // initializations
  initTE({ Collapse, Ripple });
  // variables
  // let open = ref(false)

  </script>

<template>
 
  <div class="w-full bg-[#1f2937]">
    <div class="p-10 grid grid-cols-1 ">
      <p class="text-center text-2xl md:text-4xl font-bold text-white">
        WHATS INCLUDED
      </p>
      <p class="text-center text-sm p-5 md:mx-[400px] ">Welcome to VitFit where your fitness goals become our mission. As a dedicated and experienced personal trainer</p>
    </div>


    <div class="grid grid-cols-3 p-10 space-x-2">
      <div class="bg-white  p-10 pb-20  ">
        <div class="space-y-5">
          <h4 class="text-2sm text-red-500 font-bold">1 on 1 Coaching:</h4>

          <span class="text-sm ">
            One-on-one coaching is a personalized training approach where I work directly with a client in a private setting. This allows for focused attention on the individual's fitness level, preferences, and specific objectives.
          </span>

          

        </div>
      </div>

      <div class="bg-red-200">  

      </div>

      <div class="bg-red-200">

      </div>

    </div>

 



 </div>
</template>

<style scoped>
.trainers {
  background-image: linear-gradient(rgba(2, 0, 0, 0.5), rgba(2, 0, 0, 0.5));
  /* url(v-bind(links[0].bgimg)); */
}
</style>
