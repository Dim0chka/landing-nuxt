<template>
    <div class="bg-layout-pattern-2 w-full bg-no-repeat bg-cover py-16 sm:py-16">
        <div class="mx-auto max-w-[1296px] px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-6 items-center text-left md:text-center">
              <p class="text-base-text uppercase">
                К сожалению мы не можем выложить все наши работы, для нас немаловажную роль играет конфиденциальность клиентов, но мы знаем как решить любой вопрос с недвижимостью
              </p>
                <form @submit.prevent action="" class="grid items-start gap-x-[1.547rem] md:grid-cols-3 gap-y-[2rem] text-left">
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
</template>

<script setup>
import { useForm } from '@/features/form'

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

const loader = ref(false)

async function submit() {
    const formData = new FormData();
    formData.append('name', form.name.value );
    formData.append('phone', form.phone.value );

    loader.value = true
    try {
        const response = await fetch('mail.php', {
            method: 'POST',
            body: formData,
        })
        if (response.ok) {
            alert("Форма успешно отправлена!")
        } else {
            alert("Ошибка при отправке формы!")
        }
    } catch (error) {
        alert('Ошибка при отправке запроса: ' + error)
    } finally {
        form.name.value = ''
        form.name.touched = false 
        form.phone.value = ''
        form.phone.touched = false 
        loader.value = false
    }
}
</script>