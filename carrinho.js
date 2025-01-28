<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrinho - Wanteds Pods</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <div class="menu-items">
            <a href="index.html">Home</a>
            <a href="produtos.html">Produtos</a>
        </div>
    </header>

    <section class="cart">
        <h2>Carrinho de Compras</h2>
        <div id="cart-items">
            <!-- Itens do carrinho serão inseridos aqui -->
        </div>
        <div class="total">
            <p>Total: R$ <span id="total-price">0</span></p>
        </div>
        <button id="checkout-button">Finalizar Compra</button>
    </section>

    <script src="script.js"></script>
</body>
</html>
