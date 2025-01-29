// script.js

// Função para adicionar um produto ao carrinho
function addToCart(productId) {
    // Lógica para adicionar o produto ao carrinho
    console.log(`Produto ${productId} adicionado ao carrinho.`);
}

// Função para exibir o carrinho
function viewCart() {
    // Lógica para exibir os itens do carrinho
    console.log('Exibindo itens do carrinho.');
}

// Função para finalizar a compra
function checkout() {
    // Lógica para finalizar a compra
    console.log('Finalizando a compra.');
}

// Função para alternar a visibilidade do menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden'); // Alterna a classe 'hidden' para mostrar ou esconder o menu
}
