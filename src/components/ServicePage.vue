<script setup lang="ts">
// import { reactive} from 'vue'
// import buttons from "../components/Buttons.vue";
import { Collapse, Ripple, initTE } from "tw-elements";

// initializations
initTE({ Collapse, Ripple });
// variables
// let open = ref(false)
</script>

<template>
  <div  class="w-full bg-fixed bg-center bg-no-repeat bg-cover md:h-auto h-[1600px] space-y-5 "
    style="
      background-image: linear-gradient(rgba(2, 0, 0, 0.5), rgba(2, 0, 0, 0.5)),
        url(/img/bg-programs.jpg);
    ">
    <div class="p-10 grid grid-cols-1 bg-gray-900 opacity-80">
      <p class="text-center text-2xl md:text-4xl font-bold text-red-900">
        WHATS INCLUDED
      </p>
      <p class="text-center text-sm p-5 md:mx-[400px] text-white">
        Welcome to VitFit where your fitness goals become our mission. As a
        dedicated and experienced personal trainer
      </p>
    </div>

    <div class="grid md:grid-cols-3 md:p-10 p-5 md:space-x-2 md:space-y-0 space-y-5">
      <div class="bg-gray-900 opacity-70 shadow-2xl p-10 pb-20 rounded-1xl">
        <div class="space-y-5">
          <h4 class="text-2sm text-red-500 font-bold">1 on 1 Coaching:</h4>

          <p class="text-sm text-white text-justify">
            One-on-one coaching is a personalized training approach where I work
            directly with a client in a private setting. This allows for focused
            attention on the individual's fitness level, preferences, and
            specific objectives. I assess their current fitness status, design
            tailored workouts, monitor progress, and offer immediate feedback
            and adjustments. This personalized attention helps clients stay
            motivated, stay on track, and achieve their fitness goals
            effectively.
          </p>
        </div>
      </div>


      <div class="bg-gray-900 opacity-70 shadow-2xl p-10 pb-20 rounded-1xl">
        <div class="space-y-5">
          <h4 class="text-2sm text-red-500 font-bold">Custom Coaching Program:</h4>

          <p class="text-sm text-white text-justify">
            The custom coaching program involves the creation of a comprehensive and personalized fitness plan tailored to each client's specific needs, fitness level, and goals. This program takes into account factors such as age, fitness history, medical conditions, lifestyle, and preferences. I design workouts that are challenging yet achievable, ensuring that clients progress at a pace suitable for their unique circumstances.
          </p>
        </div>
      </div>

      <div class="bg-gray-900 opacity-70 shadow-2xl p-10 pb-20 rounded-1xl">
        <div class="space-y-5">
          <h4 class="text-2sm text-red-500 font-bold">Virtual FitCam:</h4>

          <p class="text-sm text-white text-justify">
            Virtual FitCam is an innovative service that leverages technology to provide remote training sessions. Through video conferencing, clients can participate in real-time workouts with me from the comfort of their homes or any preferred location. It offers flexibility and convenience, making it suitable for clients with busy schedules or those who prefer remote training options.
          </p>
        </div>
      </div>

      
    </div>


     <div class="grid md:grid-cols-3 p-10 space-x-2  hidden md:inline-flex ">
      <div class="bg-gray-900 opacity-70 shadow-2xl p-10 pb-20 rounded-1xl">
        <div class="space-y-5">
          <h4 class="text-2sm text-red-500 font-bold">Nutritional Plan:</h4>

          <p class="text-sm text-white text-justify">
            A proper nutritional plan is crucial for overall fitness and wellness. I develop personalized nutritional plans that align with clients' fitness goals, taking into account their dietary preferences and any specific dietary requirements. The plan includes meal recommendations, portion control guidelines, and education about balanced nutrition to help clients make healthier food choices and sustain their fitness journey.
          </p>
        </div>
      </div>


      <div class="bg-gray-900 opacity-70 shadow-2xl p-10 pb-20 rounded-1xl">
        <div class="space-y-5">
          <h4 class="text-2sm text-red-500 font-bold">Cook with You Virtually:</h4>

          <p class="text-sm text-white text-justify">
            In this unique service, I virtually join clients in their kitchens to guide them through healthy cooking sessions. I provide recipes, cooking tips, and techniques that align with their nutritional goals. This interactive approach empowers clients to develop practical cooking skills and fosters a deeper understanding of how to incorporate nutritious and delicious meals into their daily routine.

          </p>
        </div>
      </div>

      <div class="bg-gray-900 opacity-70 shadow-2xl p-10 pb-20 rounded-1xl">
        <div class="space-y-5">
          <h4 class="text-2sm text-red-500 font-bold">FitVit:</h4>

          <p class="text-sm text-white text-justify">
            By offering these services, I aim to empower my clients to achieve lasting results, embrace a healthier lifestyle, and build a strong foundation for their physical and mental well-being. My focus is on fostering a supportive and motivating environment that ensures my clients feel confident and excited about their fitness journey.
          </p>
        </div>
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
