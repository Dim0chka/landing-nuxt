import {ref, reactive, watch} from 'vue'

export function useField(field) {
    const valid = ref(true)
    const value = ref(field.value)
    const errors = reactive({})
    const touched = ref(false)

    const reassign = val => {
        valid.value = true

        //  x = val.replace(/\D/g, "")
        // .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        // console.log(x)

        // value.value = !x[2]
        // ? x[1]const
        // : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");

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