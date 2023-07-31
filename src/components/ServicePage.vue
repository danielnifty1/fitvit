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
 

  <!-- <div
    class="grid md:grid-cols-4 gap-6 w-full p-5 md:p-0 justify-center place-content-center"
  >
    <h3
      class="font-Poppins font-bold text-4xl text-center text-white py-10 md:col-start-2 md:col-span-4 md:w-7/12 w-full"
    >
      Welcome <span class="border-b-4 border-red-700 pb-2">To</span>
      <span class="text-red-800"> VitFit </span>
    </h3>

    <p
      class="text-center text-white md:col-start-2 md:col-span-4 md:w-7/12 w-full"
    >
   Wa are here to guide you on your journey towards achieving optimal health and wellness. lets Go!!
    </p>
  </div> -->

  



  <div class="w-full bg-[#1f2937]">
    <div class="p-10 grid grid-cols-1 ">
      <p class="text-center text-2xl md:text-4xl font-bold text-white">
        WHATS INCLUDED
      </p>
      <p class="text-center md:w-5/12 p-5 md:mx-[400px] ">Welcome to VitFit where your fitness goals become our mission. As a dedicated and experienced personal trainer</p>
    </div>

    <div class="grid md:grid-cols-2 md:px-10 md:mt-10 md:mx-12 mx-6 pb-10">
      <div class="md:p w-full">
        <h4 class="font-bold text-2xl text-gray-300 w-11/12 text-center">
          Detailed Training And Nutrition Plan
        </h4>

        <p
          class="md:p py-5 text-[#f6f6f6] text-cente leading-10 text-1xl w-full"
        >
        We work closely with you to define your specific goals, whether it's weight loss, building muscle, enhancing athletic performance, or simply adopting a healthier lifestyle. By establishing clear objectives, we can develop a tailored plan that maximizes your potential.
        </p>

        <p class="hover:translate-x-1 duration-300 cursor-pointer font-bold text-red-700">
          Book a Session <span class="fa fa-arrow-right"></span>
        </p>
        <img src="/svg/effect-1.svg" class="hover:-translate-y-6 delay-100 duration-1000" />
      </div>

      <div class="md:pl-20 mt-5 md:mt-0">
        <img src="/img/image-8.png" class="px-10 md:px-0 hover:rotate-12 duration-1000" />
      </div>
    </div>

    <div
      class="grid md:grid-cols-2 md:px-5  pb-10 w-full"
    >
      <div class="">
        <img src="/img/image-3.png" class="px-10 md:px-10" />
      </div>

      <div class="md:px-10 w-full">
        <h4
          class="font-bold text-2xl text-gray-300 w-11/12 text-center md:pt-0 pt-10"
        >
          Accountability
        </h4>

        <p
          class="py-5 px-5 text-[#f6f6f6] text-cente leading-10 text-1xl w-full md:w-full"
        >
          Being accountable is one of the most important parts of ones fitness
          journey. We all know life happens and you may lose motivation. This is
          why we are here, my team and I will make sure to always hold you
          accountable in order for you to stay on track with your fitness goals.
          We have come up with a simple yet effective formula that we use within
          our programs to make sure you are accountable at all times
        </p>

        <p class="hover:translate-x-1 duration-300 cursor-pointer px-5 font-bold text-red-700">
          Book a Session <span class="fa fa-arrow-right"></span>
        </p>
      </div>
    </div>
  </div>

  <div
    class="w-full grid justify-items-center md:p-40 p-5 space-y-10"
    style="
      background-image: linear-gradient(rgba(2, 0, 0, 0.5), rgba(2, 0, 0, 0.5)),
        url(/img/slide-1.jpg);
    "
  >
    <p
      class="text-center text-white font-bold md:text-4xl text-2xl md:w-7/12 md:leading-[80px] w-full py-5"
    >
      Let Me Help You Find The Right Program That Will Meet Your Fitness Goals.
    </p>
    <p class="text-center text-white">It will only take a few seconds</p>

    <buttons class="w p-20"
      >Get Started <span class="fa fa-arrow-right"></span
    ></buttons>
  </div>

 
</template>

<style scoped>
.trainers {
  background-image: linear-gradient(rgba(2, 0, 0, 0.5), rgba(2, 0, 0, 0.5));
  /* url(v-bind(links[0].bgimg)); */
}
</style>
