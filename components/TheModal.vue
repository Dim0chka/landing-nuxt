<template>
    <TransitionRoot  as="template" :show="props.open">
      <Dialog as="div" class="relative z-50" @click="$emit('update:open', false)">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-70">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center">
              <slot/>
          </div>
        </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </template>
  
  <!-- enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0">
   -->
<script setup>
import { ref, defineProps } from 'vue'
import { Dialog, TransitionChild, TransitionRoot } from '@headlessui/vue'

const props = defineProps({
    open: {
        type: Boolean
    }
})
</script>