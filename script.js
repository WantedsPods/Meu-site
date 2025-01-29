document.addEventListener("DOMContentLoaded", function () {
    // Mostra ou esconde o carrinho quando clica no botão "Abrir Carrinho"
    document.getElementById("toggle-cart").addEventListener("click", function() {
        const cartContainer = document.getElementById("cart-container");
        cartContainer.style.display = cartContainer.style.display === "none" || cartContainer.style.display === "" ? "block" : "none";
    });

    // Ao clicar no nome do produto
    document.querySelectorAll(".product-name").forEach(product => {
        product.addEventListener("click", function () {
            let parent = this.parentElement;
            let details = parent.querySelector(".product-details");

            // Alterna a visibilidade da área de detalhes
            if (details.style.display === "block") {
                details.style.display = "none";
            } else {
                let flavors = parent.getAttribute("data-flavors").split(", ");
                
                // Garante que não duplique os sabores toda vez que clica
                details.innerHTML = `<p class="flavors-list"><strong>Sabores:</strong> ${flavors.join(", ")}</p>
                    <button class="add-to-cart">Adicionar ao Carrinho</button>`;
                
                details.style.display = "block";

                // Adiciona evento para o botão "Adicionar ao Carrinho"
                details.querySelector(".add-to-cart").addEventListener("click", function () {
                    let productNameText = parent.querySelector(".product-name").textContent;
                    let selectedFlavor = flavors.join(", "); // Aqui pegamos todos os sabores disponíveis
                    let productPrice = parent.getAttribute("data-price");

                    // Adiciona o produto ao carrinho
                    addToCart(productNameText, selectedFlavor, productPrice);
                });
            }
        });
    });

    // Finalizar compra - Aqui você pode adicionar um processo real de checkout
    document.getElementById("checkout-button").addEventListener("click", function() {
        const cart = document.getElementById("cart");
        const totalItems = cart.children.length;
        if (totalItems > 0) {
            alert(`Obrigado pela sua compra! Você comprou ${totalItems} itens.`);
            cart.innerHTML = "";  // Limpa o carrinho
            updateCartCount();
            document.getElementById("cart-container").style.display = "none";  // Fecha o carrinho
        } else {
            alert("O carrinho está vazio.");
        }
    });
});

// Função para adicionar itens ao carrinho
function addToCart(productName, flavor, price) {
    const cart = document.getElementById("cart"); // Referência ao carrinho
    const cartItem = document.createElement("li");
    cartItem.textContent = `${productName} - ${flavor} - $${price}`;
    cart.appendChild(cartItem);

    // Atualiza o contador do carrinho
    updateCartCount();
}

// Função para atualizar o contador de itens no carrinho
function updateCartCount() {
    const cart = document.getElementById("cart");
    const cartCount = document.querySelector(".cart-count");

    // Conta o número de itens no carrinho e atualiza o contador
    let itemCount = cart.children.length;
    cartCount.textContent = itemCount;
}
