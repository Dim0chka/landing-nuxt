<template>
    <div class="p-[6.422rem_5.672rem]">
        <button type="button" class="text-white absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
        </button>
        <div class="grid grid-cols-1 gap-y-[4.375rem]">
            <div class="grid grid-cols-1 gap-y-4">
                <h1 class="text-title text-white">Получить консультацию</h1>
                <p class="text-title-form text-white">От вас требуются только данные для звонка специалиста</p>
            </div>
            <form class="grid" action="#">
                <div class="grid grid-cols-2 gap-x-[1.5rem] mb-6">
                    <div>
                        <label for="email" class="block text-title-form font-medium text-gray-400 dark:text-white">Имя</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-total-black text-title-form rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
                    </div>
                    <div>
                        <label for="password" class="block text-title-form font-medium text-gray-900 dark:text-white">Телефон <sub>*</sub></label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-title-form rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                    </div>
                </div>
                <div class="mb-14">
                    <!-- <label for="countries" class="block text-title-form font-medium text-gray-400 dark:text-white">Услуга</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-400 text-title-form rounded-lg focus:ring-[red] focus:border-[red] block w-full p-2.5 dark:bg-[gray] dark:border-[gray] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[blue] dark:focus:border-[blue]">
                      <option selected>Choose a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select> -->
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
                </div>
                <div class="grid items-center justify-center mb-7">
                    <button type="submit" class=" rounded-full bg-inherit border-2 border-brand-color px-16 py-2 text-btn text-white shadow-sm hover:text-brand-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-color">Отправить</button>
                </div>
                <p class="text-white text-center text-title-form">
                    Нажимая на кнопку «Отправить»<br>вы даёте добровольное согласие на обработку своих персональных данных
                </p>
            </form>
        </div>    
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useForm} from '@/features/form'


const required = val => !!val
const minLength = num => val => val.length >= num

const form = useForm({
    select: {
        value: 'Ms',
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
    console.log('ok')
}

</script>