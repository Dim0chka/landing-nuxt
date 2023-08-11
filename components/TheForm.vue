<template>
    <form @submit.prevent="submit" action="" class="grid gap-6 md:grid-cols-2">
        <div class="grid grid-col-1">
            <pre class="text-white">
              {{ form }}
            </pre>
        </div>
        <div>
            <select v-model="form.select.value" id="countries" class="bg-white border-2 border-brand-color text-total-black text-sm rounded-lg focus:ring-brand-color focus:border-brand-color placeholder-total-black block w-full p-2.5 ">
                    <option value="Ms" selected>Внесение изменений в ПЗЗ г.Москвы</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
            </select>
        </div>
        <div>
            <input @blur="form.name.blur" v-model="form.name.value" type="text" id="last_name" class="bg-white border-2 border-brand-color text-total-black text-sm rounded-lg focus:ring-brand-color focus:border-brand-color placeholder-total-black block w-full p-2.5 " placeholder="Как вас зовут?" required>
            <small class="text-white" v-if="form.name.touched && form.name.errors.required">Please enter ur phone</small>
        </div>
        <div>
            <input 
                v-model="form.phone.value" 
                type="text" 
                @blur="form.phone.blur"
                :class="{'bg-brand-color': !form.phone.valid}"
                class="bg-white border-2 border-brand-color text-total-black text-sm rounded-lg focus:ring-brand-color focus:border-brand-color placeholder-total-black block w-full p-2.5 " 
                placeholder="Flowbite" 
                required
            >
            <small class="text-white" v-if="form.phone.touched && form.phone.errors.required">Please enter ur phone</small>
            <small class="text-white" v-else-if="form.phone.touched && form.phone.errors.minLength">Min length is 8. Now {{ form.phone.value.length }}</small>
        </div>  
        <button :disabled="!form.validKey" type="submit" class="rounded-full bg-inherit border-2 border-brand-color px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-brand-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-color">Связаться с руководителем</button>
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

}

</script>