<script setup lang="ts">
// import { ref } from 'vue'
import buttons from "../components/Buttons.vue";
// let open = ref(false)
let Links = [
  { name: "PERSONAL TRAINER", bimg: "/img/slide-1.jpg",btn:"MORE" },
  { name: "FREE WORKOUTs", bimg: "/img/slide-1.jpg",btn:"MORE" },
  { name: "CROSSFIT", bimg: "/img/slide-1.jpg",btn:"MORE" },
  { name: "MARTIAL ARTS", bimg: "/img/slide-1.jpg",btn:"MORE" },
];
</script>

<template>
  <div
    class="grid md:h-[700px] h-[400px] bg-cover bg-center bg-no-repeat content-center"
    style="
      background-image: linear-gradient(rgba(2, 0, 0, 0.5), rgba(2, 0, 0, 0.5)),
        url(/img/slide-1.jpg);
    "
  >
    <div class="flex place-content-center">
      <h2 class="text-4xl md:text-6xl font-bold py-10">
        <span class="text-white">PUSH</span
        ><span class="text-yellow-400"> YOURSELF</span>
      </h2>
    </div>

    <div
      class="grid md:grid-cols-4 z-10 gap-6 w-full p-2 md:p-0 justify-center place-content-center"
    >
      <p
        class="text-center text-white p-4 md:p-5 bg-gray-900 md:opacity-80 md:col-start-2 md:col-span-4 md:w-7/12 w-full"
      >
        Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi
        dolor dolor, auctor tincidunt lorem ut, venenatis dapibus mi. Nunc
        venenatis sollicitudin nisl vel auctor.
      </p>
    </div>
  </div>

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

  <div class="md:flex grid w-full px-2 md:px-24 py-8 gap-x-8 gap-y-3">
    <div
      class="place-content-center bg-gray-800 md:p-8 p-1 box-border md:w-1/3 w-full"
    >
      <div
        class="place-content-center text-center space-y-8 hover:border-red-700 duration-1000 border-gray-800 border-4 p-8"
      >
        <span class="fa fa-lock text-red-700 text-6xl text-fold"></span>
        <h3 class="font-bold text-white text-3xl">BODY BUILDING</h3>

        <p class="text-gray-400">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>

        <buttons class="ease-in duration-300"> VIEW SCHEDULE </buttons>
      </div>
    </div>

    <div
      class="place-content-center bg-gray-800 md:p-8 p-1 box-border md:w-1/3 w-full"
    >
      <div
        class="place-content-center text-center space-y-8 hover:border-red-700 duration-1000 border-gray-800 border-4 p-10 hover:duration-900 hover:ease-in"
      >
        <span class="fa fa-lock text-red-700 text-6xl text-fold"></span>
        <h3 class="font-bold text-white text-3xl">BODY BUILDING</h3>

        <p class="text-gray-400">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>

        <buttons> VIEW SCHEDULE </buttons>
      </div>
    </div>

    <div
      class="place-content-center bg-gray-800 md:p-8 p-1 box-border md:w-1/3 w-full"
    >
      <div
        class="place-content-center text-center space-y-8 hover:border-red-700 duration-1000 border-gray-800 border-4 p-10 hover:duration-900 hover:ease-in"
      >
        <span class="fa fa-lock text-red-700 text-6xl text-fold"></span>
        <h3 class="font-bold text-white text-3xl">BODY BUILDING</h3>

        <p class="text-gray-400">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>

        <buttons> VIEW SCHEDULE </buttons>
      </div>
    </div>
  </div>

  <div
    class="w-full bg-fixed bg-center bg-no-repeat bg-cover h-[600px]"
    style="
      background-image: linear-gradient(rgba(2, 0, 0, 0.5), rgba(2, 0, 0, 0.5)),
        url(/img/bg-programs.jpg);
    "
  >
    <div class="md:col-start-2 md:col-span-3 w-full">
      <h2 class="font-Poppins text-4xl text-center text-white pb-2 py-10">
        Our Programs
      </h2>

      <div class="flex justify-center">
        <p
          class="text-center text-white md:col-start-2 md:col-span-4 md:w-4/12 w-full py-5"
        >
          Maecenas consequat ex id lobortis venenatis. Mauris id erat enim.
          Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dadivibus mi.
          Nunc venenatis sollicitudin nisl vel auctor.
        </p>
      </div>
    </div>

    <div class="flex justify-between h-96 w-11/12 gap-8 px-10 ">
      <div v-for="link in Links" :key="link.name"
        class=" trainers animad te-spin grid bg-cover bg-center bg-no-repeat content-center p-10 w-full space-y-10 hover:border-red-700 duration-1000 hover:border-4"
      
      >
        <h4 class="text-white text-center w-full text-1xl font-bold h">
         {{ link.name }}
        </h4>
       
        <buttons> {{link.btn}} </buttons>
      </div>

      <!-- <div
        class="animad te-spin grid bg-cover bg-center bg-no-repeat content-center p-10 w-full space-y-10 hover:border-red-700 duration-1000 hover:border-4"
        style="
          background-image: linear-gradient(
              rgba(2, 0, 0, 0.5),
              rgba(2, 0, 0, 0.5)
            ),
            url(/img/slide-1.jpg);
        "
      >
        <h4 class="text-white text-center w-full text-1xl font-bold h">
          PERSONAL TRAINER
        </h4>

        <buttons> MORE </buttons>
      </div>

      <div
        class="animad te-spin grid bg-cover bg-center bg-no-repeat content-center p-10 w-full space-y-10 hover:border-red-700 duration-1000 hover:border-4"
        style="
          background-image: linear-gradient(
              rgba(2, 0, 0, 0.5),
              rgba(2, 0, 0, 0.5)
            ),
            url(/img/slide-1.jpg);
        "
      >
        <h4 class="text-white text-center w-full text-1xl font-bold h">
          PERSONAL TRAINER
        </h4>

        <buttons> MORE </buttons>
      </div>

      <div
        class="animad te-spin grid bg-cover bg-center bg-no-repeat content-center p-10 w-full space-y-10 hover:border-red-700 duration-1000 hover:border-4"
        style="
          background-image: linear-gradient(
              rgba(2, 0, 0, 0.5),
              rgba(2, 0, 0, 0.5)
            ),
            url(/img/slide-1.jpg);
        "
      >
        <h4 class="text-white text-center w-full text-1xl font-bold h">
          PERSONAL TRAINER
        </h4>

        <buttons> MORE </buttons>
      </div> -->
    </div>
  </div>

  <div class="w-full p-10">
    <h4 class="text-white text-center w-full text-4xl font-bold">
      OUR <span class="text-red-700">TRAINER</span>
    </h4>
    <div class="flex justify-center">
      <p
        class="text-center text-white md:col-start-2 md:col-span-4 md:w-4/12 w-full py-5"
      >
        Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi
        dolor dolor, auctor tincidunt lorem ut, venenatis dadivibus mi. Nunc
        venenatis sollicitudin nisl vel auctor.
      </p>
    </div>

    <div class=" w-full ">
      <div class="flex justify-between gap-8">
        <div class="flex ">
          <img src="/img/trainer-1.jpg" />

          <div class=" bg-[#272a31] border-4 border-[#272a31] hover:border-red-700 duration-1000 hover:border-4">
            <div class="p-5 py-12">
              <h2 class="text-white text-2xl font-bold">SAM PITERS</h2>
              <P class="text-red-700 font-bold kxl">WEIGHLIFTING</P>
              <p class="py-5 text-gray-400">Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dapibus miq.</p>
            </div>
          </div>
        </div>
        <div class="flex">
          <img src="/img/trainer-2.jpg" />

          <div class=" bg-[#272a31]">
            <div class="p-5 py-12">
              <h2 class="text-white text-4xl font-bold">SAM PITERS</h2>
              <P class="text-red-700 font-bold 2xl">WEIGHLIFTING</P>
              <span>Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dapibus miq.</span>
            </div>
          </div>
        </div>

        <!-- <div class="flex h-84 border">
          <img src="/img/slide-1.jpg" />

          <div class="">
            <div>
              <h2 class="text-white text-4xl font-bold">SAM PITERS</h2>
              <P>WEIGHLIFTING</P>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.trainers{
  background-image: linear-gradient(
              rgba(2, 0, 0, 0.5),
              rgba(2, 0, 0, 0.5)
            ),
            url({{link.image}});
}

</style>
