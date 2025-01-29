document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const productName = product.querySelector(".product-name");
        const flavorsDiv = product.querySelector(".flavors");

        productName.addEventListener("click", () => {
            // Fecha todos os outros menus antes de abrir o atual
            document.querySelectorAll(".flavors").forEach(div => {
                if (div !== flavorsDiv) div.style.display = "none";
            });

            // Alterna a visibilidade do menu atual
            flavorsDiv.style.display = (flavorsDiv.style.display === "none" || flavorsDiv.style.display === "") ? "block" : "none";
        });

        // Clique em um sabor para adicionar ao carrinho
        const flavorButtons = flavorsDiv.querySelectorAll(".flavor-btn");
        flavorButtons.forEach(button => {
            button.addEventListener("click", () => {
                const productNameText = product.getAttribute("data-name");
                const productPrice = product.getAttribute("data-price");
                const selectedFlavor = button.textContent;

                addToCart(productNameText, selectedFlavor, productPrice);
            });
        });
    });
});

// Função para adicionar itens ao carrinho
function addToCart(productName, flavor, price) {
    const cart = document.getElementById("cart");
    
    // Verifica se o item já existe no carrinho
    const existingItem = Array.from(cart.children).find(item => {
        return item.textContent.includes(productName) && item.textContent.includes(flavor);
    });

    if (existingItem) {
        // Se o item já estiver no carrinho, apenas incrementa a quantidade
        const quantity = existingItem.querySelector(".quantity");
        quantity.textContent = parseInt(quantity.textContent) + 1;
    } else {
        // Se não, cria um novo item no carrinho
        const cartItem = document.createElement("li");
        cartItem.textContent = `${productName} - ${flavor} - $${price} - `;

        const quantity = document.createElement("span");
        quantity.classList.add("quantity");
        quantity.textContent = 1;
        cartItem.appendChild(quantity);

        // Adiciona botão de remover
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remover";
        removeBtn.classList.add("remove-btn");
        removeBtn.addEventListener("click", () => {
            cartItem.remove();
        });

        cartItem.appendChild(removeBtn);
        cart.appendChild(cartItem);
    }
}
