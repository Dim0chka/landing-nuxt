import {ref, reactive, computed} from 'vue'
import { useField } from './field'

export function useForm(init = {}) {
    const form = reactive({})
    const valid = 'validKey'

    for (const [key, value] of Object.entries(init)) {
        form[key] = useField(value)
    }

    form[valid] = computed( () => {
        return Object.keys(form).filter(k => k !== 'validKey').reduce((acc, key) => {
            acc = form[key].valid
            return acc
        }, true)
    } )

    return form
}