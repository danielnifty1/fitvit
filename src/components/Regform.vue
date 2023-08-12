<script setup lang="ts">
import { reactive, ref, computed } from "vue";
// import { notify } from "@kyvg/vue3-notification";

import useVuelidate from "@vuelidate/core";


import { useAuth } from "../composables/auth.composable";
import {
  required,
  email,
  helpers,
  minLength,
 
  sameAs,
} from "@vuelidate/validators";
import { useAuthStore } from "../core/store/modules/store";

// instantiate router

// initialize route

// initialize store
const store = useAuthStore();
const disabled = ref(false);
// define user info

const userInfo = reactive({
  FirstName: "",
  LastName: "",
  email: "",
  linked: "",
  instagram: "",
  goals: "",
  coached: false,
  dob: "",
  password: "",
  confirmPassword: "",
  // email: "",
});

const loading = ref(false);
const validateName = () => {
  return /^[a-zA-Z]+$/.test(userInfo.FirstName);
};

// validations rule
const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage("Email address is required", required),
      email: helpers.withMessage("Must be a valid email", email),
    },
    goals: {
      required: helpers.withMessage("Secret question  is required", required),
  
    },
    coached: {
      required: helpers.withMessage("Secret answer  is required", required),
    },

  
    dob: {
      required: helpers.withMessage("Bitcoin address  is required", required),
    },
    FirstName: {
      required: helpers.withMessage("First Name is required", required),
      validateFirstName: helpers.withMessage(
        "First name can only include alphabets",
        validateName
      ),
      min: helpers.withMessage(
        "First name cannot be less than 2 characters",
        minLength(2)
      ),
    },
    LastName: {
      required: helpers.withMessage("First Name is required", required),
      validateFirstName: helpers.withMessage(
        "First name can only include alphabets",
        validateName
      ),
      min: helpers.withMessage(
        "First name cannot be less than 2 characters",
        minLength(2)
      ),
    },

    password: {
      required: helpers.withMessage("Password is required", required),
      min: helpers.withMessage(
        "Password cannot be less than 8 characters",
        minLength(8)
      ),
    },

    confirmPassword: {
      required: helpers.withMessage("Confirm Password is required", required),
      sameAs: helpers.withMessage(
        "Passwords do not match",
        sameAs(userInfo.password)
      ),
    },
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
      email: v$.value.email.$model as string,
      password: v$.value.password.$model as string,
      first_name: v$.value.FirstName.$model as string,
      last_name: v$.value.LastName.$model as string,
      goals: v$.value.goals.$model as string,
      coached: v$.value.coached.$model as boolean,
      dob: v$.value.dob.$model as string,
      linked: userInfo.linked,
      instagram: userInfo.instagram
    };

    const [error, success] = await useAuth(store.userRegister(data), loading);
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
</script>
<template>
  <section class="">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 md:p-80"
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
        class="flex items-center mb-6 text-2xl font-semibold text-gray-200 dark:text-white mt-[150px]"
      >
        
        Create an account
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 w-6/12 xl:p-0 dark:bg-gray-800 dark:border-gray-700 mt-[20px] mb-10"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <p
            class="text-center leading-tight tracking-tight text-gray-900 dark:text-white"
          >
            kindly fill the below form to get started with your custom coaching
          </p>
          <form
            @submit.prevent="submitForm"
            id="form"
            action="pro"
            method="post"
            class="space-y-4 md:space-y-6"
          >
           

            <div class="grid grid-rows-1 grid-flow-col gap-4">
              <div>
                <label
                  for="Linked"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >First Name</label
                >
                <input
                  type=""
                  name="FirstName"
                  id="FirstName"
                  placeholder="First name"
                  v-model="userInfo.FirstName"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div v-if="v$.FirstName.$error" class="text-red-600">
                  {{ "* " + v$.FirstName.$errors[0].$message }}
                </div>
              </div>
              <div>
                <label
                  for="instagram"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Last Name</label
                >
                <input
                  type=""
                  name="lastName"
                  id="lastname"
                  v-model="userInfo.LastName"
                  placeholder="last name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div v-if="v$.LastName.$error" class="text-red-600">
                  {{ "* " + v$.LastName.$errors[0].$message }}
                </div>
              </div>
            </div>

            <div>
              <label
                for="Email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >E-mail</label
              >
              <input
                type="email"
                name=""
                id="email"
                v-model="userInfo.email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="your@email.com"
              />
              <div v-if="v$.email.$error" class="text-red-600">
                {{ "* " + v$.email.$errors[0].$message }}
              </div>
            </div>

            <div class="grid grid-rows-1 grid-flow-col gap-4">
              <div>
                <label
                  for="Linked"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Linked Handle</label
                >
                <input
                  type=""
                  name="Linked"
                  id="Linked"
                  placeholder="Linked Handle"
                  v-model="userInfo.linked"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              
              </div>
              <div>
                <label
                  for="instagram"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Instagram Handle</label
                >
                <input
                  type=""
                  name="instagram"
                  id="instagram"
                  v-model="userInfo.instagram"
                  placeholder="Instagram Handle"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
               
                </div>
            </div>

            <div>
              <label
                for="instagram"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >What are your short, medium and long term goals for your
                physique (3 month, 6 month, 12 month)</label
              >

              <textarea
                name="goal"
                id="goal"
                v-model="userInfo.goals"
                placeholder="What are your short, medium and long term goals for your physique (3 month, 6 month, 12 month)"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>

              <div v-if="v$.goals.$error" class="text-red-600">
                {{ "* " + v$.goals.$errors[0].$message }}
              </div>
            </div>

            <div class="md:grid md:grid-rows-1 grid-flow-col gap-4">
              <div>
                <label
                  for="Linked"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Have you received professional coaching before?</label
                >

                <select
                  name="couching"
                  id="couching"
                  v-model ="userInfo.coached"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option :value=true>Yes</option>
                  <option :value=false>No</option>
                </select>
                <div v-if="v$.coached.$error" class="text-red-600">
                  {{ "* " + v$.coached.$errors[0].$message }}
                </div>
              </div>


              <div class="">
                <label
                  for="instagram"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >D.O.B</label
                >
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  v-model="userInfo.dob"
                  placeholder="Instagram Handle"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div v-if="v$.dob.$error" class="text-red-600">
                  {{ "* " + v$.dob.$errors[0].$message }}
                </div>
              </div>


            </div>

            <div class="grid grid-rows-1 grid-flow-col gap-4">
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Password</label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  v-model="userInfo.password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div v-if="v$.password.$error" class="text-red-600">
                  {{ "* " + v$.password.$errors[0].$message }}
                </div>
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Confirm password</label
                >
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  v-model="userInfo.confirmPassword"
                
                class="bg-gray-50 border border-gray-300 text-gray-900
                sm:text-sm rounded-lg focus:ring-primary-600
                focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <div v-if="v$.confirmPassword.$error" class="text-red-600">
                  {{ "* " + v$.confirmPassword.$errors[0].$message }}
                </div>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                />
              </div>
              <div class="ml-3 text-sm">
                <label
                  for="terms"
                  class="font-light text-gray-500 dark:text-gray-300"
                  >I accept the
                  <a
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                    >Terms and Conditions</a
                  ></label
                >
              </div>
            </div>
            <button
              class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800
              bg-red-700 hover:bg-red-500 hover:translate-x-1 duration-300 font-sm text-white rounded py-1.5  px-4
              "
              >REGISTER <span v-if="loading" class="fa fa-spin fa fa-spinner"></span></button
            >
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?
              <router-link
                to="login"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Login here</router-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
