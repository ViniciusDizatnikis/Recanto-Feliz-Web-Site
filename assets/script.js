// Função genérica para criar carrossel manual
function initCarousel(slideSelector, prevSelector, nextSelector) {
    const slides = document.querySelectorAll(slideSelector);
    const prevButton = document.querySelector(prevSelector);
    const nextButton = document.querySelector(nextSelector);

    let currentSlide = 0;

    function updateSlides() {
        const slideWidth = slides[0].clientWidth;
        slides[0].parentElement.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    });

    updateSlides();
}

// Função para carrossel automático
async function carouselAutomatic(slideSelector) {
    const slides = document.querySelectorAll(slideSelector);
    let currentSlide = 0;

    function updateSlides() {
        const slideWidth = slides[0].clientWidth;
        slides[0].parentElement.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    while (true) {
        await esperar(4000); // Espera 3 segundos
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }
}

// Função de espera
function esperar(tempo) {
    return new Promise((resolve) => setTimeout(resolve, tempo));
}

// Inicializar os dois carrosséis
carouselAutomatic('.slides1 img');
initCarousel('.slides1 img', '.prev_1', '.next_1');
initCarousel('.slides2 img', '.prev_2', '.next_2');
initCarousel('.slides3 img', '.prev_3', '.next_3');
