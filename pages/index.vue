<template>
  <button
      class="fixed bottom-4 right-4 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full"
      @click="scrollToTop"
      v-show="showButton"
    >
      Наверх
    </button>
    <div  class="isolate px-6 pt-14 lg:px-8">
        <div class="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
          <div class="text-center">
            <h1 class=" font-bold tracking-tight text-white sm:text-title">DEVELOPMENT ARCHITECTURE</h1>
            <p class="mt-6 text-base-text text-white">Скажи <span class="text-brand-color">DA</span>. Мы знаем, что делать! <br> Решаем <span class="text-brand-color">сложные вопросы</span> в сфере <span class="text-brand-color">градостроительства</span> и земельных правоотношений.</p>
          </div>
        </div>
    </div>
    <div class="bg-moscow-pattern w-full bg-no-repeat bg-cover  py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
                <hr class="h-0.5 bg-brand-color border-0 dark:bg-brand-color">
                <dt class="text-xl leading-7 text-white">{{ stat.name }}</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-6xl">{{ stat.value }}</dd>
            </div>
            </dl>
        </div>
    </div>
    <div class="overflow-hidden pt-24 sm:pt-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-4 gap-y-16 lg:grid-cols-[2.234fr_1fr]">
              <div class="">
                <h1 class="text-title text-white">ЦЕНИМ СЕРВИС, КОТОРЫЙ ПРЕВОСХОДИТ ОЖИДАНИЯ</h1>
                <p class="mt-[2.188rem] text-base-text text-white">
                    Приветствую! Меня зовут Анна, я основатель компании Development 
                    Architecture. Более 10 лет развиваю бизнес в направлении получения 
                    исходно-разрешительной документации. Активно сотрудничаем с 
                    крупными Заказчиками, создавая полноценные партнёрские отношения. 
                    Мы ценим своё и Ваше время, поэтому научились находить самые короткие 
                    и менее затратные пути решения поставленных задач. 
                    <br>
                    <br>
                    <span class="mt-2 text-brand-color" >Будем рады стать Вашим деловым партнёром!</span>
                </p>
                <div class="text-center mt-10">
                    <a href="#" class="rounded-full bg-inherit border-2 border-brand-color px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-brand-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-color">Связаться с руководителем</a>
                </div>
              </div>
            <img src="~/assets/img/photoService.jpg" class="h-192 object-cover w-full mx-auto" alt="">
          </div>
        </div>
      </div>

     <div class="overflow-hidden mb-20 py-16 sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <Carousel :itemsToShow="3" :wrapAround="true" :transition="500">
                <Slide v-for="slide in carusel" :key="slide.id">
                  <div :class="slide.img" class="flex items-center font-bold p-6 bg-no-repeat bg-cover justify-center rounded-xl text-base w-full min-h-[400px] carousel__item">
                    <h1 class="text-3xl/8 font-sfemibold  text-white">{{ slide.title }}</h1> 
                </div>
                </Slide>
                <template #addons>
                    <Navigation />
                  </template>
              </Carousel>
        </div>
    </div>
    <div class="bg-layout-pattern w-full bg-no-repeat bg-cover py-16 sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-4 items-center gap-y-16 text-center lg:grid-cols-2">
                <div class="grid gap-y-6 md:grid-cols-1 text-left max-w-xl">
                    <h1 class="text-center text-5xl font-bold tracking-tight text-white sm:text-2xl">DEVELOPMENT ARCHITECTURE</h1>
                    <p class="text-white sm:text-2xl/6">
                        Мы знаем, как в кратчайшие сроки подготовить
                        необходимую техническую документацию, с учётом всех 
                        необходимых требований.
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-y-4 w-full">
                    <h1 class="text-left text-white text-base">я хочу обратиться по такому вопросу</h1>
                    <TheForm/>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>
import { ref } from 'vue'
import {useScroll} from '@/features/scroll.js'

const stats = [
  {id: 1, name: 'реализованных проектов', value: '1000'},
  {id: 2, name: 'кв. м. оформленных объектов', value: '50 000'},
  {id: 3, name: 'удачно завершенных дел', value: '99%'},
  {id: 4, name: 'довольных клиентов', value: '500'}
]

const carusel = [
  {id: 1, img: 'bg-field1-pattern', title: 'Постановка на кадастровый учет объекта и регистрация права в Росреестре'},
  {id: 2, img: 'bg-field2-pattern', title: 'Внесение изменений в правила землепользования и застройки'},
  {id: 3, img: 'bg-field3-pattern', title: 'Разрешение на строительство'}
]

const {showButton, scrollToTop} = useScroll()

</script>

<style lang="scss">
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  background-color: #45A29E;
  border-radius: 50%;

  svg {
    color: #66FCF1
  }
}

.carousel__prev {
    left: -8px;
}

.carousel__next {
    right: -8px;
}

.carousel__slide {
    padding: 5px;
  }
  
  .carousel__viewport {
    perspective: 2000px;
  }
  
  .carousel__track {
    transform-style: preserve-3d;
  }
  
  .carousel__slide--sliding {
    transition: 0.5s;
  }
  
  .carousel__slide {
    opacity: 0.9;
    transform: scale(0.95);
  }
  
  .carousel__slide--active ~ .carousel__slide {
    transform:  scale(0.95);
  }
  
  .carousel__slide--prev {
    opacity: 1;
    transform: scale(0.95);
  }
  
  .carousel__slide--next {
    opacity: 1;
    transform: scale(0.95);
  }
  
  .carousel__slide--active {
    opacity: 1;
    transform: scale(1);
  }
</style>