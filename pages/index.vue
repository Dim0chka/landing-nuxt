<template>
  <div class="isolate">
      <video ref="myVideo" @loadedmetadata="updateVideoHeight" preload="metadata" controlsList="nodownload noplaybackrate norewind nofullscreen nostop" playsinline autoplay muted class="w-full h-auto max-w-full" loop controls>
        <source class="h-[100%]" src="~/assets/video/IMG_3597.mp4" type="video/mp4">
      </video>
  </div>

  {{ videoHeight }}

    <div class="isolate px-6 pt-14 lg:px-8">
        <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div class="text-center">
            <h1 class="main-title font-bold uppercase tracking-tight text-white text-title">DEVELOPMENT ARCHITECTURE</h1>
            <p class="main-title mt-6 uppercase text-base-text text-white">Скажи <span class="text-[#66FCF1]">DA</span>. Мы знаем, что делать! <br> Решаем <span class="text-[#66FCF1]">сложные вопросы</span> в сфере <span class="text-[#66FCF1]">градостроительства</span> и земельных правоотношений.</p>
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
import {ref, onMounted, onUpdated} from 'vue'

const myVideo = ref(null);
const videoHeight = ref(0); 

const updateVideoHeight = () => {
  const videoElement = myVideo.value;
  videoHeight.value = videoElement.videoHeight;
};


onMounted(() => {
  let delay = 0.2;
  const animatedElements = new Set(); // Создаем множество для отслеживания анимированных элементов

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedElements.has(entry.target)) {
          entry.target.style.animationDelay = `${delay}s`;
          entry.target.classList.add('animate-delay-title');
          delay += 0.2;
          animatedElements.add(entry.target); // Добавляем элемент в множество после анимации
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  document.querySelectorAll('.main-title').forEach((item) => {
    observer.observe(item);
  });
});

</script>

<style lang="scss" scoped>

video::-webkit-media-controls-enclosure {
  display:none !important;
}

video::-webkit-media-controls-stop-button {
  display: none;
}

.main-title {
  opacity: 0;
}

.animate-delay-title {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: animate-delay-title;
}

@keyframes animate-delay-title {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}


</style>