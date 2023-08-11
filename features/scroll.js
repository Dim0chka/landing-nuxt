import { ref, onMounted } from 'vue'

export function useScroll() {
    const showButton = ref(false);
      
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    onMounted(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 200) {
                showButton.value = true;
            } else {
                showButton.value = false;
            }
        });
    })

    return {
        showButton, 
        scrollToTop
    }
}