  <script setup lang="ts">
  import { ref } from 'vue'
  import buttons from "../components/Buttons.vue";
  import { Collapse, Ripple, initTE } from "tw-elements";

  initTE({ Collapse, Ripple });
  // let open = ref(false)
  let Links = [
    { name: "PERSONAL TRAINER", bimg: "/img/slide-1.jpg", btn: "MORE" },
    { name: "FREE WORKOUTs", bimg: "/img/bg-programs.jpg", btn: "MORE" },
    { name: "CROSSFIT", bimg: "/img/trainer-1.jpg", btn: "MORE" },
    { name: "MARTIAL ARTS", bimg: "/img/trainer-2.jpg", btn: "MORE" },
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
      <h2 class="text-4xl md:text-6xl font-bold py-10 mt-10 md:mt-0">
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
    class="w-full bg-fixed bg-center bg-no-repeat bg-cover md:h-[600px] h-[1600px]"
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

    <div
      class="grid md:grid-cols-4 md:h-96 w-11/12 gap-8 px-10 mt-10 h-[900px] md:mx-12 mx-6 left-0 right-10 pb-10"
    >
      <div
        v-for="link in Links"
        :key="link.name"
        class="trainers relative border-4 border-transparent p-10 w-full h-[300px] md:h-full space-y-10 hover:border-red-700 duration-1000 hover:border-4 z-10"
      >
        <div
          class="md:w-full w-[250px] absolute md:h-full h-48 left-0 top-0 border h-[290px]"
        >
          <img :src="link.bimg" class="h-full w-full" />
        </div>

        <div class="absolute left-0 w-full md:p-10 mt-10 mb-48 space-y-10">
          <h4 class="text-white text-center w-full text-[20px] font-bold h">
            {{ link.name }}
          </h4>

          <buttons class="px-10 mx-20 py-2"> {{ link.btn }} </buttons>
        </div>
      </div>
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

    <div class="w-full px-5">
      <div class="md:flex justify-between gap-8 md:space-y-0 space-y-8">
        <div class="md:flex">
          <img src="/img/trainer-1.jpg" class="w-full md:w-auto h-[300px]" />

          <div
            class="w-full bg-[#272a31] border-4 border-[#272a31] hover:border-red-700 duration-1000 hover:border-4"
          >
            <div class="md:p-5 md:py-12">
              <h2 class="text-white text-center text-2xl font-bold">
                SAM PITERS
              </h2>
              <P class="text-red-700 font-bold kxl text-center">WEIGHLIFTING</P>
              <p class="py-5 text-gray-400 hidden md:block">
                Maecenas consequat ex id lobortis venenatis. Mauris id erat
                enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis
                dapibus miq.
              </p>
            </div>
          </div>
        </div>
        <div class="md:flex">
          <img src="/img/trainer-2.jpg" class="w-full md:w-auto h-[300px]" />

          <div
            class="bg-[#272a31] border-4 border-[#272a31] hover:border-red-700 duration-1000 hover:border-4"
          >
            <div class="md:p-5 md:py-12">
              <h2 class="text-white text-2xl text-center font-bold">
                SAM PITERS
              </h2>
              <P class="text-red-700 font-bold 2xl text-center">WEIGHLIFTING</P>
              <p class="py-5 text-gray-400 hidden md:block">
                Maecenas consequat ex id lobortis venenatis. Mauris id erat
                enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis
                dapibus miq.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full bg-[#1f2937]">
    <div class="p-10">
      <p class="text-center text-2xl md:text-4xl font-bold text-white">
        WHATS INCLUDED
      </p>
    </div>

    <div class="grid md:grid-cols-2 md:px-10 md:mt-10 md:mx-12 mx-6 pb-10">
      <div class="md:p w-full">
        <h4 class="font-bold text-2xl text-gray-300 w-11/12 text-center">
          Detailed Training And Nutrition Plan
        </h4>

        <p
          class="md:p py-5 text-[#f6f6f6] text-cente leading-10 text-1xl w-full"
        >
          I understand it is not easy to come up with a detailed fitness and
          nutrition plan. This is why my team and I will take the hard work of
          your hands and help you develop a custom plan that suits your needs
          specifically. We are dedicated to your success in your fitness journey
          and we are here to support and motivate you to reach your goals.
        </p>

        <p class="hover:translate-x-1 duration-300 cursor-pointer font-bold text-red-700">
          Book a Session <span class="fa fa-arrow-right"></span>
        </p>
        <img src="svg/effect-1.svg" class="hover:-translate-y-6 delay-100 duration-1000" />
      </div>

      <div class="md:pl-20 mt-5 md:mt-0">
        <img src="img/image-8.png" class="px-10 md:px-0 hover:rotate-12 duration-1000" />
      </div>
    </div>

    <div
      class="grid md:grid-cols-2 md:px-5  pb-10 w-full"
    >
      <div class="">
        <img src="img/image-3.png" class="px-10 md:px-10" />
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
