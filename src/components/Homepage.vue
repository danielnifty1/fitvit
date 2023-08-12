  <script setup lang="ts">
  import { reactive} from 'vue'
  import buttons from "../components/Buttons.vue";
  import TrainerModal from "../components/modal/TrainerModal.vue";
  import { Collapse, Ripple, initTE } from "tw-elements";
  import { ref } from "vue";
let modalActive=ref(false)
const ToggleModal=()=>{
  modalActive.value=!modalActive.value
}
  // initializations
  initTE({ Collapse, Ripple });
  // variables
  // let open = ref(false)
  let Links =reactive([
    { title: "Goal Setting", message: "We work closely with you to define your specific goals, whether it's weight loss, building muscle, enhancing athletic performance, or simply adopting a healthier lifestyle. By establishing clear objectives, we can develop a tailored plan that maximizes your potential.", },

    { title: "Customized Workouts:", message: "Our training sessions are carefully crafted to suit your fitness level, preferences, and limitations. Whether you prefer high-intensity workouts, strength training, cardiovascular exercises, or a combination thereof, we will create a program that keeps you engaged and motivated.", },

    { title: "Proper Form and Technique", message: "Safety is our top priority. We ensure that you perform exercises with correct form and technique, reducing the risk of injury and maximizing the effectiveness of each movement. You can be rest assured that every session will be conducted with close attention to detail.", },
    { title: "Nutritional Guidance", message: "Exercise alone is not enough to achieve your fitness goals. Our expertise extends beyond the gym floor as we provide nutritional guidance tailored to your needs. We educate you on balanced eating, portion control, and making healthier food choices to complement your training regimen.", },
  ]);
  </script>

<template>
  <div
    class="grid md:h-[700px] h-[400px] bg-cover bg-center bg-no-repeat content-center"
    style="
      background-image: linear-gradient(rgba(2, 0, 0, 0.5), rgba(2, 0, 0, 0.5)),
        url(/img/slide-1.jpg);
    "
  >
    <div class="flex place-content-center py-10">
      <h2 class="text-4xl md:text-6xl font-bold md:py-10 mt-20 mt-10 md:mt-0">
        <span class="text-white">PUSH</span
        ><span class="text-yellow-400"> YOURSELF</span>
      </h2>
    </div>

    <div
      class="grid md:grid-cols-4 z-10 gap-6 w-full p-2 md:p-0 justify-center place-content-center"
    >
      <p
        class="text-center text-white p-4 md:p-5 bg-gray-900 opacity-80 md:col-start-2 md:col-span-4 md:w-7/12 w-full"
      >
      Welcome to VitFit where your fitness goals become our mission. As a dedicated and experienced personal trainer, I am here to guide you on your journey towards achieving optimal health and wellness. Let's embark on this transformative path together!
      </p>
    </div>
    <div class="flex justify-center p-10">
      <buttons class="w-fit" @click="ToggleModal">who's a Trainer</buttons>

    </div>

    <TrainerModal v-show="modalActive"> 

      <div
      class="modal-contwent grid md:grid-cols-6 z-10 gap-6 w-full p-2 md:p-0 justify-center place-content-center translate-x-1 duration-300"
    >
    

      <p
        class="text-center text-white p-4 md:p-5 bg-gray-900 opacity-80 md:col-start-2 md:col-span-4 md:w-12/12 w-full"
      >
      <h4 class="text-center font-bold text-2xl text-red-800">Who is a Personal Trainer</h4>
      A personal trainer is more than just a fitness expert; they are your confidant, motivator, and educator rolled into one. With a deep understanding of exercise science, nutrition, and lifestyle management, a personal trainer becomes your trusted partner in improving your physical, mental, and emotional well-being. 
