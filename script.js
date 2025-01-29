document.addEventListener("DOMContentLoaded", function () {
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
                    let cartCount = document.querySelector(".cart-count");
                    cartCount.textContent = parseInt(cartCount.textContent) + 1;
                });
            }
        });
    });
});
