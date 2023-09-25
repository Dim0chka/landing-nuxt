<template>
    <div id="servise" class="overflow-hidden mb-20 py-16 sm:py-16">
        <div class="mx-auto max-w-[1363px] px-6 lg:px-8">
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

    <TheModal v-model:open="open">
        <DialogPanel class="relative transform rounded-lg text-left shadow-xl transition-all sm:my-8 max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[73.75rem]">
          <Carousel class="outline-none" v-model="currentSlide" :itemsToShow="1" :wrapAround="true" :transition="500">
            <Slide v-for="slide in carusel" :key="slide.id">
                <div class="bg-white grid grid-cols-1 gap-y-[1rem] sm:gap-y-[2rem] h-[100%] lg:h-[650px] lg:flex lg:flex-row rounded-xl w-full p-[2rem] sm:p-[2.5rem] md:p-[2rem] lg:p-[66px_45px_82px_45px] max-w-full">
                  <button @click="open = false" type="button" class="text-[#44A29E] absolute top-3 right-2.5 bg-transparent hover:bg-[#44A29E] hover:text-white rounded-lg text-btn w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
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
                <Navigation class="redColr"/>
            </template>
        </Carousel>
        </DialogPanel>
      </TheModal>
</template>

<script setup>
import {ref} from 'vue'
import { useModalStore } from '~/store/modal'
import { useSelectStore } from '~/store/select'
import { DialogPanel } from '@headlessui/vue'

const store = useModalStore()

const currentSlide = ref(0)
const open = ref(false)

const carusel = [
    {id: 1, title: 'Внесение изменений в правила землепользования и застройки', bodyTitle: 'НАИБОЛЕЕ ЧАСТЫЕ ПРИЧИНЫ ВНЕСЕНИЯ ИЗМЕНЕНИЙ В ПЗЗ:', body: ['Вид разрешённого использования ЗУ не соответствует целям бизнеса — Смена вида разрешённого использования;', 'Невозможна реконструкция объектов с преобразованием ТЭПов — Изменение технико-экономических показателей;', 'ПЗЗ ограничивает возможности нового строительства — Снятие запрета на строительство;', 'Градостроительные регламенты препятствуют строительству — Получение разрешения на строительство.'], img: 'bg-field2-pattern'},
    {id: 2, title: 'Постановка на кадастровый учет объекта и регистрация права в Росреестре', bodyTitle: 'Что дает регистрация участков в кадастре:', body: ['Обоснование права собственности на законном уровне;', 'Способность осуществлять юридические сделки, такие как продажа, дарение либо обмен имущества;', 'Определение границ земельного участка и предотвращение конфликтных ситуаций с соседями;', 'Возможность постройки ОКС, а также инженерных коммуникаций.'], img: 'bg-field1-pattern'},
    {id: 3, title: 'Разрешение на строительство', bodyTitle: 'Когда нужно разрешение?', body: ['Возведение и реконструкция объекта капитального строительства;', 'строительство объектов атомной энергетики, космической инфраструктуры;', 'прокладка железнодорожных путей, объектов инфраструктуры воздушного транспорта;', 'возведение гидротехнических сооружений;', 'строительные работы в охраняемых природных зонах.'], img: 'bg-field3-pattern'},
    {id: 4, title: 'Свидетельство об утверждении АГР', bodyTitle: 'Когда требуется разработка и согласование АГР:', body: ['При проектировании нового объекта в пределах административных границ города;', 'При реконструкции существующего объекта, если работы связаны с изменением внешнего вида и планировочных решений фасадов;', 'В процессе легализуя самостроя в судебном порядке.'], img: 'bg-field4-pattern'},
    {id: 5, title: 'Разработка концепции проекта', bodyTitle: 'Цели разработки концепции проекта:', body: ['Планирование проекта (стратегическое и оперативное в виде плана-графика реализации проекта);', 'Составление бюджета проекта (определение инвестиционных затрат и источников финансирования);', 'Обоснование проекта (его актуальность и эффективность);', 'Определение заинтересованных сторон.'], img: 'bg-field5-pattern'},
    {id: 6, title: 'Анализ и проработка градпотенциала', bodyTitle: 'ДОКУМЕНТ необходим для решения следующих задач:', body: ['Предварительной оценки возможностей застройки земельного участка;', 'получения разрешения на разработку проекта планировки территории;', 'используется непосредственно при создании проекта планировки.'], bodyFooter: 'Для собственников земельных активов, которые хотят начать развитие свободных территорий под застройку.', img: 'bg-field6-pattern'},
    {id: 7, title: 'Сокращение СЗЗ', bodyTitle: 'Проект необходим в следующий ситуациях:', body: ['запланирована постройка объектов в СЗЗ, которые не приемлемы ввиду особенностей режима функционирования данной зоны;', 'жители близлежащих территорий жалуются на звуки, запах, отходы, изменение свойств воздуха или воды;', 'корректирование ПДК новых, впервые вводимых химических веществ и соединений, влиянию которых подвергается здоровье рабочих.'], img: 'bg-field7-pattern'},
    {id: 8, title: 'Консультационные услуги по объектам самостроя', bodyTitle: 'УСЛУГА требуется в следующих случаях:', body: [' Чтобы зарегистрировать право собственности жильем в Россреестре;', 'Чтобы узаконить объект после строительства или внесения значительных изменений.'], bodyFooter: 'Без проведения такой процедуры собственник не сможет осуществлять с объектом какие-либо действия — дарить, завещать, продавать, использовать в роли залога и так далее.', img: 'bg-field8-pattern'},
    {id: 9, title: 'Согласование с аэропортами', bodyTitle: 'Согласование потребуется для объектов, соответствующих следующим характеристикам:', body: ['нахождение в непосредственной близости от взлетно-посадочных полос аэродромов;', 'тридцати километровое расстояние вокруг аэропорта;', 'объекты повышенной опасности (в том числе взрывоопасные);', 'высота строения по проекту превышает 50 метров;', 'деятельность, осуществляемая внутри здания, может повлиять на видимость в зоне полетов.'], img: 'bg-field9-pattern'},
    {id: 10, title: 'Кадастровые работы', bodyTitle: 'Роль кадастровых работ в жизни собственников:', body: ['Обеспечивают прозрачность и законность сделки с недвижимостью;', 'Позволяют владельцам недвижимости правильно оформить ее в наследство;', 'Позволяют установить правомерные границы участка земли и прилегающих объектов недвижимости, определить их стоимость и налоговую стоимость, повышают прозрачность и законность сделок.'], img: 'bg-field10-pattern'}
]

const breakpoints = {
    1024: {
        itemsToShow: 3,
    },
    300: {
        itemsToShow: 1,
        snapAlign: 'center',
    }
}

function slideTo(val) {
  currentSlide.value = val
  open.value = true
}

function openModalForm(obj) {
  useSelectStore().newValue(obj)
  open.value = false
  store.open()
}
</script>

<style lang="scss">
.carousel__prev,
.carousel__next {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-radius: 50%;
  transition: all .5s;
  svg {
    color: #66FCF1
  }

  &:hover {
    background-color: #45A29E;
    border-radius: 50%;
    border: 1px solid #66FCF1;
  }
}


.carousel__slide {
    padding: 5px;
  }
  
.carousel__viewport {
  perspective: 3000px;
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