// Função para adicionar a classe de rolagem quando o usuário rola a página
window.addEventListener("scroll", function() {
    const logo = document.querySelector('.scrolling-logo');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        logo.classList.add('scroll');
    } else {
        logo.classList.remove('scroll');
    }
});
