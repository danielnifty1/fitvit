<script setup lang="ts">
// import { ref } from "vue";/

</script>

<template>
  <div class="relative">
    <!-- <AppHeader /> -->

    <router-view name="NavBar"></router-view>
  
    <main>
      <div class="w-full bg-gray-900">
        <!-- <router-view name="dashheader" ></router-view> -->
        <notifications class="mt-x" />
        <router-view name="banner"></router-view> 
        <router-view />
      </div>
    </main>
    <!-- <AppFooter /> -->
    <router-view name="FooterPage"></router-view>
  </div>
</template>

<style scoped>
.mt-x {
  margin-top: 7%;
}
.vue-notification-template {
  padding-top: 15px !important;
  padding-bottom: 15px !important;
}
.notification-title {
  font-size: 14px !important;
}
.notification-content {
  font-size: 16px !important;
}
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
