<template>
    <div id="project" class="grid w-full grid-cols-[repeat(auto-fill,_100%)] lg:grid-cols-[repeat(auto-fill,_33%)] md:grid-cols-[repeat(auto-fill,_50%)]">
        <div v-for="photo in img" @click="showImg(photo.id)" :key="photo.id" @mouseenter="photo.active = true" @mouseleave="photo.active = false" class="item cursor-pointer flex justify-center items-end flex-shrink-0 w-auto h-[480px] overflow-hidden relative">
          <div :class="photo.img" class="item-img w-full h-full from-transparent bg-center bg-cover transition-all duration-1000"></div>
          <transition name="fade" mode="out-in">
            <h1 v-show="photo.active" class="absolute p-[1.969rem_2.906rem] text-base-text uppercase">{{ photo.name }}</h1>
          </transition>
        </div>

        <!-- <div v-for="photo in img" :key="photo.id" :class="photo.img"  @click="showImg(photo.id)" class="cursor-pointer grayscale hover:grayscale-0 h-[480px] bg-no-repeat bg-cover flex justify-start items-end p-[1.969rem_2.906rem] uppercase text-[0px] hover:text-base-text">
          <h1>{{ photo.name }}</h1>
        </div> -->
    </div>
  
      <TheModal v-model:open="openSecond">
        <DialogPanel class="relative transform rounded-lg text-left shadow-xl transition-all sm:my-8 max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[73.75rem]">
          <Carousel class="outline-none" v-model="imgId" :itemsToShow="1" :wrapAround="true" :transition="500">
            <Slide v-for="slide in img" :key="slide.id">
                <div class="bg-white grid grid-cols-1 gap-y-[1rem] sm:gap-y-[2rem] h-[100%] lg:flex lg:flex-row rounded-xl w-full p-[2rem] sm:p-[2.5rem] md:p-[2rem] lg:p-[66px_45px_82px_45px] max-w-full">
                  <button @click="openSecond = false" type="button" class="text-[#44A29E] absolute top-3 right-2.5 bg-transparent hover:bg-[#44A29E] hover:text-white rounded-lg text-btn w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                 </button>
                    <div class="flex justify-center items-center">
                        <div class="rounded-xl md:h-[500px] w-[250px] h-[250px] lg:h-[450px] sm:h-[400px] sm:w-[400px] md:w-[500px] lg:w-[450px] flex-none bg-cover text-center overflow-hidden" :class="slide.img" title="Woman holding a mug"></div>
                    </div>
                    <div class="bg-white lg:pl-[27px] flex flex-col">
                        <div class="text-black font-bold text-[1.1rem] uppercase sm:text-title-carusel mb-[1.6rem]">{{ slide.name }}</div>
                        <div class="grid grid-cols-1 gap-y-[10px] text-left text-black">
                          <span>
                            Объект: {{ slide.body.obj }}
                          </span>
                          <span>
                            Вид работ: {{ slide.body.work }}
                          </span>
                          <span>
                            Адрес: {{ slide.body.adress }}
                          </span>
                          <span>
                            Статус: Проект реализован.
                          </span>
                        </div>
                    </div>
                </div>
            </Slide>
            <template #addons>
                <Navigation/>
            </template>
        </Carousel>
        </DialogPanel>
      </TheModal>
</template>

<script setup>
import {ref} from 'vue'
import { DialogPanel } from '@headlessui/vue'

const hov = ref(false)

const openSecond = ref(false)
const imgId = ref(null)

const img = ref([
  {id: 1, active: false, img: 'bg-photo1', name: 'ГАРАЖНЫЙ КОМПЛЕКС ул.Борисовские Пруды', body: {obj: 'Нежилое здание', work: 'Разрешение на строительство', adress: 'г. Москва, внутригоробское муниципальное образование Москворечье-Сабурово ул. Борисовские прубы, вл. 5А'} },
  {id: 2, active: false, img: 'bg-photo2', name: 'Общежитие Университета нефти и газа имени И.М. Губкина', body: {obj: 'Нежилое здание', work: 'Разрешение на строительство', adress: 'г. Москва, ул. Бутлерова, вл. 1, 3, 5, 5Б (ЮЗАО, Коньково)'} },
  {id: 3, active: false, img: 'bg-photo3', name: 'МАГАЗИН СЕВЕРНОЕ БУТОВО БУЛЬВАР ДМИТРИЯ ДОНСКОГО', body: {obj: 'Нежилое здание', work: 'Разрешение на строительство', adress: 'г. Москва, пересечение ул. Бульвар Дмитрия Донского и ул. Академика Глушко (ЮЗАО, Северное Бутово)'} },
  {id: 4, active: false, img: 'bg-photo4', name: 'КУЛЬТУРНО-ДОСУГОВЫЙ КОМПЛЕКС МИТИНО УЛ.ДУБРАВНАЯ', body: {obj: 'Нежилое здание', work: 'Разрешение на строительство и разрешение на ввод объекта', adress: 'г. Москва, ул. Дубравная д.33'} },
  {id: 5, active: false, img: 'bg-photo5', name: 'СПОРТИВНЫЙ КОМПЛЕКС ЖУЛЕБИНО МКР.6', body: {obj: 'Нежилое здание', work: 'Разрешение на строительство', adress: 'г. Москва, Жулебино, мкр. 6, корп. 18 (ЮВАО, Выхино-Жулебино)'}},
  {id: 6, active: false, img: 'bg-photo6', name: 'СПОРТИВНЫЙ КОМПЛЕКС ПОСЕЛОК КИЕВСКИЙ', body: {obj: 'Нежилое здание', work: 'Разрешение на строительство', adress: 'г. Москва, поселение Киевский, пос. Киевский, рядом с домом № 25'} },
  {id: 7, active: false, img: 'bg-photo7', name: 'ТОРГОВЫЙ КОМПЛЕКС Г.ПОДОЛЬСК', body: {obj: 'Нежилое здание', work: 'Разрешение на строительство', adress: 'Московская область, г. Подольск, в границах улиц: 43 Армии, Кирова, Юбилейная, Ленинградская, Ленинградский проезд'} },
  {id: 8, active: false, img: 'bg-photo8', name: 'ОБЩЕСТВЕННЫЙ КОМПЛЕКС УЛ.МАРШАЛА Савицкого', body: {obj: 'Нежилое здание', work: 'Разрешение на строительство', adress: 'г. Москва, Южное Бутово, Щербинка, мкр. 1, корп. 26 (ул. Маршала Савицкого, вл. 6, корп. 1)'} },
  {id: 9, active: false, img: 'bg-photo9', name: 'ОБЩЕСТВЕННЫЙ КОМПЛЕКС УЛ.СИНЕЛЬНИКОВСКАЯ', body: {obj: 'Нежилое здание', work: 'Разрешение на строительство', adress: 'г. Москва, ул. Синельниковская, вл. 49/2 (ЮЗАО, Южное Бутово)'} }
])


function showImg(id) {
  openSecond.value  = true
  imgId.value = id - 1
}

</script>

<style lang="scss">

.item-img {
  filter: grayscale(1);
}

.item:hover > .item-img {
  transform: scale(1.2);
  filter: grayscale(0);
} 

</style>