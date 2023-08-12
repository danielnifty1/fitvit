<script setup lang="ts">
//   import { Collapse, Ripple, initTE } from "tw-elements";
import { reactive, ref, computed } from "vue";
// import { notify } from "@kyvg/vue3-notification";
// import { useRouter } from "vue-router";
import { useAuthStore } from "../core/store/index";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import { useAuth } from "../composables/auth.composable";
// import { useAuth } from "../composables/auth.composable";
// instantiate router


// initialize router
// const router = useRouter();
// initialize store
const store = useAuthStore();

const ClientInfo = reactive({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",

});
// const message = ref("ee223ee");
const disabled = ref(false);
const loading = ref(false);

// validations rule
const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage("Name address is required", required),
    
    },
    email: {
      required: helpers.withMessage("Email address is required", required),
      email: helpers.withMessage("Must be a valid email", email),
    },
    subject: {
      required: helpers.withMessage("subject address is required", required),
    
    },

    message: {
      required: helpers.withMessage("subject address is required", required),
    
    },

 
  };
});
const v$ = useVuelidate(rules as any, ClientInfo);

const submitForm = async (): Promise<void> => {
  
  // check if form is formattted correctly
  const isFormCorrect = await v$.value.$validate();

  if (isFormCorrect == true) {
    alert("res");
    disabled.value = true;
    const Clientdata = {
      name: v$.value.name.$model as string,

      email: v$.value.email.$model as string,
      phone:   parseInt( ClientInfo.phone),

    
      message: v$.value.message.$model as string,
      subject: v$.value.subject.$model as string,
      

    };
    loading.value = true;
      const [error, success]  = await useAuth(
        
      store.contactUs(Clientdata),
       loading
      );
    if (success || error) {
      disabled.value = false;

      // console.log(error)
    }
    if (success.value !== "") {
      //   redirect to the signin page
      setTimeout(() => {

        // let prev =router.options.history.state.back
        //  prev !== "/signup" ? router.go(-1):router.replace("/home");
      }, 2000);
    }

    if (
      error &&
      error.value.data &&
      error.value.data.Error === "Your email isnt verified yet"
    ) 
    
    {
      setTimeout(() => {
        // router.replace("/verify-email");
      }, 4000);
    }
//  console.log(data);
    // loading.value = isLoading.value;
  }
};

</script>

<template>
  <div
    class="md:p-10 p-2 grid md:grid-cols-2 md:space-x-10 space-y-10 md:space-y-0"
  >
    <div class="md:p-10 md:pl-10 space-y-10">
      <div class="w-full md:pl-10 space-y-2">
        <h3
          class="text-2xl md:text-3xl md:w-full pl-2 md:pl-0 pr-2 md:pr-0 font-bold text-yellow-400"
        >
          DO YOU HAVE QUESTIONS ABOUT SPECIFIC TRAINING COURSES,
        </h3>

        <h3 class="text-2xl md:text-3xl font-bold text-gray-400">
          THE CENTER OR THE TEAM?
        </h3>
      </div>
      <div class="w-full pl-1 md:pl-10 space-y-10">
        <span class="font-bold text-gray-400"
          >Kindly reach out to us. We are waiting hear from you. call or email us or simply fill the form and we will attend to you. Stay Fit</span
        >

        <div class="space-y-10">
          <div class="flex">
            <span class="border border-yellow-400 p-3">
              <i class="fa fa-phone text-white"></i>
            </span>
            <span class="p-3 text-gray-400">+1 203-123-0606</span>
          </div>

          <div class="flex">
            <span class="border border-yellow-400 p-3">
              <i class="fa fa-envelope text-white"></i>
            </span>
            <span class="p-3 text-gray-400">info@the-gym.com</span>
          </div>

          <div class="flex">
            <span class="border border-yellow-400 p-3">
              <i class="fa fa-globe text-white"></i>
            </span>
            <span class="ml-2 w-80 text-gray-400"
              >0665 Broadway NY, New York 10001 United States of America</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="md:p-10 space-y-10">
      <div>
        <h3 class="font-bold text-3xl text-gray-400">GET IN TOUCH</h3>
      </div>

      <div class="bg-gray-800 w-[350px] md:w-full ml-2 md:ml-0 ">
        <form  @submit.prevent="submitForm"
            id="form" class="md:p-10 space-y-10 p-5">
          <div class="grid space-y-1">
            <label class="text-gray-400"
              >Name <span class="text-red-400">*</span></label
            >
            <input  v-model="ClientInfo.name" type="text" name="name" />
            <div v-if="v$.name.$error" class="text-red-400">
              {{ "* " + v$.name.$errors[0].$message }}
            </div>
          </div>
         

          <div class="md:flex md:space-x-1 space-y-5 md:space-y-0 w-full">
            <div class="grid w-ful]l">
              <label class="text-gray-400"
                >Email <span class="text-red-400">*</span></label
              >
              <input  v-model="ClientInfo.email" type="email" name="name" />
             
            </div>

            <div class="grid w-fll">
              <label class="text-gray-400"
                >Phone <span class="text-red-400">*</span></label
              >
              <input class="w-full" v-model="ClientInfo.phone" type="number" name="name" />
            
            </div>
            
          </div>
          <div v-if="v$.email.$error" class="text-red-400">
              {{ "* " + v$.email.$errors[0].$message }}
            </div>

          <div class="grid space-y-1">
            <label class="text-gray-400"
              >Subject <span class="text-red-400">*</span></label
            >
            <input v-model="ClientInfo.subject" type="text" name="name" />
            <div v-if="v$.subject.$error" class="text-red-400">
              {{ "* " + v$.subject.$errors[0].$message }}
            </div>
          </div>

          <div class="grid space-y-1">
            <label class="text-gray-400"
              >Message <span class="text-red-400">*</span></label
            >
            <textarea v-model="ClientInfo.message" name="message"></textarea>
            <div v-if="v$.message.$error" class="text-red-400">
              {{ "* " + v$.message.$errors[0].$message }}
            </div>
          </div>

          <button
              class="spinner-border spinner-border-sm w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-red-700 hover:bg-red-500 hover:translate-x-1 duration-300 font-sm text-white rounded py-1.5 px-4"
            >
              Send
              <span v-if="loading" class="fa fa-spin fa fa-spinner"></span>
            </button>
        </form>
      </div>
    </div>
  </div>
</template>
