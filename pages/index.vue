<template>
  <div class="isolate pt-[100px]">
      <video controlsList="nodownload noplaybackrate norewind nofullscreen nostop" playsinline autoplay muted class="w-full h-auto max-w-full" loop controls>
        <source src="~/assets/video/IMG_3597.mp4" type="video/mp4">
      </video>
  </div>

    <div class="isolate px-6 pt-14 lg:px-8">
        <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div class="text-center">
            <h1 class=" font-bold uppercase tracking-tight text-white text-title">DEVELOPMENT ARCHITECTURE</h1>
            <p class="mt-6 uppercase text-base-text text-white">Скажи <span class="text-[#66FCF1]">DA</span>. Мы знаем, что делать! <br> Решаем <span class="text-[#66FCF1]">сложные вопросы</span> в сфере <span class="text-[#66FCF1]">градостроительства</span> и земельных правоотношений.</p>
          </div>
        </div>
    </div>
    <div id="moscow" class="bg-moscow-pattern w-full bg-no-repeat bg-cover  py-24 sm:py-32">
        <div class="mx-auto max-w-6xl px-6 lg:px-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16 text-center justify-center lg:grid-cols-4">
            <dl v-for="stat in stats" :key="stat.id" class="items-center flex lg:max-w-xs flex-col gap-y-4">
                <hr class="h-0.5 w-[235px] lg:w-full bg-[#66FCF1] border-0 dark:bg-[#66FCF1]">
                <dt class="text-btn text-white">{{ stat.name }}</dt>
                <dd class="order-first text-5xl lg:text-[2.8rem] xl:text-5xl text-white sm:text-6xl">{{ stat.value }}</dd>
            </dl>
          </div>
        </div>
    </div>
    <div class="overflow-hidden pt-24 sm:pt-32">
        <div class="mx-auto max-w-[1363px] md:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-[7rem] gap-y-16 lg:grid-cols-[2.315fr_1fr]">
              <div class="px-6 md:p-0">
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
                  <UI-TheBtn @click="store.open">
                    Связаться с руководителем
                  </UI-TheBtn>
                </div>
              </div>
            <img src="~/assets/img/photoService.webp" class="h-192 object-cover w-full mx-auto" alt="">
          </div>
        </div>
      </div> 

      <!-- modal form -->
      <!-- <TheModalForm v-model:open="open" :selectValue="select"/> -->


      <!-- modal Carusel -->
      <TheModal v-model:open="open2">
        <DialogPanel class="relative transform rounded-lg text-left shadow-xl transition-all sm:my-8 max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[73.75rem]">
          <Carousel class="outline-none" v-model="currentSlide" :itemsToShow="1" :wrapAround="true" :transition="500">
            <Slide v-for="slide in carusel" :key="slide.id">
                <div class="bg-white grid grid-cols-1 gap-y-[1rem] sm:gap-y-[2rem] h-[100%] lg:h-[650px] lg:flex lg:flex-row rounded-xl w-full p-[2rem] sm:p-[2.5rem] md:p-[2rem] lg:p-[66px_45px_82px_45px] max-w-full">
                  <button @click="open2 = false" type="button" class="text-[#44A29E] absolute top-3 right-2.5 bg-transparent hover:bg-[#44A29E] hover:text-white rounded-lg text-btn w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                 </button>
                    <div class="flex justify-center items-center">
                        <div class="rounded-xl md:h-[500px] w-[250px] h-[250px] lg:h-full sm:h-[400px] sm:w-[400px] md:w-[500px] lg:w-[450px] flex-none bg-cover text-center overflow-hidden" :class="slide.img" title="Woman holding a mug"></div>
                    </div>
                    <div class="bg-white lg:pl-[27px] flex flex-col justify-between">
                      <div class="">
                        <div class="text-black font-bold text-[1.1rem] sm:text-title-carusel mb-[1.6rem]">{{ slide.title }}</div>
                        <ul class="text-black text-[0.85rem] sm:text-base-text mb-4 text-left">
                            {{ slide.bodyTitle }}
                            <ol class="sm:ml-[10px]" v-for="item,i in slide.body">
                                {{ i+1 }}. {{ item }}
                            </ol>
                        </ul>
                        <div v-if="slide.bodyFooter" class="text-left">
                            <p class="text-base-text text-black leading-none">
                              {{ slide.bodyFooter }}
                            </p>
                        </div>
                      </div>
                      <div class="flex items-center justify-center">
                        <button @click.once="openModalForm({id: slide.id, name: slide.title})" type="submit" class="rounded-full bg-[#45A29E] border-2 border-[#45A29E] px-16 py-2 text-btn text-white hover:bg-inherit hover:text-[#45A29E] focus:text-[#45A29E] focus:bg-inherit">
                          Консультация
                        </button>
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

     <div class="overflow-hidden mb-20 py-16 sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <Carousel v-model="currentSlide" :itemsToShow="3" :breakpoints="breakpoints" :wrapAround="true" :transition="500">
                <Slide v-for="slide in carusel" :key="slide.id">
                  <div @click="slideTo(slide.id - 1)" :class="slide.img" class="flex items-center font-bold p-6 bg-no-repeat bg-cover justify-center rounded-xl text-base w-full min-h-[400px] carousel__item">
                    <h1 class="text-title-carusel text-white">{{ slide.title }}</h1> 
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
                <div class="grid gap-y-6 md:grid-cols-1 text-left lg:max-w-xl">
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

    <div class="grid w-full grid-cols-[repeat(auto-fill,_100%)] lg:grid-cols-[repeat(auto-fill,_33%)] md:grid-cols-[repeat(auto-fill,_50%)]">
      <div v-for="photo in img" :key="photo.id" :class="photo.img" class="h-[480px] bg-no-repeat bg-cover flex justify-start items-end p-[1.969rem_2.906rem] uppercase text-base-text">
        <h1>{{ photo.name }}</h1>
      </div>
    </div>

    <div class="bg-layout-pattern-2 w-full bg-no-repeat bg-cover py-16 sm:py-16">
      <div class="mx-auto max-w-[1296px] px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-6 items-center text-left md:text-center">
            <p class="text-base-text uppercase">
              К сожалению мы не можем выложить все наши работы, для нас немаловажную роль играет конфиденциальность клиентов, но мы знаем как решить любой вопрос с недвижимостью
            </p>
              <form @submit.prevent="submit" action="" class="grid items-start gap-x-[1.547rem] md:grid-cols-3 gap-y-[2rem] text-left">
                <div>
                    <UI-TheInput :class="{'ring-[#B63030] focus:ring-[#B63030]': form.name.touched && !form.name.valid}" @blur="form.name.blur" v-model="form.name.value" type="text" id="name" placeholder="Имя"/>
                    <small class="text-[#B63030] text-[10px]" v-if="form.name.touched && form.name.errors.required">Обязательно для заполнения</small>
                </div>
                <div >
                    <UI-TheInput :class="{'ring-[#B63030] focus:ring-[#B63030]': form.phone.touched && !form.phone.valid}"  @blur="form.phone.blur" v-model="form.phone.value" type="text" id="tel" placeholder="Телефон"/>
                    <small class="text-[#B63030] text-[10px]" v-if="form.phone.touched && form.phone.errors.required">Обязательно для заполнения</small>
                    <small class="text-[#B63030] text-[10px]" v-else-if="form.phone.touched && form.phone.errors.minLength">Минимальное кол-во 8. Сейчас {{ form.phone.value.length }}</small>
                </div>
                <div class="grid">
                  <UI-TheBtn v-show="!loader" :disabled="!form.validKey" @click="submit"  type="submit">
                      Отправить
                  </UI-TheBtn>
                  <div class="flex items-center justify-center" v-show="loader" role="status">
                      <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-white animate-spin  fill-[#66FCF1]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>
                  </div>
              </div>
            </form>
          </div>
      </div>
  </div>

  <div class="overflow-hidden mb-20 py-16 sm:py-16">
    <div class="mx-auto max-w-[1363px] lg:px-8">
      <div class="grid gap-y-[5.875rem] grid-cols-1 ">
        <h1 class="uppercase text-center text-title">Нам доверяют</h1>
        <TheCarouselLogo/>
    </div>
      </div>
  </div>


</template>

<script setup>
import { ref, onUpdated } from 'vue'
import { DialogPanel, DialogTitle} from '@headlessui/vue'
import { useForm } from '@/features/form'
import { useModalStore } from '~/store/modal'
import { useSelectStore } from '~/store/select'

const store = useModalStore()

const currentSlide = ref(0)
const open = ref(false)
const open2 = ref(false)
const stats = [
  {id: 1, name: 'реализованных проектов', value: '>50'},
  {id: 2, name: 'кв. м. оформленных объектов', value: '75 000'},
  {id: 3, name: 'удачно завершенных дел', value: '99%'},
  {id: 4, name: 'довольных клиентов', value: '>25'}
]
const img = [
  {id: 1, img: 'bg-photo1', name: 'ГАРАЖНЫЙ КОМПЛЕКС ул.Борисовские Пруды' },
  {id: 2, img: 'bg-photo2', name: 'университет нефти и газа имени И.М. Губкина' },
  {id: 3, img: 'bg-photo3', name: 'МАГАЗИН СЕВЕРНОЕ БУТОВО БУЛЬВАР ДМИТРИЯ ДОНСКОГО' },
  {id: 4, img: 'bg-photo4', name: 'КУЛЬТУРНО-ДОСУГОВЫЙ КОМПЛЕКС МИТИНО УЛ.ДУБРАВНАЯ' },
  {id: 5, img: 'bg-photo5', name: 'СПОРТИВНЫЙ КОМПЛЕКС ЖУЛЕБИНО МКР.6'},
  {id: 6, img: 'bg-photo6', name: 'СПОРТИВНЫЙ КОМПЛЕКС ПОСЕЛОК КИЕВСКИЙ' },
  {id: 7, img: 'bg-photo7', name: 'ТОРГОВЫЙ КОМПЛЕКС Г.ПОДОЛЬСК' },
  {id: 8, img: 'bg-photo8', name: 'ОБЩЕСТВЕННЫЙ КОМПЛЕКС УЛ.МАРШАЛА СОВИЦКОГО' },
  {id: 9, img: 'bg-photo9', name: 'ОБЩЕСТВЕННЫЙ КОМПЛЕКС УЛ.СИНЕЛЬНИКОВСКАЯ' }
]
const carusel = [
    {id: 1, title: 'Внесение изменений в правила землепользования и застройки', bodyTitle: 'НАИБОЛЕЕ ЧАСТЫЕ ПРИЧИНЫ ВНЕСЕНИЯ ИЗМЕНЕНИЙ В ПЗЗ:', body: ['Вид разрешённого использования ЗУ не соответствует целям бизнеса — Смена вида разрешённого использования;', 'Невозможна реконструкция объектов с преобразованием ТЭПов — Изменение технико-экономических показателей;', 'ПЗЗ ограничивает возможности нового строительства — Снятие запрета на строительство;', 'Градостроительные регламенты препятствуют строительству — Получение разрешения на строительство.'], img: 'bg-field2-pattern'},
    {id: 2, title: 'Постановка на кадастровый учет объекта и регистрация права в Росреестре', bodyTitle: 'Что дает регистрация участков в кадастре:', body: ['Обоснование права собственности на законном уровне;', 'Способность осуществлять юридические сделки, такие как продажа, дарение либо обмен имущества;', 'Определение границ земельного участка и предотвращение конфликтных ситуаций с соседями;', 'Возможность постройки ОКС, а также инженерных коммуникаций.'], img: 'bg-field1-pattern'},
    {id: 3, title: 'Разрешение на строительство', bodyTitle: 'Когда нужно разрешение?', body: ['Возведение и реконструкция объекта капитального строительства;', 'строительство объектов атомной энергетики, космической инфраструктуры;', 'прокладка железнодорожных путей, объектов инфраструктуры воздушного транспорта;', 'возведение гидротехнических сооружений;', 'строительные работы в охраняемых природных зонах.'], img: 'bg-field3-pattern'},
    {id: 4, title: 'Свидетельство об утверждении АГР', bodyTitle: 'Когда требуется разработка и согласование АГР:', body: ['При проектировании нового объекта в пределах административных границ города;', 'При реконструкции существующего объекта, если работы связаны с изменением внешнего вида и планировочных решений фасадов;', 'В процессе легализуя самостроя в судебном порядке.'], img: 'bg-field4-pattern'},
    {id: 5, title: 'Разработка концепции проекта', bodyTitle: 'Цели разработки концепции проекта:', body: ['Планирование проекта (стратегическое и оперативное в виде плана-графика реализации проекта);', 'Составление бюджета проекта (определение инвестиционных затрат и источников финансирования);', 'Обоснование проекта (его актуальность и эффективность);', 'Определение заинтересованных сторон.'], img: 'bg-field5-pattern'},
    {id: 6, title: 'Анализ и проработка градпотенциала', bodyTitle: 'ДОКУМЕНТ необходим для решения следующих задач:', body: ['Предварительной оценки возможностей застройки земельного участка;', 'получения разрешения на разработку проекта планировки территории;', 'используется непосредственно при создании проекта планировки.'], bodyFooter: 'Для собственников земельных активов, которые хотят начать развитие свободных территорий под застройку.', img: 'bg-field6-pattern'},
    {id: 7, title: 'Сокращение СЗЗ', bodyTitle: 'Проект необходим в следующий ситуациях:', body: ['запланирована постройка объектов в СЗЗ, которые не приемлемы ввиду особенностей режима функционирования данной зоны;', 'жители близлежащих территорий жалуются на звуки, запах, отходы, изменение свойств воздуха или воды;', 'корректирование ПДК новых, впервые вводимых химических веществ и соединений, влиянию которых подвергается здоровье рабочих.'], img: 'bg-field7-pattern'},
    {id: 8, title: 'Легализация самостроя', bodyTitle: 'УСЛУГА требуется в следующих случаях:', body: [' Чтобы зарегистрировать право собственности жильем в Россреестре;', 'Чтобы узаконить объект после строительства или внесения значительных изменений.'], bodyFooter: 'Без проведения такой процедуры собственник не сможет осуществлять с объектом какие-либо действия — дарить, завещать, продавать, использовать в роли залога и так далее.', img: 'bg-field8-pattern'},
    {id: 9, title: 'Согласование с аэропортами', bodyTitle: 'Согласование потребуется для объектов, соответствующих следующим характеристикам:', body: ['нахождение в непосредственной близости от взлетно-посадочных полос аэродромов;', 'тридцати километровое расстояние вокруг аэропорта;', 'объекты повышенной опасности (в том числе взрывоопасные);', 'высота строения по проекту превышает 50 метров;', 'деятельность, осуществляемая внутри здания, может повлиять на видимость в зоне полетов.'], img: 'bg-field9-pattern'},
    {id: 10, title: 'Кадастровые работы', bodyTitle: 'Роль кадастровых работ в жизни собственников:', body: ['Обеспечивают прозрачность и законность сделки с недвижимостью;', 'Позволяют владельцам недвижимости правильно оформить ее в наследство;', 'Позволяют установить правомерные границы участка земли и прилегающих объектов недвижимости, определить их стоимость и налоговую стоимость, повышают прозрачность и законность сделок.'], img: 'bg-field10-pattern'}
]

// const removeModal = (boolean) => open.value = boolean
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

const breakpoints = {
    1024: {
        itemsToShow: 3,
    },
    300: {
        itemsToShow: 1,
        snapAlign: 'center',
    }
}


const loader = ref(false)

function submit() {
    loader.value = true 
    setTimeout(() => {
        form.name.value = ''
        form.name.touched = false 
        form.phone.value = ''
        form.phone.touched = false 
        loader.value = false
    }, 4000)
}


function slideTo(val) {
  currentSlide.value = val
  open2.value = true
}

function openModalForm(obj) {
  useSelectStore().newValue(obj)
  open2.value = false
  store.open()
}

</script>

<style lang="scss">
video::-webkit-media-controls-enclosure {
  display:none !important;
}

video::-webkit-media-controls-stop-button {
  display: none;
}




.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  background-color: #45A29E;
  border-radius: 50%;
  border: 1px solid #45A29E;

  svg {
    color: #66FCF1
  }

  &:hover {
    border-color: #66FCF1;
  }
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
  

  @media (min-width: 1024px) {

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
  }

</style>