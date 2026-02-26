// --- PRELOADER LOGIC ---
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // We add a tiny delay to ensure a smooth transition even on fast connections
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 300);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const intervalTime = 2000; // 2 seconds
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

    // Initialize Auto Play
    slideInterval = setInterval(nextSlide, intervalTime);

    // Event Listeners for Manual Controls
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });
    }

    // Pause on Hover Logic
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        carouselContainer.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, intervalTime);
        });
    }

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    /* --- LIGHTBOX FUNCTIONALITY --- */
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-modal';
    lightbox.innerHTML = `
        <span class="close-lightbox">&times;</span>
        <img class="lightbox-content" src="" alt="Ampliada">
    `;
    document.body.appendChild(lightbox);

    const galleryImages = document.querySelectorAll('.gallery-img');
    const lightboxImg = lightbox.querySelector('.lightbox-content');
    const closeBtn = lightbox.querySelector('.close-lightbox');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            setTimeout(() => lightbox.classList.add('active'), 10);
            lightboxImg.src = img.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        setTimeout(() => lightbox.style.display = 'none', 300);
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            setTimeout(() => lightbox.style.display = 'none', 300);
        }
    });

    /* --- TESTIMONIALS SLIDER (Projects Page) --- */
    const testimonialSlider = document.querySelector('.testimonials-slider');
    if (testimonialSlider) {
        const tSlides = testimonialSlider.querySelectorAll('.testimonial-slide');
        const tPrevBtn = document.querySelector('.slider-arrow.prev');
        const tNextBtn = document.querySelector('.slider-arrow.next');
        let tCurrentSlide = 0;

        function showTSlide(index) {
            tSlides[tCurrentSlide].classList.remove('active');
            tCurrentSlide = index;
            if (tCurrentSlide >= tSlides.length) tCurrentSlide = 0;
            if (tCurrentSlide < 0) tCurrentSlide = tSlides.length - 1;
            tSlides[tCurrentSlide].classList.add('active');
        }

        if (tNextBtn) {
            tNextBtn.addEventListener('click', () => {
                showTSlide(tCurrentSlide + 1);
            });
        }

        if (tPrevBtn) {
            tPrevBtn.addEventListener('click', () => {
                showTSlide(tCurrentSlide - 1);
            });
        }
    }
    /* --- ATELIÊ CAROUSEL LOGIC --- */
    function initAtelieCarousel(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const wrapper = container.querySelector('.atelie-carousel-wrapper');
        const slides = container.querySelectorAll('.atelie-carousel-slide');
        const prevBtn = container.querySelector('.prev');
        const nextBtn = container.querySelector('.next');
        let currentIndex = 0;

        function updateCarousel() {
            const isMobile = window.innerWidth <= 768;
            const slidesToMove = isMobile ? 1 : 2;
            const maxIndex = Math.max(0, slides.length - slidesToMove);

            if (currentIndex > maxIndex) currentIndex = maxIndex;
            if (currentIndex < 0) currentIndex = 0;

            const slideWidth = 100 / slidesToMove;
            wrapper.style.transform = `translateX(-${currentIndex * slideWidth}%)`;

            // Disable buttons if at ends
            if (prevBtn) prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
            if (nextBtn) nextBtn.style.opacity = currentIndex >= maxIndex ? '0.3' : '1';
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const isMobile = window.innerWidth <= 768;
                const step = isMobile ? 1 : 2;
                if (currentIndex < slides.length - (isMobile ? 1 : 2)) {
                    currentIndex++;
                    updateCarousel();
                }
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                }
            });
        }

        window.addEventListener('resize', updateCarousel);
        updateCarousel(); // Initial call
    }

    initAtelieCarousel('lab-carousel');
    initAtelieCarousel('curadoria-carousel');
});
