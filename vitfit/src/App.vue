<script setup lang="ts">
// import { ref } from "vue";/
</script>

<template>
  <div class="relative">
    <!-- <AppHeader /> -->

    <router-view name="NavBar"></router-view>
    <!-- <router-view name="banner"></router-view>  -->
    <main>
      <div class="w-full bg-gray-900">
        <!-- <router-view name="dashheader" ></router-view> -->

        <router-view />
      </div>
    </main>
    <!-- <AppFooter /> -->
    <router-view name="FooterPage"></router-view>
  </div>
</template>

<style scoped></style>
