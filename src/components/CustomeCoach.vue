<script setup lang="ts">
// import VuePhoneNumberInput from 'vue-phone-number-input';
import {ref, } from "vue";
import { reactive,  computed } from "vue";
import buttons from "../components/Buttons.vue";
import { useAuthStore } from "../core/store";
import useVuelidate from "@vuelidate/core";
const authStore = useAuthStore();

const disabled = ref(false);
import { useAuth } from "../composables/auth.composable";
import {
  required,
  helpers,

} from "@vuelidate/validators";

const userInfo = reactive({
  session_type: "",
  duration: "",
  title: "",
  doa: "",
 

  // email: "",
});
// const disabled = ref(false);
const loading = ref(false);

const store = useAuthStore();
const rules = computed(() => {
  return {
    session_type: {
      required: helpers.withMessage("Email address is required", required),
     
    },
    duration: {
      required: helpers.withMessage("Secret question  is required", required),
  
    },
    title: {
      required: helpers.withMessage("Secret answer  is required", required),
    },

  
    doa: {
      required: helpers.withMessage("Bitcoin address  is required", required),
    }
  };
});

const v$ = useVuelidate(rules as any, userInfo);
//define register method
const submitForm = async (): Promise<void> => {
  // check if form is formattted correctly
  const isFormCorrect = await v$.value.$validate();
  if (isFormCorrect == true) {
    disabled.value = true;
    const data = {
      session_type: v$.value.session_type.$model as string,
      duration: v$.value.Duration.$model as string,
    title: v$.value.Title.$model as string,
      doa: v$.value.Doa.$model as string,
      
    
    };

    const [error, success] = await useAuth(store.userAppointment(data), loading);
    if (success || error) {
      disabled.value = false;
    }
    if (success.value !== "") {
      //   redirect to the signin page
      setTimeout(() => {
        window.location.href = "/verify-email";
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
    note: "I Tell You The Best Workout Plan That Will Fit Your Goals",
  },
  { icon: "Home", note: "We Begin Your Fitness Challenge" },
];

var datez = new Date();
// console.log(datez);
console.log(datez.getFullYear());
console.log(datez.getMonth()+1);
var newmnt=datez.getMonth()+1;
console.log(datez.getDate());
var nowaday=datez.getFullYear()+"-"+"0"+newmnt+"-"+datez.getDate();
console.log(nowaday);

// 2023-06-18
// datez.getTimezoneOffset

// function formatDate(datez = new Date()) {
//   return [
//     datez.getFullYear(),
//     console.log(datez.getMonth() + 1),
//     console.log(datez.getDate()),
//   ].join('-');
// }
// const dateInput = document.getElementById('date');

// // ✅ Using the visitor's timezone
// dateInput.value = formatDate();

// console.log(formatDate());

// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }

// function formatDate(date = new Date()) {
//   return [
//     date.getFullYear(),
//     padTo2Digits(date.getMonth() + 1),
//     padTo2Digits(date.getDate()),
//   ].join('-');
// }

</script>

<template>
  <div class="flex place-content-center">
    <h2 class="text-4xl md:text-6xl font-bold py-10 mt-10 md:mt-0">
      <span class="text-white">PUSH</span
      ><span class="text-yellow-400"> YOURSELF</span>
    </h2>
  </div>

  <div class="grid  md:grid-cols-2 w-full h-auto md:p-10">
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

      <div class="flex justify-center ">
        <buttons class=""
          >Get started <span class="fa fa-arrow-right"></span
        ></buttons>
      </div>
    </div>
  </div>

  <div class="">
    <div>
        <p class="text-center text-2xl text-white font-bold">
        Get Fit With Our Online Coach
      </p>
      <p class="text-center font-bold text-red-900 pb-10">
        Book an Appointment Today
      </p>

    </div>
   
    <div class="grid grid-cols-2 w-full h-auto p-10 space-x-5">
      
    
      <div class="p-10 space shadow-md bg-gray-800 place-content-center rounded-2xl" style="background-image: url(./svg/effect-1-1.svg);">

        <h4 class="text-red-700 text-center font-bold text-4xl mb-10">Book an Appointment Today</h4>
        <form class="text-white"  @submit.prevent="submitForm"
            id="form"
            action="pro"
            method="post">
            <div class="mb-5">
                <label for="name" class="mb-3 block text-base font-medium text-white">
                    Session Type
                </label>

                <select name="name" id="name"  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" >
                <option>Virtual</option>
                </select>
                <!-- <input type="text"  placeholder="Full Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" /> -->
            </div>
            <div class="mb-5">
                <label for="phone" class="mb-3 block text-base font-medium text-white">
                   Duration
                </label>
                <select name="name" id="name"  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" >
                <option>30 minutes</option>
                <option>1 Hour</option>
                <option>1 Hour 30 minutes</option>
                <option>2 Hours (max)</option>
                </select>
            </div>
            <div class="mb-5">
                <label for="email" class="mb-3 block text-base font-medium text-white">
                    Title
                </label>
                <input type="" name="title" id="title" placeholder="Enter your title"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 ">
                    <div class="mb-5">
                        <label for="date" class="mb-3 block text-base font-medium text-white">
                            Date
                        </label>
                        
                        <input type="date" name="date" id="date" :min="nowaday"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <!-- <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="time" class="mb-3 block text-base font-medium text-white">
                            Time
                        </label>
                        <input type="time" name="time" id="time"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div> -->
            </div>

           

            <div>
                <button  v-if="authStore.isAuthenticated"
                    class="hover:shadow-form w-full rounded-md bg-[#6A64F1] hover:bg-[#423aef] duration-700 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                   Book Appointment
                </button>

                <div v-else  class="hover:shadow-form w-full rounded-md bg-red-700 hover:bg-[#423aef] duration-700 py-3 px-8 text-center text-base font-semibold text-white outline-none">

                
                <Router-link to="/login" >
                    Login First
                  </Router-link>

                </div>
            </div>
        </form>
      </div>

      <div class="w-full h-auto  ">
      <img src="/img/Image-1-1.png" class="w-full h-full rounded-2xl " />
    </div>
    </div>

   
  </div>
</template>
