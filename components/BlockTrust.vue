<template>
    <div id="trust" class="overflow-hidden mb-20 py-16 sm:py-16">
        <div class="mx-auto max-w-[1363px] lg:px-8">
            <div class="grid gap-y-[5.875rem] grid-cols-1 ">
                <h1 class="trust uppercase text-center text-title">Нам доверяют</h1>
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
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'


onMounted(() => {
  let delay = 0.2;
  const animatedElements = new Set(); 
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedElements.has(entry.target)) {
          entry.target.style.animationDelay = `${delay}s`;
          entry.target.classList.add('animate-delay-trust');
          delay += 0.2;
          animatedElements.add(entry.target); // Добавляем элемент в множество после анимации
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  document.querySelectorAll('.trust').forEach((item) => {
    observer.observe(item);
  });
});

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
        snapAlign: 'center'
    }
}

</script>

<style scoped>
.animate-delay-trust {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: animate-delay-trust;
}

@keyframes animate-delay-trust {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.trust {
  opacity: 0;
}

.carousel__slide {
    padding: 5px;
  }
  
.carousel__viewport {
  perspective: 3000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}


@media (min-width: 1024px) {

  .carousel__slide {
    opacity: 0.9;
    transform: scale(1);
  }
  
  .carousel__slide--active ~ .carousel__slide {
    transform:  scale(1);
  }
  
  .carousel__slide--prev {
    opacity: 1;
    transform: scale(1);
  }
  
  .carousel__slide--next {
    opacity: 1;
    transform: scale(1);
  }
  
  .carousel__slide--active {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
