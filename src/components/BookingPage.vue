<script setup lang="ts">
// import VuePhoneNumberInput from 'vue-phone-number-input';
import { ref } from "vue";
import { reactive, computed } from "vue";
import { useRoute } from "vue-router";
import buttons from "../components/Buttons.vue";
import { useAuthStore } from "../core/store";
import useVuelidate from "@vuelidate/core";
import * as programs from "../static_data/programs.json";
// import initCalender from "../utils/date_helper";

// initializ route
const route = useRoute();

const authStore = useAuthStore();

const disabled = ref(false);
import { useAuth } from "../composables/auth.composable";
import { required, helpers } from "@vuelidate/validators";

const bookingInfo = reactive({
  session_type: "",
  duration: "",
  title: "",
  appointment_time: "", // email: "",
});

// const disabled = ref(false);
const loading = ref(false);

const store = useAuthStore();

const aboutTheProgram = computed(() => {
  return programs.data.filter((program) => {
    if (program.id == (route.query.program as any)) {
      return program;
    }
  });
});


const rules = computed(() => {
  return {
    session_type: {
      required: helpers.withMessage("Select atleast one session", required),
    },
    duration: {
      required: helpers.withMessage("Duration  is required", required),
    },
    // title: {
    //   required: helpers.withMessage("Title  is required also", required),
    // },

    // appointment_time: {
    //   required: helpers.withMessage("Choose Appointment Date", required),
    // },
  };
});

const v$ = useVuelidate(rules as any, bookingInfo);

//define register method

const submitForm = async (): Promise<void> => {
  // check if form is formattted correctly
  let theDate = document.getElementById("calender") as HTMLInputElement;
  let formatedDate = new Date(theDate?.value);
  let year = formatedDate.getFullYear();
  let month = formatedDate.getMonth() + 1;
  let day = formatedDate.getDate();
  let dateObj = { year, month, day };
  // console.log(dateObj);
  const isFormCorrect = await v$.value.$validate();
  if (isFormCorrect == true) {
    disabled.value = true;
    const total_Duration=parseInt(v$.value.duration.$model)/30;
    const total_amount=aboutTheProgram.value[0].cost*total_Duration;
    const data = {
      session_type: v$.value.session_type.$model as string,
      duration: parseInt(v$.value.duration.$model),
      title: aboutTheProgram.value[0].title,
      appointment_time: dateObj,
      total_duration:total_Duration,
      total_amount:total_amount
    };


    // console.log(paymentData); 
    const [error, success] = await useAuth(
      store.userAppointment(data),
      
      loading
    );
    if (success || error ) {
      disabled.value = false;
      console.log(error);
    }
    if (success.value !== "") {
    console.log("return data is "+  success.value)
    window.location.href = success.value;
      
      // store.userPayForAppointment(paymentData),

      //   redirect to the signin page
      setTimeout(() => {
        // store.userPayForAppointment(paymentData);
      }, 3000);
    }
  }
};

let coach = [
  { icon: "Home", note: "Apply For Coaching" },
  { icon: "Home", note: "Book Your Session" },
  {
    icon: "Home",
    note: "During Your Session We Will Discuss Your Main Fitness Goals And What You Want To Achieve With Your Workouts",
  },
  {
    icon: "Home",
    note: "I Will Tell You The Best Workout Plan That Will Fit Your Goals",
  },
  { icon: "Home", note: "We Begin Your Fitness Challenge" },
];

// onMounted(() => {
//   initCalender();
// });
</script>

