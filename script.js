// Exemplo de produtos com sabores e preços
const produtos = {
    produto1: {
        nome: "*PROMOÇÃO V150*",
        preco: 125,
        sabores: [
            "Strawberry Ice", "Icy Mint", "Watermelon Ice", 
            "Cherry Watermelon Ice", "Watermelon Dragon Fruit"
        ],
        imagem: "produto1.jpg"
    },
    produto2: {
        nome: "*ELFBAR BC 10K (especial edition)",
        preco: 115,
        sabores: ["Blue Razz Ice", "Admiration Blue"],
        imagem: "produto2.jpg"
    },
    produto3: {
        nome: "*Elfbar Ice King 40K",
        preco: 165,
        sabores: ["Cherry Fuse", "Blue Razz Ice"],
        imagem: "produto3.jpg"
    },
    produto4: {
        nome: "*ELFBAR GH 23K",
        preco: 150,
        sabores: ["Miami Mint"],
        imagem: "produto4.jpg"
    },
    produto5: {
        nome: "*LOST MARY 5K",
        preco: 90,
        sabores: ["Yummy", "Ginger Beer"],
        imagem: "produto5.jpg"
    },
    produto6: {
        nome: "*LOST MARY 20K",
        preco: 130,
        sabores: ["Miami Mint", "Peach+", "Pure Ice"],
        imagem: "produto6.jpg"
    },
    produto7: {
        nome: "*IGNITE V50 BLACK",
        preco: 95,
        sabores: ["Blue Dream", "Peach Mango Watermelon", "Strawberry Kiwi", "Aloe Grape", "Watermelon Mix", "Peach Raspberry", "Strawberry Banana"],
        imagem: "produto7.jpg"
    },
    produto8: {
        nome: "*IGNITE V80",
        preco: 120,
        sabores: ["Strawberry Kiwi (Silver)", "Blueberry Ice (Silver)", "Banana Ice (Silver)", "Banana Cherry (Silver)", "Strawberry Ice (Silver)", "Cactus (Silver)"],
        imagem: "produto8.jpg"
    },
    produto9: {
        nome: "*RABBEATS 10K",
        preco: 95,
        sabores: ["Clear", "Cherry Lemon", "Strawberry Kiwi Ice"],
        imagem: "produto9.jpg"
    },
    produto10: {
        nome: "*OXBAR 30K",
        preco: 130,
        sabores: ["Mr Bull"],
        imagem: "produto10.jpg"
    }
};

let cart = [];

// Função para mostrar os detalhes do produto
function showProductDetails(productId) {
    const product = produtos[productId];
    document.getElementById("product-title").innerText = product.nome;
    document.getElementById("popup-image").src = product.imagem;

    let flavorList = '';
    product.sabores.forEach(sabor => {
        flavorList += `<div class="flavor-option">${sabor}</div>`;
    });
    document.getElementById("flavors-list").innerHTML = flavorList;

    document.getElementById("product-popup").style.display = 'flex';
    document.getElementById("add-to-cart").onclick = function() { addToCart(productId); };
}

// Função para fechar o pop-up de detalhes do produto
function closeProductDetails() {
    document.getElementById("product-popup").style.display = 'none';
}

// Função para adicionar ao carrinho
function addToCart(productId) {
    const product = produtos[productId];
    cart.push(product);
    updateCart();
    closeProductDetails();
}

// Função para atualizar o carrinho
function updateCart() {
    let cartContent = '';
    let total = 0;
    cart.forEach((product, index) => {
        cartContent += `<div class="cart-item">
            ${product.nome} - R$ ${product.preco}
        </div>`;
        total += product.preco;
    });

    document.getElementById("cart
