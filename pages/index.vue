<template>
    <div class="isolate px-6 pt-14 lg:px-8">
        <div class="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">DEVELOPMENT ARCHITECTURE</h1>
            <p class="mt-6 text-lg leading-8 text-white">Скажи <span class="text-brand-color">DA</span>. Мы знаем, что делать! <br> Решаем <span class="text-brand-color">сложные вопросы</span> в сфере <span class="text-brand-color">градостроительства</span> и земельных правоотношений.</p>
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
        <div class="mx-auto flex flex-col max-w-2xl sm:gap-y-20 lg:mx-0 lg:max-w-none lg:flex-row">
            <div class="lg:pr-8 lg:pt-4">
              <div class="lg:max-w-2xl">
                <h1 class="text-3xl/10 font-sfemibold  text-white">ЦЕНИМ СЕРВИС, КОТОРЫЙ ПРЕВОСХОДИТ ОЖИДАНИЯ</h1>
                <p class="mt-6 text-lg leading-8 text-white">
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
            </div>
            <img src="~/assets/img/photoService.jpg" class="h-192 object-cover w-192 mx-auto" alt="">
          </div>
        </div>
      </div>

      <div class="overflow-hidden py-8 sm:py-8">
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
    <div class="bg-layout-pattern w-full bg-no-repeat bg-cover  py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2">
                <div class="text-left w-full mx-auto flex-auto flex-row gap-y-4">
                    <h1 class="text-center text-5xl font-bold tracking-tight text-white sm:text-2xl">DEVELOPMENT ARCHITECTURE</h1>
                    <p class="mt-6 text-white sm:text-2xl/6">
                        Мы знаем, как в кратчайшие сроки подготовить
                        необходимую техническую документацию, с учётом всех 
                        необходимых требований.
                    </p>
                </div>
                <form action="">
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label for="countries" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">я хочу обратиться по такому вопросу</label>
                                <select id="countries" class="bg-white border border-gray-300 text-total-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-total-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Внесение изменений в ПЗЗ г.Москвы</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required>
                        </div>
                        <div>
                            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required>
                        </div>  
                    </div>
                    <button type="submit" class="rounded-full bg-inherit border-2 border-brand-color px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-brand-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-color">Связаться с руководителем</button>
                </form>
            </div>
        </div>
    </div>


</template>

<script>
export default {
  data() {
    return {
      stats: [
        {id: 1, name: 'реализованных проектов', value: '1000'},
        {id: 2, name: 'кв. м. оформленных объектов', value: '50 000'},
        {id: 3, name: 'удачно завершенных дел', value: '99%'},
        {id: 4, name: 'довольных клиентов', value: '500'}
      ],
      carusel: [
        {id: 1, img: 'bg-field1-pattern', title: 'Постановка на кадастровый учет объекта и регистрация права в Росреестре'},
        {id: 2, img: 'bg-field2-pattern', title: 'Внесение изменений в правила землепользования и застройки'},
        {id: 3, img: 'bg-field3-pattern', title: 'Разрешение на строительство'}
      ],
      select: ""
    }
  }
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