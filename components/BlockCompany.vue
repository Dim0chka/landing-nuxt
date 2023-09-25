<template>
    <div id="company" class="overflow-hidden pt-24 sm:pt-32">
        <div class="mx-auto max-w-[1363px] md:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-[7rem] gap-y-16 lg:grid-cols-[2.315fr_1fr]">
                <div class="px-6 md:p-0">
                <h1 class="text-title text-white">ЦЕНИМ СЕРВИС, КОТОРЫЙ ПРЕВОСХОДИТ ОЖИДАНИЯ</h1>
                <p class="mt-[1.188rem] text-base-text text-white">
                    Приветствую! Меня зовут Анна, я основатель компании Development Architecture. Я получила инженерное образование в Государственном Университете по Землеустройству. Карьерный путь в сфере девелопмента начала в 2012 году с позиции инженера, а в 2015 стала руководителем департамента по проектированию и исходно-разрешительной документации в одной из строительной компании. В 2021 году приняла решение основать собственный бизнес. В чем помог полученный ранее опыт в области исходно-разрешительной документации. Активно сотрудничаю с крупными Заказчиками, создаю полноценные партнёрские отношения. Я старюсь ценить своё и Ваше время, поэтому научилась находить самые короткие и менее затратные пути решения поставленных задач.
                    <br>
                    <br>
                    <span class="mt-2" >Будем рады стать Вашим деловым партнёром!</span>
                </p>
                <div class="text-center mt-12 pt-[9px]">
                    <UI-TheBtn @click="store.open">
                    Связаться с руководителем
                    </UI-TheBtn>
                </div>
                </div>
                <img src="~/assets/img/photoService.webp" loading=“lazy” decoding=“async” class="h-192 object-cover w-full mx-auto" alt="">
            </div>
        </div>
    </div> 
</template>

<script setup>
import { useModalStore } from '~/store/modal'
import {ref, onMounted} from 'vue'

const store = useModalStore()

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

<style>
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
      transform: translateX(100px);
      -webkit-transform: translateX(200px);
      -moz-transform: translateY(200px);
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