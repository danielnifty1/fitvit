<script setup lang="ts">
// import buttons from "../components/Buttons.vue";
//   import { Collapse, Ripple, initTE } from "tw-elements";
import { reactive, ref, computed } from "vue";
// import { notify } from "@kyvg/vue3-notification";
import {  useRouter } from "vue-router";
import { useAuthStore } from "../core/store/index";
import useVuelidate from "@vuelidate/core";
import { required, numeric, helpers } from "@vuelidate/validators";
import { useAuth } from "../composables/auth.composable";
// instantiate router

// insitialize route
// const route = useRoute();
// initialize router
const router = useRouter();
// initialize store
const store = useAuthStore();

const userInfo = reactive({
  otp: "",
});
// const message = ref("ee223ee");
const disabled = ref(false);
const loading = ref(false);
// validations rule
const rules = computed(() => {
  return {
    otp: {
      required: helpers.withMessage("OTP is required", required),
      otp: helpers.withMessage("Must be Number", numeric),
    },
  };
});

const v$ = useVuelidate(rules as any, userInfo);
const submitForm = async (): Promise<void> => {
  // check if form is formattted correctly
  const isFormCorrect = await v$.value.$validate();
  if (isFormCorrect == true) {
  

    disabled.value = true;
    const data = {
      otp: v$.value.otp.$model as number,
    };
    loading.value = true;
    const [error, success] = await useAuth(store.verifyEmail(data), loading);
    if (success.value !== "") {
      //   redirect to the signin page
      setTimeout(() => {
        router.replace("/dashboard");
      }, 3000);
    }
    if (success || error) {
      disabled.value = false;
    }
    console.log(success.value);
    // loading.value = isLoading.value;
  }
};
</script>
<template>
  <section class="">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      style="
        background-image: linear-gradient(
            rgba(2, 0, 0, 0.5),
            rgba(2, 0, 0, 0.5)
          ),
          url(/img/slide-1.jpg);
      "
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-200 dark:text-white mt-20"
      >
        <img class="w-8 h-8 mr-2" src="/img/reh.png" alt="logo" />
        Vit Fit
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mt-10"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Verify Account
          </h1>
          <form
            @submit.prevent="submitForm"
            id="form"
            action="pro"
            method="post"
            class="space-y-4 md:space-y-6"
          >
            <div>
              <label
                for="otp"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Enter OTP</label
              >
              <input
                v-model="userInfo.otp"
                type="number"
                name="otp"
                id="otp"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter 6 digits Otp"
                required
              />
              <div v-if="v$.otp.$error" class="text-red-400">
                  {{ "* " + v$.otp.$errors[0].$message }}
                </div>
            </div>

            <div class="bg-red-700 hover:bg-red-500 hover:translate-x-1 duration-300 font-sm text-white rounded py-1.5  px-4">

            
            <button class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >VERIFY NOW <span v-if="loading" class="fa fa-spin fa fa-spinner"></span>

            </button>
          </div>
            <!-- <buttons
              class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >VERIFY NOW</buttons
            > -->

            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don't have an account?
              <router-link
                to="signup"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Register here</router-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
