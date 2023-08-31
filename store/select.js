import { defineStore } from "pinia";

export const useSelectStore = defineStore("select", () => {
    const select = ref('Выбор услуг')

    function newValue(obj) {
        select.value = obj
    }

    return {select, newValue}
})