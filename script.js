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

        // Adiciona evento de clique aos botões de sabor quando o menu abre
        flavorsDiv.addEventListener("click", (event) => {
            if (event.target.classList.contains("flavor-btn")) {
                const productNameText = product.getAttribute("data-name");
                const productPrice = product.getAttribute("data-price");
                const selectedFlavor = event.target.textContent;

                addToCart(productNameText, selectedFlavor, productPrice);
            }
        });
    });
});

// Função para adicionar itens ao carrinho
function addToCart(productName, flavor, price) {
    let cart = document.getElementById("cart");

    // Se o carrinho ainda não existir, cria um
    if (!cart) {
        cart = document.createElement("ul");
        cart.id = "cart";
        document.body.appendChild(cart); // Adiciona o carrinho ao final do body
    }

    const cartItem = document.createElement("li");
    cartItem.textContent = `${productName} - ${flavor} - $${price}`;
    cart.appendChild(cartItem);
}
