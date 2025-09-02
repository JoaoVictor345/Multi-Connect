        // Dados simulados do carrinho
        let cartItems = [];

        const shippingCost = 15.00;
        const discountAmount = 0.00;


        function continueShopping(){
            window.location.href = '../Lojas/lojas.html'
        }

        function renderCartItems() {
            const cartContainer = document.getElementById('cartItems');
            
            if (cartItems.length === 0) {
                cartContainer.innerHTML = `
                    <div class="empty-cart">
                        <div class="empty-cart-icon">🛒</div>
                        <h3>Seu carrinho está vazio</h3>
                        <p>Adicione alguns produtos para começar</p>
                        <button class="continue-shopping" onclick="continueShopping()">
                            Continuar Comprando
                        </button>
                    </div>
                `;
                return;
            }

            cartContainer.innerHTML = cartItems.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}" class="item-image">
                    <div class="item-details">
                        <div class="item-name">${item.name}</div>
                        <div class="item-description">${item.description}</div>
                        <div class="item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
                    </div>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeItem(${item.id})">🗑️</button>
                </div>
            `).join('');
        }

        function updateQuantity(itemId, change) {
            const item = cartItems.find(item => item.id === itemId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeItem(itemId);
                    return;
                }
                renderCartItems();
                updateSummary();
            }
        }

        function removeItem(itemId) {
            cartItems = cartItems.filter(item => item.id !== itemId);
            renderCartItems();
            updateSummary();
        }

        function updateSummary() {
            const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const shipping = cartItems.length > 0 ? shippingCost : 0;
            const total = subtotal + shipping - discountAmount;

            document.getElementById('subtotal').textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
            document.getElementById('shipping').textContent = `R$ ${shipping.toFixed(2).replace('.', ',')}`;
            document.getElementById('discount').textContent = `-R$ ${discountAmount.toFixed(2).replace('.', ',')}`;
            document.getElementById('total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        }

        function checkout() {
            if (cartItems.length === 0) {
                alert('Seu carrinho está vazio!');
                return;
            }
            alert('Redirecionando para o checkout...');
        }

        function goBack() {
            window.history.back();
        }

        // Inicializar a página
        document.addEventListener('DOMContentLoaded', function() {
            renderCartItems();
            updateSummary();
        });