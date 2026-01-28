document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const intervalTime = 3000; // Troca a cada 3 segundos
    let currentSlide = 0;

    function nextSlide() {
        // Remove classe ativa do slide atual
        slides[currentSlide].classList.remove('active');
        
        // Calcula o índice do próximo slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Adiciona classe ativa ao novo slide
        slides[currentSlide].classList.add('active');
    }

    // Inicia o intervalo automático
    const slideInterval = setInterval(nextSlide, intervalTime);

    // Opcional: Pausar quando passar o mouse por cima
    const carouselContainer = document.querySelector('.hero-image-container');
    if(carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
    }
});
