<template>
    <input :value="props.modelValue" @input="$emit('update:modelValue', $event.target.value)" class="bg-white ring-[1px] ring-[#6A7275] text-[#2E3639] text-title-form rounded-lg focus:outline-none focus:ring-[2px] focus:ring-[#66FCF1] block w-full p-[1rem_1rem_1rem_1.5rem] placeholder:text-title-form placeholder:text-[#C5C6C7]" required>
</template>

<script setup>
import {ref, defineProps} from 'vue'

const props = defineProps({
    modelValue: [String, Number]
})


</script>