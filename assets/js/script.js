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

});
