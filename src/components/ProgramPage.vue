<script lang="ts" setup>
import { useRouter } from "vue-router";
import buttons from "../components/Buttons.vue";
import * as programs from "../static_data/programs.json";

// initialize router
const router = useRouter();

// let programs = [
//   { ico: "fa fa-lock text-red-700 text-6xl text-fold text-center w-full",title:"8 weeks Bulking program",note:"", bimg: "/img/slide-1.jpg", btn: "$39.99 TO GET STARTED",btnlink:"book-appointment?program=bulky" },

//   { ico: "fa fa-medal text-red-700 text-6xl text-fold text-center w-full",title:"8 weeks Lean Bulking program",note:"Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dapibus mi. Nunc venenatis sollicitudin nisl vel auctor.", bimg: "/img/trainer-1.jpg", btn: "$50.00 TO GET STARTED",btnlink:"book-appointment?program=lean" },

//   { ico: "fa fa-weight-hanging text-red-700 text-6xl text-fold text-center w-full",title:"12 weeks Glute program plan ",note:"Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dapibus mi. Nunc venenatis sollicitudin nisl vel auctor.", bimg: "/img/slide-1.jpg", btn: "$49.99 TO GET STARTED",btnlink:"/shreded" },
//   { ico: "fa fa-person-running text-red-700 text-6xl text-fold text-center w-full",title:"60 days shredded program",note:"Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dapibus mi. Nunc venenatis sollicitudin nisl vel auctor.", bimg: "/img/slide-1.jpg", btn: "$69.99 TO GET STARTED",btnlink:"book-appointment?program=transform" },

//   { ico: "fa fa-uniform-martial-arts text-red-700 text-6xl text-fold text-center w-full",title:"90 Days Mass Gain program",note:"Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dapibus mi. Nunc venenatis sollicitudin nisl vel auctor.", bimg: "/img/slide-1.jpg", btn: "$54.99 TO GET STARTED",btnlink:"book-appointment/glutes" },

//   { ico: "fa fa-dumbbell text-red-700 text-6xl text-fold text-center w-full",title:"Nutrition plan",note:"Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dapibus mi. Nunc venenatis sollicitudin nisl vel auctor.", bimg: "/img/slide-1.jpg", btn: "$19.99 TO GET STARTED",btnlink:"book-appointment?program=weightloss" },

// ];
</script>
<template>
  <div
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
      Wa are here to guide you on your journey towards achieving optimal health
      and wellness. lets Go!!
    </p>
  </div>

  <div
    class="grid md:grid-cols-3 content-between w-full px-10 md:px-24 gap-y-3 h-auto"
    style="background-image: url(svg/effect-1.svg)"
  >
    <div
      v-for="program in programs.data"
      :key="program.title"
      class="relative justify-between md:w-12/12 md:p-5 hover:border-red-900 hover:md:p-0 duration-500 hover:py-[20px] duration-500 rounded-2xl py-[10px] md:h-[400px]"
    >
      <div class="absoldute w-full left-0 top-0 rounded-2xl h-[300px]">
        <img
          :src="program.bimg"
          class="w-full brightness-50 grayscale-[50%] md:h-[370px] h-[300px] rounded-2xl"
        />
      </div>

      <div class="absolute left-0 w-full top-[20px] md:top-[70px] space-y-2">
        <span :class="program.ico"></span>
        <h3
          class="font-bold text-red-100 text-1xl text-yellow-600 text-center w-full"
        >
          {{ program.title }}
        </h3>

        <p class="text-center text-white px-2 py-2 md:px-8" style=" overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 7; -webkit-box-orient: vertical; ">
          {{ program.note }}
        </p>

        <div class="grid place-content-center">
          <buttons
            @click="
              router.push({
                path: 'book-appointment',
                query: { program: program.id },
              })
            "
          >
            {{ program.btn }}</buttons
          >
        </div>
      </div>
    </div>
  </div>
</template>
