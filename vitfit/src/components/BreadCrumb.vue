<script lang="ts" setup >
import {useRoute} from "vue-router";
const route=useRoute();
console.log(route.name)
</script>

<template>
    <div
    class="grid md:h-[300px] h-[400px] bg-cover bg-center bg-no-repeat content-center"
    style="background-image: linear-gradient(rgba(2, 0, 0, 0.5), rgba(2, 0, 0, 0.5)),
        url(/img/slide-1.jpg);
    "
  >
    <div class="flex place-content-center">
      <h5 class="text-1xl md:text-3xl font-bold py-10 text-white mt-10">
        {{ route.name }}
      </h5>

    
    </div>
<!-- 
    <div
      class="grid md:grid-cols-4 z-10 gap-6 w-full p-2 md:py-10 mt-20 justify-center place-content-center "
    >
      <p
        class="text-center text-white p-4 md:p-5 bg-gray-900 md:opacity-80 md:col-start-2 md:col-span-4 md:w-7/12 w-full"
      >
        Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi
        dolor dolor, auctor tincidunt lorem ut, venenatis dapibus mi. Nunc
        venenatis sollicitudin nisl vel auctor.
      </p>
    </div> -->
  </div>
</template>