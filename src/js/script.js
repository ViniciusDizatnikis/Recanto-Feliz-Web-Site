//Menu PC -------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todas as seções com IDs e os links do menu
    const sections = document.querySelectorAll('div[id]');
    const menuLinks = document.querySelectorAll('.menu a');
    const menuLinksMobile = document.querySelectorAll('.menu-mobile a');

    function updateActiveLink() {
        const offsetAdjustment = 280; 
        let currentSection = ''; 

        // Determina a seção visível com base no topo ajustado
        sections.forEach(section => {
            const sectionTop = section.offsetTop - offsetAdjustment;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });

        // Atualiza os links com a classe
        [...menuLinks, ...menuLinksMobile].forEach(link => {
            link.classList.toggle('active', link.getAttribute('href').substring(1) === currentSection);
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    updateActiveLink();
});

// Funcionalidade do menu móvel-----------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuMobileIcon');
    const menuMobile = document.getElementById('menuMobile');

    // Abre/fecha o menu ao clicar no ícone
    menuIcon.addEventListener('click', () => {
        menuMobile.classList.toggle('active');
    });

    // Fechar o menu ao clicar em um link
    document.querySelectorAll('.menu-mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            menuMobile.classList.remove('active');
        });
    });

    // Fechar o menu ao clicar fora dele
    window.addEventListener('click', (e) => {
        if (!menuMobile.contains(e.target) && !menuIcon.contains(e.target)) {
            menuMobile.classList.remove('active');
        }
    });
});

// Funcionalidade do pop-up
const linkCriador = document.getElementById('link-criador');
const popup = document.getElementById('popup');
const close = document.getElementById('close');
const linkContato = document.getElementById('link-contato');

// Exibe o pop-up ao clicar em "Desenvolvido por"
linkCriador.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'flex';
});

// Fecha o pop-up ao clicar no "X"
close.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Fecha o pop-up ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

// Exibe o pop-up ao clicar em "Contato"
linkContato.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'flex';
});
