<script lang="ts" setup>
import buttons from "../components/Buttons.vue";


let programs = [
  { ico: "fa fa-lock text-red-700 text-6xl text-fold text-center w-full",title:"BULKING PROGRAM ",note:"Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dapibus mi. Nunc venenatis sollicitudin nisl vel auctor.", bimg: "/img/slide-1.jpg", btn: "$25 TO GET STARTED",btnlink:"/bulky" },

  { ico: "fa fa-medal text-red-700 text-6xl text-fold text-center w-full",title:"LEAN BULKING PROGRAM",note:"Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dapibus mi. Nunc venenatis sollicitudin nisl vel auctor.", bimg: "/img/trainer-1.jpg", btn: "$35 TO GET STARTED",btnlink:"/lean" },

  { ico: "fa fa-weight-hanging text-red-700 text-6xl text-fold text-center w-full",title:"30 DAY SHREDED PROGRAM ",note:"Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dapibus mi. Nunc venenatis sollicitudin nisl vel auctor.", bimg: "/img/slide-1.jpg", btn: "$50 TO GET STARTED",btnlink:"/shreded" },
  { ico: "fa fa-person-running text-red-700 text-6xl text-fold text-center w-full",title:"6 WEEEKS TRANSFORMATION PROGRAM ",note:"Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dapibus mi. Nunc venenatis sollicitudin nisl vel auctor.", bimg: "/img/slide-1.jpg", btn: "$50 TO GET STARTED",btnlink:"/transform" },
  { ico: "fa fa-uniform-martial-arts text-red-700 text-6xl text-fold text-center w-full",title:"30 DAY GLUTES CHALLENGE",note:"Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dapibus mi. Nunc venenatis sollicitudin nisl vel auctor.", bimg: "/img/slide-1.jpg", btn: "$100 TO GET STARTED",btnlink:"/glutes" },
  { ico: "fa fa-dumbbell text-red-700 text-6xl text-fold text-center w-full",title:"WEIGHT-LOSS PROGRAM ",note:"Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dapibus mi. Nunc venenatis sollicitudin nisl vel auctor.", bimg: "/img/slide-1.jpg", btn: "$100 TO GET STARTED",btnlink:"weightloss" },

];


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
      Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi
      dolor dolor, auctor tincidunt lorem ut, venenatis dapibus mi. Nunc
      venenatis sollicitudin nisl vel auctor.
    </p>
  </div>

  <div
  class="grid md:grid-cols-3 content-between w-full px-10 md:px-24  gap-y-3   h-auto" style="background-image: url(svg/effect-1.svg);"  
  >
    <div v-for="program in programs"
        :key="program.title"
      class="relative justify-between md:w-10/12 md:p-5   hover:border-red-900 hover:md:p-0 duration-500 hover:py-[20px] duration-500  rounded-2xl py-[10px] md:h-[400px]"
      
    >
      <div class="absoldute w-full left-0 top-0  rounded-2xl h-[300px]">
        <img
          :src="program.bimg"
          class="w-full brightness-50 grayscale-[50%] md:h-[370px] h-[300px]  rounded-2xl"
        />
      </div>

      <div class="absolute left-0 w-full top-[20px] md:top-[70px] space-y-2">
        <span
         :class="program.ico"
        ></span>
        <h3 class="font-bold text-red-100 text-1xl text-center w-full ">
          {{program.title}}
        </h3>

        <p class="text-center text-white px-2 py-2 md:px-8">
         {{program.note}}
        </p>

        <div class="grid place-content-center">
          <buttons>{{program.btn}}</buttons>
        </div>
      </div>
    </div>


  </div>
</template>
