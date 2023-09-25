<template>
  <div class="isolate pt-[100px]">
      <video preload="metadata" controlsList="nodownload noplaybackrate norewind nofullscreen nostop" playsinline autoplay muted class="w-full h-auto max-w-full" loop controls>
        <source class="h-[100%]" src="~/assets/video/IMG_3597.mp4" type="video/mp4">
      </video>
  </div>

    <div class="isolate px-6 pt-14 lg:px-8">
        <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div class="text-center">
            <h1 class="font-bold uppercase tracking-tight text-white text-title">DEVELOPMENT ARCHITECTURE</h1>
            <p class="mt-6 uppercase text-base-text text-white">Скажи <span class="text-[#66FCF1]">DA</span>. Мы знаем, что делать! <br> Решаем <span class="text-[#66FCF1]">сложные вопросы</span> в сфере <span class="text-[#66FCF1]">градостроительства</span> и земельных правоотношений.</p>
          </div>
        </div>
    </div>

    <BlockMoscow/>

    <BlockCompany/>

    <BlockServise/>

    <BlockLayoutOne/>
    <BlockProject/>
    <BlockLayoutTwo/>

    <BlockTrust/>
    
</template>

<script setup>
import {ref, onMounted} from 'vue'

// onMounted(() => {
//   let delay = 0.2;

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.style.animationDelay = `${delay}s`;
//           entry.target.classList.add('animate-delay');
//           delay += 0.2; // increment the delay for each element
//         }
//       });
//     },
//     {
//       threshold: 0.5,
//       once: true
//     }
//   );

//   document.querySelectorAll('.demo').forEach((item) => {
//     observer.observe(item);
//   });
// })

</script>

<style lang="scss" scoped>

video::-webkit-media-controls-enclosure {
  display:none !important;
}

video::-webkit-media-controls-stop-button {
  display: none;
}

.wrapper {
  flex-grow: 1;
  font-size: 24px;
  height: 100vh;
}

.demo {
  opacity: 0;
  transform: translateY(10px);
  -webkit-transform: translateY(20px);
  -moz-transform: translateY(20px);
  -ms-transform: translateY(20px);
  -o-transform: translateY(20px);
}

.animate-delay {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: animate-delay;
}

@keyframes animate-delay {
  0% {
    opacity: 0;
    transform: translateY(10px);
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
  }
}


</style>