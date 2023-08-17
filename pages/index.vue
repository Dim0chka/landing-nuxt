<template>
    <div  class="isolate px-6 pt-14 lg:px-8">
        <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div class="text-center">
            <h1 class=" font-bold uppercase tracking-tight text-white sm:text-title">DEVELOPMENT ARCHITECTURE</h1>
            <p class="mt-6 uppercase text-base-text text-white">Скажи <span class="text-[#66FCF1]">DA</span>. Мы знаем, что делать! <br> Решаем <span class="text-[#66FCF1]">сложные вопросы</span> в сфере <span class="text-[#66FCF1]">градостроительства</span> и земельных правоотношений.</p>
          </div>
        </div>
    </div>
    <div class="bg-moscow-pattern w-full bg-no-repeat bg-cover  py-24 sm:py-32">
        <div class="mx-auto max-w-6xl px-6 lg:px-8">
          <!-- <div class="flex justify-between items-center">
            <dl v-for="stat in stats" :key="stat.id" class="mx-auto items-center flex max-w-xs flex-col gap-y-4">
              <hr class="h-0.5 w-[85%] bg-[#66FCF1] border-0 dark:bg-[#66FCF1]">
              <dt class="text-btn leading-7 text-white">{{ stat.name }}</dt>
              <dd class="order-first text-5xl text-white sm:text-6xl">{{ stat.value }}</dd>
           </dl>
          </div> -->
          <div class="grid grid-cols-1 gap-x-16 gap-y-16 text-center lg:grid-cols-4">
            <dl v-for="stat in stats" :key="stat.id" class="items-center flex max-w-xs flex-col gap-y-4">
                <hr class="h-0.5 w-full bg-[#66FCF1] border-0 dark:bg-[#66FCF1]">
                <dt class="text-btn text-white">{{ stat.name }}</dt>
                <dd class="order-first text-5xl text-white sm:text-6xl">{{ stat.value }}</dd>
            </dl>
          </div>
        </div>
    </div>
    <div class="overflow-hidden pt-24 sm:pt-32">
        <div class="mx-auto max-w-[1363px] px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-[7rem] gap-y-16 lg:grid-cols-[2.315fr_1fr]">
              <div class="">
                <h1 class="text-title text-white">ЦЕНИМ СЕРВИС, КОТОРЫЙ ПРЕВОСХОДИТ ОЖИДАНИЯ</h1>
                <p class="mt-[1.188rem] text-base-text text-white">
                    Приветствую! Меня зовут Анна, я основатель компании Development 
                    Architecture. Более 10 лет развиваю бизнес в направлении получения 
                    исходно-разрешительной документации. Активно сотрудничаем с 
                    крупными Заказчиками, создавая полноценные партнёрские отношения. 
                    Мы ценим своё и Ваше время, поэтому научились находить самые короткие 
                    и менее затратные пути решения поставленных задач. 
                    <br>
                    <br>
                    <span class="mt-2" >Будем рады стать Вашим деловым партнёром!</span>
                </p>
                <div class="text-center mt-12 pt-[9px]">
                  <TheBtn @click="open = !open">
                    Связаться с руководителем
                  </TheBtn>
                </div>
              </div>
            <img src="~/assets/img/photoService.jpg" class="h-192 object-cover w-full mx-auto" alt="">
          </div>
        </div>
      </div> 



      <TheModal v-model:open="open">
        <DialogPanel class="border-[1px] border-[#66FCF1] relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[49.219rem]">
          <TheFormModal @remove="removeModal"/>
        </DialogPanel>
      </TheModal>

     <div class="overflow-hidden mb-20 py-16 sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <Carousel :itemsToShow="3" :wrapAround="true" :transition="500">
                <Slide v-for="slide in carusel" :key="slide.id">
                  <div @click="open = !open" :class="slide.img" class="flex items-center font-bold p-6 bg-no-repeat bg-cover justify-center rounded-xl text-base w-full min-h-[400px] carousel__item">
                    <h1 class="text-3xl/8 font-sfemibold  text-white">{{ slide.title }}</h1> 
                  </div>
                </Slide>
                <template #addons>
                    <Navigation/>
                  </template>
            </Carousel>
        </div>
    </div>
    <div class="bg-layout-pattern w-full bg-no-repeat bg-cover py-16 sm:py-16">
        <div class="mx-auto max-w-[1363px] px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-4 items-center gap-y-16 text-center lg:grid-cols-2">
                <div class="grid gap-y-6 md:grid-cols-1 text-left max-w-xl">
                    <h1 class="text-center text-base-text text-white">DEVELOPMENT ARCHITECTURE</h1>
                    <p class="text-white text-base-text">
                        Мы знаем, как в кратчайшие сроки подготовить
                        необходимую техническую документацию, с учётом всех 
                        необходимых требований.
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-y-4 w-full">
                    <h1 class="text-left text-white text-btn">я хочу обратиться по такому вопросу</h1>
                    <TheForm/>
                </div>
            </div>
        </div>
    </div>

    <h1>ЧТО-ТО ТУТ ЕСТЬ</h1>

    <div class="bg-layout-pattern-2 w-full bg-no-repeat bg-cover py-16 sm:py-16">
      <div class="mx-auto max-w-[1296px] px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-4 items-center gap-y-16 text-center">
            <p class="text-base-text uppercase">
              К сожалению мы не можем выложить все наши работы, для нас немаловажную роль играет конфиденциальность клиентов, но мы знаем как решить любой вопрос с недвижимостью
            </p>
              <form @submit.prevent="submit" action="" class="mx-auto w-[1070px] grid justify-center gap-x-[1.547rem] grid-cols-3 text-left">
                <div>
                    <TheInput :class="{'ring-[#B63030] focus:ring-[#B63030]': form.name.touched && !form.name.valid}" @blur="form.name.blur" v-model="form.name.value" type="text" id="name" placeholder="Имя"/>
                    <small class="text-[#B63030] text-[10px]" v-if="form.name.touched && form.name.errors.required">Обязательно для заполнения</small>
                </div>
                <div >
                    <TheInput :class="{'ring-[#B63030] focus:ring-[#B63030]': form.phone.touched && !form.phone.valid}"  @blur="form.phone.blur" v-model="form.phone.value" type="text" id="tel" placeholder="Телефон"/>
                    <small class="text-[#B63030] text-[10px]" v-if="form.phone.touched && form.phone.errors.required">Обязательно для заполнения</small>
                    <small class="text-[#B63030] text-[10px]" v-else-if="form.phone.touched && form.phone.errors.minLength">Минимальное кол-во 8. Сейчас {{ form.phone.value.length }}</small>
                </div>
                <TheBtn :disabled="!form.validKey" @click="submit" type="submit">
                  Отправить
                </TheBtn>
            </form>
          </div>
      </div>
  </div>


