document.addEventListener('DOMContentLoaded', () => {
    // Atualizar o link ativo no menu com base na seção visível
    const sections = document.querySelectorAll('div[id]'); // Seleciona as seções com IDs
    const menuLinks = document.querySelectorAll('.menu a');

    function updateActiveLink() {
        let currentSection = '';

        // Verifica qual seção está visível
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const nextSectionTop = sections[index + 1]?.offsetTop || Infinity;

            // Verifica se a rolagem está dentro da seção atual
            if (window.scrollY >= sectionTop - 500 && window.scrollY < nextSectionTop - 500) {
                currentSection = section.getAttribute('id');
            }
        });

        // Atualiza a classe 'active' no menu
        menuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Adiciona o evento de scroll para atualizar a classe ativa
    window.addEventListener('scroll', updateActiveLink);

    // Chama a função ao carregar a página
    updateActiveLink();
});

document.addEventListener('DOMContentLoaded', function () {
    // Funcionalidade do menu móvel
    const menuIcon = document.getElementById('menuMobileIcon');
    const menuMobile = document.getElementById('menuMobile');

    menuIcon.addEventListener('click', function () {
        menuMobile.classList.toggle('active');
    });

    // Fechar o menu ao clicar em um link
    const links = document.querySelectorAll('.menu-mobile-link');
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            menuMobile.classList.remove('active');
            console.log('Menu fechado ao clicar em um link.');
        });
    });

    // Fechar o menu ao clicar fora dele
    window.addEventListener('click', function (e) {
        if (!menuMobile.contains(e.target) && !menuIcon.contains(e.target)) {
            menuMobile.classList.remove('active');
        }
    });
});
