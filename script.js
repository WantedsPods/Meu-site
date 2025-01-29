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
    const cartItem = document.createElement("li");
    cartItem.textContent = `${productName} - ${flavor} - $${price}`;
    cart.appendChild(cartItem);
}