<template>
  <div class="flex place-content-center">
    <h2 class="text-4xl md:text-6xl font-bold py-10 mt-10 md:mt-0">
      <span class="text-white">PUSH</span
      ><span class="text-yellow-400"> YOURSELF</span>
    </h2>
  </div>

  <div class="grid md:grid-cols-2 w-full h-auto md:p-10">
    <div class="w-full h-auto p-10">
      <img src="/img/Image-1-1.png" class="w-full h-full rounded-3xl" />
    </div>

    <div class="md:p-10 w-full">
      <div class="p-8 flex gap-2" v-for="link in coach" :key="link.icon">
        <div class="">
          <span class="border p-5 rounded-md"
            ><span class="fa fa-file text-white text-2xl"></span
          ></span>
        </div>
        <h4 class="text-white text-[15px] text-justify">{{ link.note }}</h4>
      </div>

      <div class="flex justify-center">
        <!-- <buttons class=""
          >Get started <span class="fa fa-arrow-right"></span
        ></buttons> -->
      </div>
    </div>
  </div>

  <div class="mt-10 md:mt-0">
    <div>
      <p class="text-center text-2xl text-white font-bold">
        Get Fit With Our Online Coach
      </p>
      <p class="text-center font-bold text-red-900 md:pb-10 pb-0">
        Book an Appointment Today
      </p>
    </div>

    <div class="grid md:grid-cols-2 grid-cols-1 w-full h-auto p-10 space-x-5">
      <div
        class="p-2 md:p-10 space shadow-md bg-gray-800 place-content-center rounded-2xl"
        style="background-image: url(./svg/effect-1-1.svg)"
      >
        <h4
          class="text-red-700 text-center font-bold md:text-4xl text-1xl mb-10"
        >
          Book an Appointment Today
        </h4>
        <form
          class="text-white"
          @submit.prevent="submitForm"
          id="form"
          action="pro"
          method="post"
        >
          <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base font-medium text-white"
            >
              Session Type
            </label>

            <select
              v-model="bookingInfo.session_type"
              name="name"
              id="name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="VIRTUAL">VIRTUAL</option>
              <option value="PHYSICAL">PHYSICAL</option>
            </select>
            <div v-if="v$.session_type.$error" class="text-red-400">
              {{ "* " + v$.session_type.$errors[0].$message }}
            </div>
          </div>
          <div class="mb-5">
            <label
              for="phone"
              class="mb-3 block text-base font-medium text-white"
            >
              Duration
            </label>
            <select
              v-model="bookingInfo.duration"
              name="name"
              id="name"
            
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="30">30 minutes</option>
              <option value="60">1 Hour</option>
              <option value="90">1 Hour 30 minutes</option>
              <option value="120">2 Hours (max)</option>
            </select>
            <div v-if="v$.duration.$error" class="text-red-400">
              {{ "* " + v$.duration.$errors[0].$message }}
            </div>
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-white"
            >
              Title
            </label>
            <input
              type=""
              v-model="aboutTheProgram[0].title"
              name="title"
              id="title"
              disabled
              placeholder="Enter your title"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            <!-- <div v-if="v$.title.$error" class="text-red-400">
              {{ "* " + v$.title.$errors[0].$message }}
            </div> -->
          </div>

          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3">
              <div class="mb-5">
                <label
                  for="date"
                  class="mb-3 block text-base font-medium text-white"
                >
                  Date
                </label>
                
                <input
                  v-model="bookingInfo.appointment_time"
                  type="date"
                  placeholder="2023-08-24"
                  name="appointment_time"
                  autocomplete="none"
                  id="calendar"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                <!-- {{ bookingInfo.appointment_time }} -->

                <!-- <div v-if="v$.appointment_time.$error" class="text-red-400">
                  {{ "* " + v$.appointment_time.$errors[0].$message }}
                </div> -->
              </div>
            </div>
          </div>

          <div>
            <button
              v-if="authStore.isAuthenticated"
              class="hover:shadow-form w-full rounded-md bg-[#6A64F1] hover:bg-[#423aef] duration-700 py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Book Appointment <i v-if="loading" class="fa fa-spin fa-spinner"></i>
            </button>

            <div
              v-else
              class="hover:shadow-form w-full rounded-md bg-red-700 hover:bg-[#423aef] duration-700 py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              <Router-link to="/login"> Login First </Router-link>
            </div>
          </div>
        </form>
      </div>

      <div class="w-full h-auto hidden md:block  bg-gray-800 p-5 ">
        <div class="">
          <h2 class="font-bold text-red-800 text-center text-2xl underline">
          {{ aboutTheProgram[0].title }}

          </h2>
        </div>

        <div class=" left-1 w-full top-[20px] mt-10">
          <p class="text-white text-sm text-justify leading-10">{{ aboutTheProgram[0].note }}</p>
        </div>
        <div class="" style="overflow: hidden;">
          <img :src="aboutTheProgram[0].bimg"  class="rounded-2xl hover:p-5 hover:-translate-y-6 delay-100 duration-1000">
       
        </div>
      </div>
    </div>
  </div>
</template>
