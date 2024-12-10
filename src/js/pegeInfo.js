const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel .item');

let scrollAmount = 0;

// Função para atualizar a largura do item
function getItemWidth() {
    return items[0].offsetWidth; // Usa a largura do primeiro item como referência
}

// Função para ajustar o scroll cíclico
function moveCarousel(amount) {
    const itemWidth = getItemWidth(); // Atualiza a largura do item
    const maxScroll = (items.length - 1) * itemWidth;

    // Verifica se chegou ao fim ou ao início
    if (scrollAmount + amount < 0) {
        scrollAmount = maxScroll; // Volta para o final
    } else if (scrollAmount + amount > maxScroll) {
        scrollAmount = 0; // Volta para o início
    } else {
        scrollAmount += amount; // Desloca normalmente
    }

    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}

// Evento para mover para a esquerda
prevButton.addEventListener('click', () => {
    moveCarousel(-getItemWidth()); 
});

// Evento para mover para a direita
nextButton.addEventListener('click', () => {
    moveCarousel(getItemWidth());
});

// Atualiza o carrossel ao redimensionar a tela
window.addEventListener('resize', () => {
    // Atualiza a largura ao redimensionar, sem perder o controle do scroll
    scrollAmount = Math.min(scrollAmount, (items.length - 1) * getItemWidth());
    carousel.scrollTo({ left: scrollAmount });
});
