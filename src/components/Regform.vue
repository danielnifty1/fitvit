<script setup lang="ts">
// import { reactive} from 'vue'
import buttons from "../components/Buttons.vue";

// import { Collapse, Ripple, initTE } from "tw-elements";

// document.getElementById('name').disabled = true  ;


const checkbox = document.getElementById(
  'terms',
) as HTMLInputElement | null;

if (checkbox != null) {
  // ✅ Set checkbox checked
  // checkbox.checked = true;
  console.log("yes");

  // ✅ Set checkbox unchecked
  // checkbox.checked = false;
}
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
        <img class="w-8 h-8 mr-2" src="/img/reh.png" alt="logo" />
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
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Full name</label
              >
              <input
                type=""
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="your name"
              />
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
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="your@email.com"
              />
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
                placeholder="What are your short, medium and long term goals for your physique (3 month, 6 month, 12 month)"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>
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
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div class="py-5">
                <label
                  for="instagram"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >D.O.B</label
                >
                <input
                  type="date"
                  name="instagram"
                  id="instagram"
                  placeholder="Instagram Handle"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
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
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
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
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
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
            <buttons
              class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >Signup</buttons
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
