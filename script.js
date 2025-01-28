let cart = [];

// Dados dos produtos
const products = {
    produto1: {
        name: "PROMOÇÃO V150",
        price: "125$",
        flavors: ["Strawberry Ice", "Icy Mint", "Watermelon Ice", "Cherry Watermelon Ice", "Watermelon Dragon Fruit"]
    },
    produto2: {
        name: "ELFBAR BC 10K",
        price: "115$",
        flavors: ["Blue Razz Ice", "Admiration Blue"]
    },
    produto3: {
        name: "Elfbar Ice King 40K",
        price: "165$",
        flavors: ["Cherry Fuse", "Blue Razz Ice"]
    },
    produto4: {
        name: "ELFBAR GH 23K",
        price: "150$",
        flavors: ["Miami Mint"]
    },
    produto5: {
        name: "LOST MARY 5K",
        price: "90$",
        flavors: ["Yummy", "Ginger Beer"]
    },
    produto6: {
        name: "LOST MARY 20K",
        price: "130$",
        flavors: ["Miami Mint", "Peach+", "Pure Ice"]
    },
    produto7: {
        name: "IGNITE V50 BLACK",
        price: "95$",
        flavors: ["Blue Dream", "Peach Mango Watermelon", "Strawberry Kiwi", "Aloe Grape", "Watermelon Mix", "Peach Raspberry", "Strawberry Banana"]
    },
    produto8: {
        name: "IGNITE V80",
        price: "120$",
        flavors: ["Strawberry Kiwi (Silver)", "Blueberry Ice (Silver)", "Banana Ice (Silver)", "Banana Cherry (Silver)", "Strawberry Ice (Silver)", "Cactus (Silver)"]
    },
    produto9: {
        name: "RABBEATS 10K",
        price: "95$",
        flavors: ["Clear", "Cherry Lemon", "Strawberry Kiwi Ice"]
    },
    produto10: {
        name: "OXBAR 30K",
        price: "130$",
        flavors: ["Mr Bull"]
    }
};

// Função para mostrar os detalhes do produto e sabores
function showProductDetails(productId) {
    const product = products[productId];
    const popup = document.getElementById('product-popup');
    const title = document.getElementById('product-title');
    const flavorsList = document.getElementById('flavors-list');
    const addButton = document.getElementById('add-to-cart');

    title.textContent = product.name + " - " + product.price;
    
    // Limpar sabores anteriores
    flavorsList.innerHTML = "";
    
    // Adicionar sabores ao popup
    product.flavors.forEach(flavor => {
        const flavorButton = document.createElement('button');
        flavorButton.textContent = flavor;
        flavorButton.onclick = () => selectFlavor(productId, flavor);
        flavorsList.appendChild(flavorButton);
    });
    
    // Exibir popup
    popup.style.display = 'flex';
    
    // Armazenar o produto no botão de adicionar ao carrinho
    addButton.setAttribute('data-product-id', productId);
}

// Função para fechar o popup de detalhes do produto
function closeProductDetails() {
    const popup = document.getElementById('product-popup');
    popup.style.display = 'none';
}

// Função para selecionar o sabor
function selectFlavor(productId, flavor) {
    const addButton = document.getElementById('add-to-cart');
    addButton.setAttribute('data-flavor', flavor);
    addButton.textContent = `Adicionar ${flavor} ao Carrinho`;
}

// Função para adicionar o produto ao carrinho
function addToCart() {
    const addButton = document.getElementById('add-to-cart');
    const productId = addButton.getAttribute('data-product-id');
    const flavor = addButton.getAttribute('data-flavor');
    
    if (!flavor) {
        alert("Por favor, selecione um sabor.");
        return;
    }

    const product = products[productId];
    
    // Adicionar o produto e
