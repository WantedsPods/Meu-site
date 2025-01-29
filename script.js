document.addEventListener("DOMContentLoaded", function () {
    let cartCount = 0;

    document.querySelectorAll(".product-name").forEach(product => {
        product.addEventListener("click", function () {
            let parent = this.parentElement;
            let details = parent.querySelector(".product-details");

            // Se estiver visível, esconde. Se não, mostra.
            if (details.style.display === "block") {
                details.style.display = "none";
            } else {
                let flavors = parent.getAttribute("data-flavors").split(", ");
                let productName = parent.getAttribute("data-name");
                let price = parent.getAttribute("data-price");

                details.innerHTML = `<p class="flavors-list"><strong>Sabores:</strong> ${flavors.join(", ")}</p>
                    <button class="add-to-cart">Adicionar ao Carrinho</button>`;
                details.style.display = "block";

                details.querySelector(".add-to-cart").addEventListener("click", function () {
                    cartCount++;
                    document.querySelector(".cart-count").textContent = cartCount;
                });
            }
        });
    });
});
