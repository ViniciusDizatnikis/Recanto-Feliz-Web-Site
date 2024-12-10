// Obtém os elementos
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel .item');

// Variável para controle do deslocamento
let scrollAmount = 0;

// Atualiza a largura do item dinamicamente
function getItemWidth() {
    return carousel.offsetWidth; // Usa a largura do carrossel como referência
}

// Função para ajustar o scroll cíclico
function moveCarousel(amount) {
    const itemWidth = getItemWidth(); // Atualiza a largura do item sempre que for chamado
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
    moveCarousel(-getItemWidth()); // Move para a esquerda
});

// Evento para mover para a direita
nextButton.addEventListener('click', () => {
    moveCarousel(getItemWidth()); // Move para a direita
});

// Atualiza o carrossel ao redimensionar a tela
window.addEventListener('resize', () => {
    scrollAmount = 0; // Reinicia o scroll ao redimensionar
    carousel.scrollTo({ left: 0 }); // Move o carrossel para o início
});
