<template>
    <form @submit.prevent="submit" action="" class="grid gap-6 md:grid-cols-2">
        <div>
            <select v-model="form.select.value" id="countries" class="bg-white border-2 border-[#66FCF1] text-total-black text-text-input rounded-lg focus:ring-[#66FCF1] focus:border-[#66FCF1] placeholder-total-black block w-full p-2.5 ">
                    <option value="Ms" selected>Внесение изменений в ПЗЗ г.Москвы</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
            </select>

            <!-- <label for="underline_select" class="sr-only">Underline select</label>
            <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-invalid dark:border-invalid focus:outline-none focus:ring-0 focus:border-[#66FCF1] peer">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select> -->
        </div>
        <div>
            <input @blur="form.name.blur" v-model="form.name.value" type="text" id="last_name" class="bg-white border-2 border-[#66FCF1] text-total-black text-text-input rounded-lg focus:ring-[#66FCF1] focus:border-[#66FCF1] placeholder-total-black block w-full p-2.5 " placeholder="Как вас зовут?" required>
            <small class="text-white" v-if="form.name.touched && form.name.errors.required">Please enter ur phone</small>
        </div>
        <div>
            <input 
                v-model="form.phone.value" 
                type="tel" 
                @blur="form.phone.blur"
                :class="{'border-invalid': form.phone.touched && !form.phone.valid}"
                class="bg-white border-2 border-[#66FCF1] text-total-black text-text-input rounded-lg focus:border-invalid placeholder-total-black block w-full p-2.5 " 
                placeholder="Ваш номер телефона" 
            >
            <small class="text-invalid" v-if="form.phone.touched && form.phone.errors.required">Please enter ur phone</small>
            <small class="text-invalid" v-else-if="form.phone.touched && form.phone.errors.minLength">Min length is 8. Now {{ form.phone.value.length }}</small>
        </div>  
        <button :disabled="!form.validKey" @click="submit" type="submit" class="rounded-full bg-inherit border-2 border-[#66FCF1] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-[#66FCF1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#66FCF1]">Связаться с руководителем</button>
    </form>
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