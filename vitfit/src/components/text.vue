<script setup lang="ts">
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    alert("ye");
    // document.getElementById("gen")!.style.display = "white";
    // document.getElementById("movetop")!.style.boxShadow = "2px 2px 2px #e3efef";
    // document.getElementById("movetop2")!.style.backgroundColor = "white";
    // document.getElementById("move2")!.style.backgroundColor = "white";
    // document.getElementById("movetop2")!.className =
    //   "fixed w-full shadow flex h-16 py-2 mt-3"; // Fade in

    document.getElementById("movetop")!.className =
      "shadow banner  hidden bg-red-500 sm:transparent lg:bg-transparent md:bg-transparent text-gray-100 fixed z-50 w-full text py-[17px] px-6 lg:flex justify-between items-center"; // Fade in
  } else {
    alert("no");
    // document.getElementById("movetop")!.style.backgroundColor = "transparent";
    // document.getElementById("movetop2")!.style.backgroundColor = "transparent";
    // document.getElementById("movetop")!.style.boxShadow = "none";
    // document.getElementById("move2")!.style.backgroundColor = "transparent";
    // document.getElementById("movetop2")!.className = "w-full  flex h-16 py-2 "; //

    // document.getElementById("movetop")!.className =
    //   "banner hidden bg-red-500 sm:transparent lg:bg-transparent md:bg-transparent text-gray-100 fixed z-50 w-full text py-[17px] px-6 lg:flex justify-between items-center"; // Fade in
  }
}

</script>

<template>
    <div class=" h-[1000px]  w-full">

    </div>
</template>