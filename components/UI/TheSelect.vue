<template>
  <Listbox as="div" :modelValue="modelValue"
  @update:modelValue="value => emit('update:modelValue', value)"
  by="id">
    <div class="relative">
      <ListboxButton :disabled="departments.unavailable" class="relative w-full bg-white ring-[1px] ring-[#6A7275] text-[#2E3639] text-title-form rounded-lg focus:outline-none focus:ring-[2px] focus:ring-[#66FCF1] block p-[1rem_1rem_1rem_1.5rem] cursor-default text-left ring-inset">
        <span class="flex items-center">
          <span class="block truncate max-w-[59vw] sm:max-w-[100%]">{{ modelValue === '' ? "Выбор услуг" : modelValue.name}}</span>
        </span>
        <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <svg class="h-5 w-5 text-gray-400" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="20" height="20" transform="matrix(0 1 1 0 0 0)" fill="url(#pattern0)"/>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_328_484" transform="scale(0.01)"/>
            </pattern>
            <image id="image0_328_484" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAFFUlEQVR4nO2dS2hcVRjH/9+dgUkWYgdcaK0Lg2K3zhBNshFUrLpwI8E3hnTm3MzOoUEUXLqoVIoQMHPvpDBqfUCqFOoDdeFCSG3iBNwEH3QjPpZjIYZmzM3nKiUMnfbm5OSex5zfer6ZP/x75zv3x50U8Hg8Ho/H4/F4PB6Px2MOpPPDwzCcYeZZAHcDCPq87AoznyOiE3EcX8kwnha0FSKEqAF4dw8jS4VC4eG5ubnNg8pkAv3+VWbBiT2+fqLb7TYOJIlB6Czkzr0OMPOUEKJ+EGFMQWchlyTnTgkhHlOaxCC0FUJEswBk9kEOwCdhGN6rOJIRaCskiqIfiUhIjheZ+cLU1NQhpaEMIKfzw9vt9k/lcvkQgDGJ8dvy+fz9IyMjH6+trbHqbLrQuUMAAJ1OZxbAVzKzzHysWCy+qTiSVrQXsri4mORyuRcA/Cb5Fq8JIZ5XmUknWu/Ud1Or1e5LkuQSgFslxq8GQfBQo9FYVp0ra4wpBACq1eoxIvoCcrvt7yAIRhuNxp+qc2WJ1qXey+rq6uVyudwF8KjE+C3MPD4xMXF2eXk5UZ0tK7TvkF7iOH4LwEeS4+Obm5tNlXmyxrhCAHC32z3OzLL74CWb9YpRO2Q3Qog7AKxAwnkBSIjoqSiKvlQc68AxthAACMNwnJm/A1CQGO8Q0YNRFMkep7Vg4lfWNaIoujhoesWoU9b1GDS9YvQVssMg6RUrChkkvWL0Uu9lEPSKVYUA7usV45d6L6urq5dLpdJ/RPSIxLjxesWKHdJLs9k8CUf1ipWFwGG9Yt0O2Y2LesXqQgD39IqtX1nXcE2vWHfKuh4u6RXrr5AdXNErzhTiil6xfqn3IoQ4CuAHWKpXnLlCdojj+GdmfgaAzJ340Pb29vmZmRmZY7QSnFjqvdisV5y7QnawVa84WwjU6JVXlCZKgXNLvZdKpXIkCIIVALdLjG8R0ZNRFH2rOlc/XL5CAAALCwt/MPPTkPtxUJ6Zz9Tr9WHVufrhfCEA0Gw2l/ahV+7a2NgYVRroBgxEIfslSZLMlMpAFFKtVieYOZYc/31ra2tFaaAb4HwhlUrlCBF9Cjk9nwCotlqtq4pj9cXpQur1+nAQBJ9B7oQFALNxHH+jMtPNcLkQWl9fPwNAaiEz8/txHL+jONNNyWf9gVkhhHgdwHOS4xeHhoZkT2X7wskbwzAMH2fmz2Hhs1vOFeL1u0HUarUigAuQKwMAjut+1NSZQiYnJ3NJknwI4B7JtzgZx7GsHVaGM4UUi8XTAJ6QmSWirzudzhuKI0nhxA4RQrwMoCU5/ku32x1rtVr/qMwki/WF+AflDGJ6evowM5+DpBYhohdNKgOwuJB6vT6cz+fPAzgs+Razpj3XC9hbiJVaJA1WqhNbtUgarFvqNmuRNFhViO1aJA3W7BAXtEgarCjEFS2SBisKcUWLpMH4HeKSFkmD0YW4pkXSYOxXlotaJA1GFuKqFkmDiYXsS4sA+MBULZIG49TJfrVIoVCoqsyTNUYtdde1SBqMKWQQtEgajNghg6JF0qC9kEHSImnQXsggaZE0aN0hg6ZF0qCtkGq1OkpE30NSizDzWLPZ/FV1Lt3o/F/a3ob8j2iedbEMQO8OeUBmiIhezfpHNFmisxCZG7j3oig6rTyJQegs5NQeX79UKBTCA0liENr++Ey73W6XSqW/iOgogCL6HzA6RHQWwNT8/Py/2SX0eDwej8fj8Xg8Ho/H4/kfvWhI7OJFewIAAAAASUVORK5CYII="/>
            </defs>
          </svg>
        </span>
      </ListboxButton>

      <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-out" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="person in departments" :key="person.id" :value="person" v-slot="{ active, selected }">
            <li  :class="[active ? 'bg-[#66FCF1] text-white' : 'text-black', 'relative cursor-default select-none py-2 pl-3 pr-9']">
              <div class="flex items-center">
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{ person.name }}</span>
              </div>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { useSelectStore } from '~/store/select'

const store = useSelectStore()

console.log(store.select)

const props = defineProps({ modelValue: Object })
const emit = defineEmits(['update:modelValue'])


// Хук жизн цикла created
const departments = [
    { id: 1, name: 'Внесение изменений в правила землепользования и застройки'},
    { id: 2, name: 'Постановка на кадастровый учет объекта и регистрация права в Росреестре' },
    { id: 3, name: 'Разрешение на строительство'},
    { id: 4, name: 'Свидетельство об утверждении АГР'},
    { id: 5, name: 'Разработка концепции проекта'},
    { id: 6, name: 'Анализ и проработка градпотенциала'},
    { id: 7, name: 'Сокращение СЗЗ'},
    { id: 8, name: 'Легализация самостроя'},
    { id: 9, name: 'Согласование с аэропортами'},
    { id: 10, name: 'Кадастровые работы'},
]


</script>

