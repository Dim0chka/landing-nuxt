<template>
    <button
        class="fixed bottom-4 w-[46px] h-[46px] right-4 bg-[#45A29E] border-[1px] border-[#45A29E] hover:border-[#66FCF1] rounded-full text-white"
        @click="scrollToTop"
        v-show="showButton"
    >   
        <font-awesome-icon :icon="['fas', 'arrow-up']" />
    </button>
</template>

<script setup>
import {useScroll} from '@/features/scroll.js'

const {showButton, scrollToTop} = useScroll()

</script>