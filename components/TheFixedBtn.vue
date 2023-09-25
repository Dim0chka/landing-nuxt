<template>
    <transition name="fade">
        <button
        class="fixed bottom-4 w-[46px] h-[46px] right-4 bg-[#45A29E] border-[1px] border-[#45A29E] hover:border-[#66FCF1] rounded-full text-white"
        @click="scrollToTop"
        v-show="showButton"
    >   
        <font-awesome-icon :icon="['fas', 'arrow-up']" />
    </button>
    </transition>
</template>

<script setup>
import {useScroll} from '@/features/scroll.js'

const {showButton, scrollToTop} = useScroll()

</script>

<style>
.fade-enter-active {
    animation: animateA .5s;
}

.fade-leave-active {
    animation: animateL .5s;
}

@keyframes animateA {
    from {
        transform: translateY(100px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes animateL {
    from {
        transform: translateY(0);
        opacity: 1;
    }

    to {
        transform: translateY(100px);
        opacity: 0;
    }
}


</style>