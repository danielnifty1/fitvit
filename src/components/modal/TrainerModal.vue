<script lang="ts" setup >

</script>
<template>
    <transition name="modal-animation">

        <div  class="modal grid grid-cols-1 gap-4 place-items-center bordered">
               <transition name="modal-animation-inner ">
        <slot></slot>
        <!-- <button class="bg-red-400 w-fit p-2">close</button> -->
    </transition>
        </div>

    </transition>
    

  </template>

  <style lang="css" scoped>
  .modal-animation-enter-active,
  .modal-animation-leave-active {

    transition: opacity 0.3s cubic-bezier(0.52,0.02,0.19,1.02)

    
  }

  .modal-animation-enter-from,
  .modal-animation-leave-to{
    opacity: 0;
  }

  
.modal-animation-inner-enter-active{
  transition: all 0.3s cubic-bezier(0.52,0.02,0.19,1.02) 0.15
}

.modal-animation-inner-leave-active{
  transition: all 0.3s cubic-bezier(0.52,0.02,0.19,1.02) 0.15
}

.modal-animation-inner-enter-from{
 opacity: 0;
 transform: scale(0.8);
}

.modal-animation-inner-leave-to{
 opacity: 0;
 transform: scale(0.8);
}
</style>