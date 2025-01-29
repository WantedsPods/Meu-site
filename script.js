<script>
    let cart = [];

    // Função para alternar visibilidade dos sabores
    function toggleFlavors(productId) {
        const flavorDiv = document.getElementById(productId);
        flavorDiv.style.display = (flavorDiv.style.display === 'none' ? 'block' : 'none');
    }

    // Função para adicionar um item ao carrinho
    function addToCart(productName, flavor, price) {
        const existingProduct = cart.find(item => item.productName === productName && item.flavor === flavor);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ productName, flavor, price, quantity: 1 });
        }
        updateCart();
    }

    // Função para remover item do carrinho
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    // Função para atualizar o carrinho
    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        cartItems.innerHTML = '';

        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.productName} - ${item.flavor} x${item.quantity} - $${item.price * item.quantity}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.onclick = () => removeFromCart(index);
            li.appendChild(removeButton);
            cartItems.appendChild(li);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = `Total: $${total}`;
    }

    // Função para limpar o carrinho
    function clearCart() {
        cart = [];
        updateCart();
    }
</script>
