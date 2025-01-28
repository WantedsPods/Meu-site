// Exemplo de script para exibir os itens no carrinho
function mostrarCarrinho() {
    const carrinhoElement = document.getElementById("carrinho");
    carrinhoElement.innerHTML = "";

    if (carrinho.length === 0) {
        carrinhoElement.innerHTML = "<p>Seu carrinho está vazio!</p>";
    } else {
        carrinho.forEach((item, index) => {
            const produtoElement = document.createElement("div");
            produtoElement.textContent = `${item.nome} - R$${item.preco}`;
            carrinhoElement.appendChild(produtoElement);
        });
    }
}
