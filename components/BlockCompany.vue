<template>
    <div id="company" class="overflow-hidden pt-24 sm:pt-32">
        <div class="mx-auto max-w-[1363px] md:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-[7rem] gap-y-16 lg:grid-cols-[2.315fr_1fr]">
                <div class="px-6 md:p-0">
                <h1 class="main-title text-title text-white">ЦЕНИМ СЕРВИС, КОТОРЫЙ ПРЕВОСХОДИТ ОЖИДАНИЯ</h1>
                <p class="main-title mt-[1.188rem] text-base-text text-white">
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
                <img src="~/assets/img/photoService.webp" loading=“lazy” decoding=“async” class="main-img h-192 object-cover w-full mx-auto" alt="">
            </div>
        </div>
    </div> 
</template>

<script setup>
import { useModalStore } from '~/store/modal'
import {ref, onMounted} from 'vue'

const store = useModalStore()

onMounted(() => {
  let delay = 0.2;
  const animatedElements = new Set(); // Создаем множество для отслеживания анимированных элементов

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedElements.has(entry.target)) {
          entry.target.style.animationDelay = `${delay}s`;
          entry.target.classList.add('animate-delay-title');
          delay += 0.2
          animatedElements.add(entry.target); // Добавляем элемент в множество после анимации
        }
      });
    },
    {
      threshold: 0.3,
    }
  );
  const observer2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedElements.has(entry.target)) {
          entry.target.style.animationDelay = `${0.2}s`;
          entry.target.classList.add('animate-delay-img');
          animatedElements.add(entry.target); // Добавляем элемент в множество после анимации
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  document.querySelectorAll('.main-title').forEach((item) => {
    observer.observe(item);
  });

  document.querySelectorAll('.main-img').forEach((item) => {
    observer2.observe(item);
  });
});
</script>

<style lang="scss" scoped>
.main-title {
  opacity: 0;
}

.animate-delay-title {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: animate-delay-title;
}

.animate-delay-img {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: animate-delay-img;
}

@keyframes animate-delay-title {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes animate-delay-img {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.main-img {
  opacity: 0;
}
</style>