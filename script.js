// Função para alternar o menu hamburguer
function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('active');
}

// Carrinho de compras (Simples contador)
let cartCount = 0;

function updateCartCount() {
    document.getElementById('cart-count').innerText = cartCount;
}

// Adicionar item ao carrinho (Exemplo)
function addToCart() {
    cartCount++;
    updateCartCount();
}
