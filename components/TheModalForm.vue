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
                                <div>
                                    <label for="tel" class="block text-title-form" :class="{'text-[#B63030]': form.phone.touched && !form.phone.valid}">Телефон</label>
                                    <UI-TheInput 
                                        :class="{'ring-[#B63030] focus:ring-[#B63030]': form.phone.touched && !form.phone.valid}"  
                                        @blur="form.phone.blur" 
                                        v-model="formattedPhone"
                                        type="text" 
                                        id="tel" 
                                        placeholder="+7 (123) 123 12-31"
                                        @input="handlePhoneInput"
                                        maxlength="18"
                                    />
                                    <small class="text-[#B63030] text-[10px] mb-1" v-if="form.phone.touched && (form.phone.errors.required || form.phone.errors.minLength)">Обязательно для заполнения</small>
                                    <small class="text-[#B63030] text-[10px]" v-if="form.phone.touched && form.phone.errors.validPhone">Используйте: +7 (XXX) XXX-XX-XX</small>
                                </div>
                                
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

            <TransitionRoot  as="template" :show="successAlertVisible">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
            <div v-if="successAlertVisible"  class="relative z-[999]">
                <div class="bg-green-100 border-t-4 border-green-500 rounded-b text-green-900 px-4 py-3 shadow-md" role="alert">
                    <div class="flex">
                        <div class="py-1">
                            <svg class="fill-current h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm2 11H8v-2h4v2zm0-4H8V7h4v2z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="font-bold">Форма успешно отправлена!</p>
                            <p class="text-sm">Спасибо за ваш запрос. Мы свяжемся с вами в ближайшее время.</p>
                        </div>
                    </div>
                </div>
            </div>
        </TransitionChild>
    </TransitionRoot>


    <TransitionRoot  as="template" :show="errorAlertVisible">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
            <div v-if="errorAlertVisible" class="relative z-[999]">
                <div class="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md" role="alert">
                    <div class="flex">
                        <div class="py-1">
                            <svg class="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="font-bold">Произошла ошибка!</p>
                            <p class="text-sm">Пожалуйста, проверьте введенные данные и попробуйте снова.</p>
                        </div>
                    </div>
                </div>
            </div>
        </TransitionChild>
    </TransitionRoot>

            </DialogPanel>
            
          </div>
        </div>

        

        </TransitionChild>
      </Dialog>
    </TransitionRoot>

  </template>
  
<script setup>
import { ref, onUpdated, onMounted } from 'vue'
import { useForm } from '@/features/form'
import { useModalStore } from '~/store/modal'
import { useSelectStore } from '~/store/select'
import { Dialog, TransitionChild, TransitionRoot } from '@headlessui/vue'

const store = useModalStore()
const successAlertVisible = ref(false)
const errorAlertVisible = ref(false)

const required = val => !!val
const minLength = num => val => val.length >= num

const phonePattern = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;

const validPhone = val => phonePattern.test(val)

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
        validator: {required, minLength: minLength(18), validPhone}
    }
})

const formattedPhone = ref('');

const handlePhoneInput = (event) => {
    let input = event.target.value;

    // Убираем все нецифровые символы
    input = input.replace(/\D/g, '');

    if (input.length > 11) {
        input = input.substring(0, 11);
    }

    // Форматирование телефонного номера
    if (input.length === 0) {
        formattedPhone.value = '';
    } else if (input.length === 1) {
        formattedPhone.value = `+7 (`;
    } else if (input.length <= 4) {
        formattedPhone.value = `+7 (${input.substring(1)}`;
    } else if (input.length <= 7) {
        formattedPhone.value = `+7 (${input.substring(1, 4)}) ${input.substring(4)}`;
    } else if (input.length <= 9) {
        formattedPhone.value = `+7 (${input.substring(1, 4)}) ${input.substring(4, 7)}-${input.substring(7)}`;
    } else {
        formattedPhone.value = `+7 (${input.substring(1, 4)}) ${input.substring(4, 7)}-${input.substring(7, 9)}-${input.substring(9, 11)}`;
    }

    // Обновляем значение формы
    form.phone.value = formattedPhone.value;
}

onMounted(() => {
    useSelectStore().newValue('')
})

onUpdated(() => {
    form.select.value = useSelectStore().select
    // Обновляем форматированный номер телефона при редактировании
    formattedPhone.value = form.phone.value;
})

const loader = ref(false)

async function submit() {
    const formData = new FormData();
    formData.append('name', form.name.value );
    formData.append('phone', form.phone.value );
    formData.append('select', form.select.value.name );


    loader.value = true
    try {
        const response = await fetch('mail.php', {
            method: 'POST',
            body: formData,
        })
        if (response.ok) {
            successAlertVisible.value = true;  // Показать алерт
            setTimeout(() => {
                successAlertVisible.value = false;  // Скрыть алерт через 3 секунды
            }, 3000);
        } else {
            errorAlertVisible.value = true
            setTimeout(() => {
                errorAlertVisible.value = false;  // Скрыть алерт через 3 секунды
            }, 3000);
        }
    } catch (error) {
        errorAlertVisible.value = true
            setTimeout(() => {
                errorAlertVisible.value = false;  // Скрыть алерт через 3 секунды
            }, 3000);
    } finally {
        form.name.value = ''
        form.name.touched = false 
        form.phone.value = ''
        form.phone.touched = false 
        form.select.value = ''
        useSelectStore().newValue('')
        loader.value = false
    }
}

function close() {
    store.close()
    form.name.value = ''
    form.name.touched = false 
    form.phone.value = ''
    form.phone.touched = false 
    form.select.value = ''
    useSelectStore().newValue('')
}
</script>