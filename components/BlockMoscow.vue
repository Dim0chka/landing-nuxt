<template>
    <div class="lg:bg-moscow-pattern relative bg-moscow-pattern2 before:content-[0] bg-[#000000] w-full bg-opacity-50 bg-no-repeat bg-cover bg-center py-24 sm:py-32">
        <div class="absolute top-0 left-0 w-full h-full bg-black lg:opacity-0 opacity-50"></div>
        <div class="mx-auto max-w-6xl px-6 lg:px-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16 text-center justify-center lg:grid-cols-4">
            <dl v-for="stat in stats" :key="stat.id" class="items-center flex lg:max-w-xs flex-col gap-y-4">
                <hr class="h-0.5 w-[235px] lg:w-full bg-[#66FCF1] border-0 dark:bg-[#66FCF1]">
                <dt class="text-btn text-white">{{ stat.name }}</dt>
                <dd class="order-first text-5xl lg:text-[2.5rem] text-white sm:text-6xl">{{ stat.value }}</dd>
            </dl>
          </div>
        </div>
    </div>
</template>

<script setup>

// function onEntry(entries) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('animate-delay');
//     }
//   });
// }


const stats = [
  {id: 1, name: 'реализованных проектов', value: '>100'},
  {id: 2, name: 'кв. м. оформленных объектов', value: '150 000 '},
  {id: 3, name: 'удачно завершенных дел', value: '99%'},
  {id: 4, name: 'довольных клиентов', value: '>100'}
]
</script>

<style lang="scss" scoped>
.demo {
  opacity: 0;
  transform: translateY(10px);
  -webkit-transform: translateY(20px);
  -moz-transform: translateY(20px);
  -ms-transform: translateY(20px);
  -o-transform: translateY(20px);
}

.animate-delay {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: animate-delay;
}

@keyframes animate-delay {
  0% {
    opacity: 0;
    transform: translateY(10px);
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
  }
}
</style>