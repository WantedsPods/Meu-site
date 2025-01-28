// Função para abrir e fechar o menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Script para o carrinho de compras
let carrinho = [];

function addToCart(nomeProduto, preco) {
    carrinho.push({ nome: nomeProduto, preco: preco });
    alert(nomeProduto + " foi adicionado ao carrinho.");
}
