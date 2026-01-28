document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
<<<<<<< HEAD
    const intervalTime = 3000; // 3 seconds
=======
    const intervalTime = 3000; // 3 segundos
>>>>>>> e3050b69801e8663f7cb983316ceb1834e2308cf
    let currentSlide = 0;
    let slideInterval;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function prevSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

<<<<<<< HEAD
    // Initialize Auto Play
    slideInterval = setInterval(nextSlide, intervalTime);

    // Event Listeners
    if (nextBtn && prevBtn) {
=======
    // Inicia Autoplay
    slideInterval = setInterval(nextSlide, intervalTime);

    // Controles Manuais
    if(nextBtn && prevBtn) {
>>>>>>> e3050b69801e8663f7cb983316ceb1834e2308cf
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });
    }

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
