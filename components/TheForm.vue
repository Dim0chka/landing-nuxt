<template>
    <form @submit.prevent="submit" action="" class="grid items-start gap-6 md:grid-cols-2 text-left">
        <div>
            <!-- class="h-[3.75rem]" -->
            <UI-TheInput :class="{'ring-[#B63030] focus:ring-[#B63030]': form.name.touched && !form.name.valid}" @blur="form.name.blur" v-model="form.name.value" type="text" id="name" placeholder="Имя"/>
            <small class="text-[#B63030] text-[10px]" v-if="form.name.touched && form.name.errors.required">Обязательно для заполнения</small>
        </div>
        <div>
            <UI-TheInput :class="{'ring-[#B63030] focus:ring-[#B63030]': form.phone.touched && !form.phone.valid}"  @blur="form.phone.blur" v-model="form.phone.value" type="text" id="tel" placeholder="Телефон"/>
            <small class="text-[#B63030] text-[10px]" v-if="form.phone.touched && form.phone.errors.required">Обязательно для заполнения</small>
            <small class="text-[#B63030] text-[10px]" v-else-if="form.phone.touched && form.phone.errors.minLength">Минимальное кол-во 8. Сейчас {{ form.phone.value.length }}</small>
        </div>  
        <UI-TheSelect id="countries" v-model:modelValue="form.select.value"/>
        <UI-TheBtn :disabled="!form.validKey" @click="submit" type="submit">
            Отправить
        </UI-TheBtn>
    </form>
</template>

<script setup>
import {ref} from 'vue'
import {useForm} from '@/features/form'

const required = val => !!val
const minLength = num => val => val.length >= num

const form = useForm({
    select: {
        value: {id: 0, name: 'Выбор услуг'},
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
    form.select.value = {id: 0, name: 'Выбор услуг'}
}

</script>