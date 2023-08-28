import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", () => {
    const modal = ref(false)

    function open() {
        modal.value = true
    }

    function close() {
        modal.value = false
    }

    return {modal, open, close}
})