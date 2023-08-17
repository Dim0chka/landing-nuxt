<template>
    <div class="p-[6.422rem_5.672rem]">
        <button @click="$emit('remove', false)" type="button" class="text-white absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
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
                        <label for="name" :class="{'text-[#B63030]': form.name.touched && !form.name.valid}" class="block text-title-form text-white">Имя</label>
                        <TheInput :class="{'ring-[#B63030] focus:ring-[#B63030]': form.name.touched && !form.name.valid}" @blur="form.name.blur" v-model="form.name.value" type="text" id="name" placeholder="Имя"/>
                        <small class="text-[#B63030] text-[10px]" v-if="form.name.touched && form.name.errors.required">Обязательно для заполнения</small>
                    </div>
                    <div>
                        <label for="tel" :class="{'text-[#B63030]': form.phone.touched && !form.phone.valid}" class="block text-title-form text-white">Телефон</label>
                        <TheInput :class="{'ring-[#B63030] focus:ring-[#B63030]': form.phone.touched && !form.phone.valid}"  @blur="form.phone.blur" v-model="form.phone.value" type="text" id="tel" placeholder="Телефон"/>
                        <small class="text-[#B63030] text-[10px]" v-if="form.phone.touched && form.phone.errors.required">Обязательно для заполнения</small>
                        <small class="text-[#B63030] text-[10px]" v-else-if="form.phone.touched && form.phone.errors.minLength">Минимальное кол-во 8. Сейчас {{ form.phone.value.length }}</small>
                    </div>
                </div>
                <div class="mb-14">
                    <label for="countries" class="block text-title-form text-white">Услуги</label>
                    <TheSelect id="countries" v-model:modelValue="form.select.value"/>
                </div>
                <div class="grid items-center justify-center mb-7">
                    <TheBtn :disabled="!form.validKey" @click="submit"  type="submit">
                        Отправить
                    </TheBtn>
                </div>
                <p class="text-white text-center text-title-form">
                    Нажимая на кнопку «Отправить»<br>вы даёте добровольное согласие на обработку своих персональных данных
                </p>
            </form>
        </div>    
    </div>
</template>

<script setup>
import {ref, onUpdated} from 'vue'
import {useForm} from '@/features/form'

const required = val => !!val
const minLength = num => val => val.length >= num

const form = useForm({
    select: {
        value: {id: 5, name: 'Customer service'},
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

</script>