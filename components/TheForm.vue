<template>
    <form @submit.prevent="submit" action="" class="grid gap-6 md:grid-cols-2 text-left">
        <div>
            <small class="text-[#B63030] text-[10px]" v-if="form.name.touched && form.name.errors.required">Обязательно для заполнения</small>
            <TheInput :class="{'ring-[#B63030] focus:ring-[#B63030]': form.name.touched && !form.name.valid}" @blur="form.name.blur" v-model="form.name.value" type="text" id="name" placeholder="Имя"/>
        </div>
        <div>
            <small class="text-[#B63030] text-[10px]" v-if="form.phone.touched && form.phone.errors.required">Обязательно для заполнения</small>
            <small class="text-[#B63030] text-[10px]" v-else-if="form.phone.touched && form.phone.errors.minLength">Минимальное кол-во 8. Сейчас {{ form.phone.value.length }}</small>
            <TheInput :class="{'ring-[#B63030] focus:ring-[#B63030]': form.phone.touched && !form.phone.valid}"  @blur="form.phone.blur" v-model="form.phone.value" type="text" id="tel" placeholder="Телефон"/>
        </div>  
        <div>
            <TheSelect id="countries" v-model:modelValue="form.select.value"/>
        </div>
        <TheBtn :disabled="!form.validKey" @click="submit" type="submit">
            Отправить
        </TheBtn>
    </form>
</template>

<script setup>
import {ref} from 'vue'
import {useForm} from '@/features/form'

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
    console.log('ok')
}

</script>