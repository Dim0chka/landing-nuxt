<template>
    <button
        class="fixed bottom-4 right-4 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full"
        @click="scrollToTop"
        v-show="showButton"
    >
        Наверх
  </button>
</template>

<script setup>
import {useScroll} from '@/features/scroll.js'

const {showButton, scrollToTop} = useScroll()

</script>