window.addEventListener('scroll', function() {
    var body = document.body;
    var offset = window.pageYOffset;

    // Quando rolar 100px ou mais
    if (offset > 100) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }

    // Código para rolar a imagem para cima
    var img = document.getElementById("rolling-img");
    img.style.transform = "translateY(-" + offset / 2 + "px)";
});
