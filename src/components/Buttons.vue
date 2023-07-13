<script setup lang="ts">
import {} from "vue"
const  props=defineProps<{route?:string}>()

</script>


<template>
   <div class="bg-red-700 hover:bg-red-500 hover:translate-x-1 duration-300 font-sm text-white rounded py-1.5  px-4">
   <router-link :to="props.route ? props.route :''" >
<slot></slot>
   </router-link>
</div>
</template>