<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loja de Pods</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        
        #product-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }

        .product {
            width: 200px;
            text-align: center;
            border: 1px solid #ddd;
            padding: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .product img {
            width: 100%;
            height: auto;
        }

        #product-popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            padding: 20px;
            border: 2px solid #000;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 999;
            display: none;
        }

        #flavors-list {
            list-style-type: none;
            padding: 0;
        }

        #flavors-list button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px;
            margin: 5px;
            cursor: pointer;
        }

        #flavors-list button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

    <div id="product-container">
        <!-- Produto 1 -->
        <div class="product" id="product1">
            <img src="produto1.jpg" alt="Promoção V150">
            <h3>PROMOÇÃO V150</h3>
            <p>Preço: 125$</p>
            <button onclick="showProductDetails('product1')">Ver Sabores</button>
        </div>

        <!-- Produto 2 -->
        <div class="product" id="product2">
            <img src="produto2.jpg" alt="ELFBAR BC 10K">
            <h3>ELFBAR BC 10K</h3>
            <p>Preço: 115$</p>
            <button onclick="showProductDetails('product2')">Ver Sabores</button>
        </div>

        <!-- Produto 3 -->
        <div class="product" id="product3">
            <img src="produto3.jpg" alt="Elfbar Ice King 40K">
            <h3>Elfbar Ice King 40K</h3>
            <p>Preço: 165$</p>
            <button onclick="showProductDetails('product3')">Ver Sabores</button>
        </div>

        <!-- Produto 4 -->
        <div class="product" id="product4">
            <img src="produto4.jpg" alt="ELFBAR GH 23K">
            <h3>ELFBAR GH 23K</h3>
            <p>Preço: 150$</p>
            <button onclick="showProductDetails('product4')">Ver Sabores</button>
        </div>

        <!-- Produto 5 -->
        <div class="product" id="product5">
            <img src="produto5.jpg" alt="LOST MARY 5K">
            <h3>LOST MARY 5K</h3>
            <p>Preço: 90$</p>
            <button onclick="showProductDetails('product5')">Ver Sabores</button>
        </div>

        <!-- Produto 6 -->
        <div class="product" id="product6">
            <img src="produto6.jpg" alt="LOST MARY 20K">
            <h3>LOST MARY 20K</h3>
            <p>Preço: 130$</p>
            <button onclick="showProductDetails('product6')">Ver Sabores</button>
        </div>

        <!-- Produto 7 -->
        <div class="product" id="product7">
            <img src="produto7.jpg" alt="IGNITE V50 BLACK">
            <h3>IGNITE V50 BLACK</h3>
            <p>Preço: 95$</p>
            <button onclick="showProductDetails('product7')">Ver Sabores</button>
        </div>

        <!-- Produto 8 -->
        <div class="product" id="product8">
            <img src="produto8.jpg" alt="IGNITE V80">
            <h3>IGNITE V80</h3>
            <p>Preço: 120$</p>
            <button onclick="showProductDetails('product8')">Ver Sabores</button>
        </div>

        <!-- Produto 9 -->
        <div class="product" id="product9">
            <img src="produto9.jpg" alt="RABBEATS 10K">
            <h3>RABBEATS 10K</h3>
            <p>Preço: 95$</p>
            <button onclick="showProductDetails('product9')">Ver Sabores</button>
        </div>

        <!-- Produto 10 -->
        <div class="product" id="product10">
            <img src="produto10.jpg" alt="OXBAR 30K">
            <h3>OXBAR 30K</h3>
            <p>Preço: 130$</p>
            <button onclick="showProductDetails('product10')">Ver Sabores</button>
        </div>

    </div>

    <div id="product-popup">
        <h2 id="product-title"></h2>
        <ul id="flavors-list"></ul>
        <button id="add-to-cart" onclick="addToCart()">Adicionar ao Carrinho</button>
        <button onclick="closePopup()">Fechar</button>
    </div>

    <script>
        const products = {
            product1: {
                name: "PROMOÇÃO V150",
                price: "125$",
                flavors: ["Strawberry Ice", "Icy Mint", "Watermelon Ice", "Cherry Watermelon Ice", "Watermelon Dragon Fruit"]
            },
            product2: {
                name: "ELFBAR BC 10K",
                price: "115$",
                flavors: ["Blue Razz Ice", "Admiration Blue"]
            },
            product3: {
                name: "Elfbar Ice King 40K",
                price: "165$",
                flavors: ["Cherry Fuse", "Blue Razz Ice"]
            },
            product4: {
                name: "ELFBAR GH 23K",
                price: "150$",
                flavors: ["Miami Mint"]
            },
            product5: {
                name: "LOST MARY 5K",
                price: "90$",
                flavors: ["Yummy", "Ginger Beer"]
            },
            product6: {
                name: "LOST MARY 20K",
                price: "130$",
                flavors: ["Miami Mint", "Peach+", "Pure Ice"]
            },
            product7: {
                name: "IGNITE V50 BLACK",
                price: "95$",
                flavors: ["Blue Dream", "Peach Mango Watermelon", "Strawberry Kiwi", "Aloe Grape", "Watermelon Mix", "Peach Raspberry", "Strawberry Banana"]
            },
            product8: {
                name: "IGNITE V80",
                price: "120$",
                flavors: ["Strawberry Kiwi (Silver)", "Blueberry Ice (Silver)", "Banana Ice (Silver)", "Banana Cherry (Silver)", "Strawberry Ice (Silver)", "Cactus (Silver)"]
            },
            product9: {
                name: "RABBEATS 10K",
                price: "95$",
                flavors: ["Clear", "Cherry Lemon", "Strawberry Kiwi Ice"]
            },
            product10: {
                name: "OXBAR 30K",
                price: "130$",
                flavors: ["Mr Bull"]
            }
        };

        function showProductDetails(productId) {
            const product = products[productId];
            document.getElementById('product-title').textContent = product.name;
            const flavorsList = document.getElementById('flavors-list');
            flavorsList.innerHTML = ''; // Limpa a lista
            product.flavors.forEach(flavor => {
                const flavorButton = document.createElement('button');
                flavorButton.textContent = flavor;
                flavorButton.onclick = function () {
                    addToCart(productId, flavor);
                };
                flavorsList.appendChild(flavorButton);
            });
            document.getElementById('product-popup').style.display = 'block';
        }

        function closePopup() {
            document.getElementById('product-popup').style.display = 'none';
        }

        let cart = [];

        function addToCart(productId, flavor) {
            const product = products[productId];
            cart.push({ name: product.name, flavor: flavor