</template>

<script setup>
import { ref, onUpdated } from 'vue'
import { DialogPanel, DialogTitle} from '@headlessui/vue'
import {useForm} from '@/features/form'

const required = val => !!val
const minLength = num => val => val.length >= num

const form = useForm({
    select: {
        value: {id: 5, name: 'Customer service'},
        validator: {required}
    },
    name: {
        value: '',
        validator: {required}
    },
    phone: {
        value: '',
        validator: {required, minLength: minLength(8)}
    }
})

function submit() {
    form.name.value = ''
    form.name.touched = false 
    form.phone.value = ''
    form.phone.touched = false 
}

const stats = [
  {id: 1, name: 'реализованных проектов', value: '>50'},
  {id: 2, name: 'кв. м. оформленных объектов', value: '75 000'},
  {id: 3, name: 'удачно завершенных дел', value: '99%'},
  {id: 4, name: 'довольных клиентов', value: '>25'}
]


const carusel = [
  {id: 1, img: 'bg-field1-pattern', title: 'Постановка на кадастровый учет объекта и регистрация права в Росреестре'},
  {id: 2, img: 'bg-field2-pattern', title: 'Внесение изменений в правила землепользования и застройки'},
  {id: 3, img: 'bg-field3-pattern', title: 'Разрешение на строительство'}
]

const open = ref(false)

const removeModal = (boolean) => {
  open.value = boolean
}


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