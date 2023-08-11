import {ref, reactive, watch} from 'vue'

export function useField(field) {
    const valid = ref(true)
    const value = ref(field.value)
    const errors = reactive({})
    const touched = ref(false)

    const reassign = val => {
        valid.value = true
        Object.keys(field.validator ?? {}).map(keys => {
            const isValid = field.validator[keys](val )
            errors[keys] = !isValid
            if (!isValid) {
                valid.value = false 
            }
        })
    }

    watch(value, reassign)

    reassign(value.value)

    return {value, valid, errors, touched, blur: () => touched.value = true}
}