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
    });
});
