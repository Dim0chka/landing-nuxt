<template>
    <Carousel :itemsToShow="4" :wrapAround="true" :transition="500" :breakpoints="breakpoints">
        <Slide class="flex items-center justify-between">
            <img width="226" height="226" src="~/assets/img/logo1.png" alt="">
        </Slide>
        <Slide class="flex items-center justify-between">
            <img width="200" height="226" src="~/assets/img/logo2.png" alt="">
        </Slide>
        <Slide class="flex items-center justify-between">
            <img width="226" height="226" src="~/assets/img/logo3.png" alt="">
        </Slide>
        <Slide class="flex items-center justify-between">
            <img width="400" height="226" src="~/assets/img/logo4.png" alt="">
        </Slide>
    </Carousel>
</template>

<script setup>
const breakpoints = {
    1024: {
        itemsToShow: 4,
        snapAlign: 'start',
    },
    700: {
        itemsToShow: 3,
        snapAlign: 'center',
    },

    300: {
        itemsToShow: 1,
        snapAlign: 'center',
    }
}
</script>