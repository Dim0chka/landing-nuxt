<template>
    <TransitionRoot  as="template" :show="store.modal">
      <Dialog as="div" class="relative z-50" @click="close">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        
          <div class="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-70">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center lg:p-0">
            <DialogPanel @click.stop class="border-[1px] border-[#1F2833] relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[49.219rem]">
              <div class="p-[2.422rem_2.672rem] md:p-[6.422rem_5.672rem]">
                <button @click="close" type="button" class="text-white absolute top-3 right-2.5 bg-transparent hover:bg-[#66FCF1] hover:text-gray-900 rounded-lg text-btn w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
                <div class="grid grid-cols-1 gap-y-[4.375rem]">
                    <div class="grid grid-cols-1 gap-y-4">
                        <h1 class="text-[1.5rem] text-white md:text-title">Получить консультацию</h1>
                        <p class="text-title-form text-white">От вас требуются только данные для звонка специалиста</p>
                    </div>
                    <form class="grid" @submit.prevent>
                        <div class="grid grid-cols-1 gap-y-[1.5rem] md:grid-cols-2 gap-x-[1.5rem] mb-6">
                            <div>
                                <label for="name" class="block text-title-form" :class="{'text-[#B63030]': form.name.touched && !form.name.valid}">Имя</label>
                                <UI-TheInput :class="{'ring-[#B63030] focus:ring-[#B63030]': form.name.touched && !form.name.valid}" @blur="form.name.blur" v-model="form.name.value" type="text" id="name" placeholder="Имя"/>
                                <small class="text-[#B63030] text-[10px]" v-if="form.name.touched && form.name.errors.required">Обязательно для заполнения</small>
                            </div>
                            <div>
                                <label for="tel" class="block text-title-form" :class="{'text-[#B63030]': form.phone.touched && !form.phone.valid}">Телефон</label>
                                <UI-TheInput :class="{'ring-[#B63030] focus:ring-[#B63030]': form.phone.touched && !form.phone.valid}"  @blur="form.phone.blur" v-model="form.phone.value" type="text" id="tel" placeholder="Телефон"/>
                                <small class="text-[#B63030] text-[10px]" v-if="form.phone.touched && form.phone.errors.required">Обязательно для заполнения</small>
                                <small class="text-[#B63030] text-[10px]" v-else-if="form.phone.touched && form.phone.errors.minLength">Минимальное кол-во 8. Сейчас {{ form.phone.value.length }}</small>
                            </div>
                        </div>
                        <div class="mb-14">
                            <label for="countries" class="block text-title-form text-white">Услуги</label>
                            <UI-TheSelect :class="{'ring-[#B63030] focus:ring-[#B63030]': form.select.touched && !form.select.valid}" @blur="form.select.blur" v-model:modelValue="form.select.value"/>
                            <small class="text-[#B63030] text-[10px]" v-if="form.select.touched && form.select.errors.required">Обязательно для заполнения</small>
                        </div>
                        <div class="grid items-center justify-center mb-7">
                            <UI-TheBtn v-show="!loader" :disabled="!form.validKey" @click="submit"  type="submit">
                                Отправить
                            </UI-TheBtn>
                            <div v-show="loader" role="status">
                                <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-white animate-spin  fill-[#66FCF1]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                            </div>
                        </div>
                        <p class="text-white text-center text-title-form">
                            Нажимая на кнопку «Отправить»<br>вы даёте добровольное согласие на обработку своих персональных данных
                        </p>
                    </form>
                </div>    
            </div>
            </DialogPanel>
          </div>
        </div>

        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </template>
  
<script setup>
import { ref, onUpdated } from 'vue'
import { useForm } from '@/features/form'
import { useModalStore } from '~/store/modal'
import { useSelectStore } from '~/store/select'
import { Dialog, TransitionChild, TransitionRoot } from '@headlessui/vue'

const store = useModalStore()


const required = val => !!val
const minLength = num => val => val.length >= num

const form = useForm({
    select: {
        value: '',
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

onUpdated(() => {
    form.select.value = useSelectStore().select
})

const loader = ref(false)

async function submit() {
    loader.value = true 
    setTimeout(() => {
        form.name.value = ''
        form.name.touched = false 
        form.phone.value = ''
        form.phone.touched = false 
        useSelectStore().newValue('')
        loader.value = false
    }, 4000)
}

function close() {
    store.close()
    form.name.value = ''
    form.name.touched = false 
    form.phone.value = ''
    form.phone.touched = false 
    useSelectStore().newValue('')
}
</script>