We understand that everyone has unique needs and goals, and we tailor our approach to suit your individual requirements effectively.
      </p>
      <i  @click="ToggleModal" class="fa fa-close text-red-600 absolute md:right-[240px] right-5  top-18 border border-radius-10 bg-gray-100 mt-2 hover:text-red-400 cursor-pointer "></i>
      
    </div>
       
      

    </TrainerModal>
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
   Wa are here to guide you on your journey towards achieving optimal health and wellness. lets Go!!
    </p>
  </div>

  <div class="md:flex grid w-full px-2 md:px-24 py-8 gap-x-8 gap-y-3">
    <div
      class="place-content-center bg-gray-800 md:p-8 p-1 box-border md:w-1/3 w-full"
    >
      <div
        class="place-content-center text-center space-y-8 hover:border-red-700 duration-1000 border-gray-800 border-4 p-"
      >
        <span class="fa fa-lock text-red-700 text-6xl text-fold"></span>
        <h3 class="font-bold text-white text-sm">Nutritional Guidance</h3>

        <p class="text-gray-400">
          Exercise alone is not enough to achieve your fitness goals. Our expertise extends beyond the gym floor as we provide nutritional guidance tailored to your needs. We educate you on balanced eating, portion control, and making healthier food choices to complement your training regimen.
        </p>

        <!-- <buttons class="ease-in duration-300"> VIEW GUIDE </buttons> -->
      </div>
    </div>

    <div
      class="place-content-center bg-gray-800 md:p-8 p-1 box-border md:w-1/3 w-full"
    >
      <div
        class="place-content-center text-center space-y-8 hover:border-red-700 duration-1000 border-gray-800 border-4 p- hover:duration-900 hover:ease-in"
      >
        <span class="fa fa-lock text-red-700 text-6xl text-fold"></span>
        <h3 class="font-bold text-white text-sm">Accountability and Support</h3>

        <p class="text-gray-400">
          Consistency is key to long-term success. As your personal trainer, we hold you accountable for your actions and provide unwavering support throughout your fitness journey. We understand the challenges you may face and are here to celebrate your achievements and motivate you during setbacks
        </p>

        <!-- <buttons> VIEW GUIDE </buttons> -->
      </div>
    </div>

    <div
      class="place-content-center bg-gray-800 md:p-8 p-1 box-border md:w-1/3 w-full"
    >
      <div
        class="place-content-center text-center space-y-8 hover:border-red-700 duration-1000 border-gray-800 border-4 p- hover:duration-900 hover:ease-in"
      >
        <span class="fa fa-lock text-red-700 text-6xl text-fold"></span>
        <h3 class="font-bold text-white text-sm">Continuous Progress Evaluation</h3>

        <p class="text-gray-400">
          Your progress is meticulously tracked through various assessments, such as body measurements, strength tests, and endurance assessments. Regular evaluations allow us to fine-tune your program and ensure that you consistently progress towards your goals.
        </p>

        <!-- <buttons> VIEW SCHEDULE </buttons> -->
      </div>
    </div>
  </div>

  <div
    class="w-full bg-fixed bg-center bg-no-repeat bg-cover md:h-auto h-[1600px]"
    style="
      background-image: linear-gradient(rgba(2, 0, 0, 0.5), rgba(2, 0, 0, 0.5)),
        url(/img/bg-programs.jpg);
    "
  >
    <div class="md:col-start-2 md:col-span-3 w-full  ">
      <h2 class="font-Poppins text-4xl text-center text-white pb-2 py-10">
        What We Offer
      </h2>

      <div class="flex justify-center ">
        <p
          class="text-center text-sm text-white md:col-start-2 md:col-span-4 md:w-4/12 w-full "
        >
        At VitFit, we offer comprehensive and personalized training programs designed to help you reach your desired outcomes efficiently and safely. Here are some key elements of our approach:
        </p>
      </div>
    </div>

    <div
      class=" grid md:grid-cols-4 w-full md:h-96 md:w-11/12 gap-8 px-5 mt-10 h-[900px] md:mx-12 mx-1 left-0 right-10 pb-10"
    >

    <div  v-for="link in Links"
        :key="link.title" class="bg-gray-900 opacity-80  trasiners relative border-4 border-transparent text-center md:p-5  h-[300px] md:h-[360px] space-y-10 hover:border-red-700 duration-1000 hover:border-4 z-10">
      <h2 class="font-bold p-5 text-center text-red-700">{{ link.title }}</h2>
      <p4 class="text-white text-sm">{{ link.message }}</p4>
    </div>
    </div>
  </div>

  <div class="w-full p-10 hidden">
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
          class="md:p py-5 text-[#f6f6f6] text-cente leading-10 text-sm w-full"
        >
          I understand it is not easy to come up with a detailed fitness and
          nutrition plan. This is why my team and I will take the hard work of
          your hands and help you develop a custom plan that suits your needs
          specifically. We are dedicated to your success in your fitness journey
          and we are here to support and motivate you to reach your goals.
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
          class="py-5 px-5 text-[#f6f6f6] text-cente leading-10 text-sm w-full md:w-full"
        >
          Being accountable is one of the most important parts of ones fitness
          journey. We all know life happens and you may lose motivation. This is
          why we are here, my team and I will make sure to always hold you
          accountable in order for you to stay on track with your fitness goals.
          We have come up with a simple yet effective formula that we use within
          our programs to make sure you are accountable at all times
        </p>

       
      </div>
    </div>
  </div>

  <div
    class="hidden w-full grid justify-items-center md:p-40 p-5 space-y-10"
    style="
      background-image: linear-gradient(rgba(2, 0, 0, 0.5), rgba(2, 0, 0, 0.5)),
        url(/img/slide-1.jpg);
    "
  >
    <p
      class="text-center text-white font-bold md:text-sm text-2xl md:w-7/12 md:leading-[80px] w-full py-5"
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
.modal{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top:0;
  left: 0;
  background-color: rgb(255, 255, 255,0.7);
  z-index: 50;
}

.modal-content{
  position: relative;
  max-width: 640px;
  widows: 80%;
  box-shadow: 0 4px 6px-1px rgba(0, 0, 0, 0.1);
background-color: white;
padding: 6px 16px;
}

</style>
