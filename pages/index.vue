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

      <!-- modal form -->
      <TheModalForm v-model:open="open" :selectValue="select"/>


      <!-- modal Carusel -->
      <TheModal v-model:open="open2">
        <DialogPanel class="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[73.75rem]">
          <Carousel v-model="currentSlide" :itemsToShow="1" :wrapAround="true" :transition="500">
            <Slide v-for="slide in carusel" :key="slide.id">
                <div class="bg-white rounded-xl max-w-sm w-full h-[650px] p-[66px_45px_82px_45px] lg:max-w-full lg:flex">
                    <div class="flex justify-center items-center">
                        <div class="rounded-xl h-full lg:w-[450px] flex-none bg-cover text-center overflow-hidden" :class="slide.img" title="Woman holding a mug"></div>
                    </div>
                    <div class="bg-white pl-[27px] flex flex-col justify-between">
                      <div class="">
                        <div class="text-black font-bold text-title-carusel mb-[1.6rem]">{{ slide.title }}</div>
                        <ul class="text-black text-base-text mb-4 text-left">
                            {{ slide.bodyTitle }}
                            <ol class="ml-[10px]" v-for="item,i in slide.body">
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
                        <TheBtn tabindex="0" class="bg-[#45A29E] border-[#45A29E]" @click.once="openModalForm({id: slide.id, name: slide.title})">
                            Консультация
                        </TheBtn>
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
            <Carousel v-model="currentSlide" :itemsToShow="3" :wrapAround="true" :transition="500">
                <Slide v-for="slide in carusel" :key="slide.id">
                  <div @click="slideTo(slide.id - 1)" :class="slide.img" class="flex items-center font-bold p-6 bg-no-repeat bg-cover justify-center rounded-xl text-base w-full min-h-[400px] carousel__item">
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
              <form @submit.prevent="submit" action="" class="grid items-start gap-x-[1.547rem] grid-cols-3 text-left">
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
                  Бесплатная консультация
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


const currentSlide = ref(0)
const open = ref(false)
const open2 = ref(false)
const stats = [
  {id: 1, name: 'реализованных проектов', value: '>50'},
  {id: 2, name: 'кв. м. оформленных объектов', value: '75 000'},
  {id: 3, name: 'удачно завершенных дел', value: '99%'},
  {id: 4, name: 'довольных клиентов', value: '>25'}
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

function submit() {
    form.name.value = ''
    form.name.touched = false 
    form.phone.value = ''
    form.phone.touched = false 
}


function slideTo(val) {
  currentSlide.value = val
  open2.value = true
}

const select = ref({id: 0, name: 'Выбор услуг'})

function openModalForm(obj) {
  select.value = obj
  open.value = true
}

onUpdated(() => {
  console.log(select.value)
  if (open.value === true) {
    open2.value = false 
  } else {
    open.value = false
    select.value = {id: 0, name: 'Выбор услуг'}
  }
})



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