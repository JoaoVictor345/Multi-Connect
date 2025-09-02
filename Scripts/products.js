
        // Funções
        function getParametroURL(param) {
            const params = new URLSearchParams(window.location.search);
            return params.get(param);
        }

        function carregarProduto() {
            const id = parseInt(getParametroURL('id'));
            
            if (!id) {
                window.location.href = 'home.html';
                return;
            }

            const produto = produtos.find(p => p.id === id);
            
            if (!produto) {
                window.location.href = 'home.html';
                return;
            }

            // Atualizar informações do produto
            document.getElementById('productTitle').textContent = produto.nome;
            document.getElementById('productDescription').textContent = produto.descricao;
            document.getElementById('currentPrice').textContent = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;
            document.getElementById('originalPrice').textContent = `R$ ${(produto.precoOriginal || produto.preco * 1.3).toFixed(2).replace('.', ',')}`;
            document.getElementById('breadcrumb-product').textContent = produto.nome;
            
            // Atualizar imagem principal
            document.getElementById('mainImage').src = produto.imagem;
            document.getElementById('mainImage').alt = produto.nome;
            
            // Gerar thumbnails
            const thumbnailContainer = document.getElementById('thumbnailContainer');
            const imagens = produto.imagens || [produto.imagem];
            thumbnailContainer.innerHTML = '';
            
            imagens.forEach((img, index) => {
                const thumbnail = document.createElement('img');
                thumbnail.src = img;
                thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
                thumbnail.onclick = () => changeMainImage(img, index);
                thumbnailContainer.appendChild(thumbnail);
            });
        }

        function changeMainImage(src, index) {
            document.getElementById('mainImage').src = src;
            document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
                thumb.classList.toggle('active', i === index);
            });
        }

        function showTab(tabName) {
            // Esconder todas as tabs
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Mostrar tab selecionada
            document.getElementById(tabName).classList.add('active');
            event.target.classList.add('active');
        }

        function increaseQuantity() {
            const input = document.getElementById('quantity');
            const currentValue = parseInt(input.value);
            if (currentValue < 99) {
                input.value = currentValue + 1;
            }
        }

        function decreaseQuantity() {
            const input = document.getElementById('quantity');
            const currentValue = parseInt(input.value);
            if (currentValue > 1) {
                input.value = currentValue - 1;
            }
        }

        function buyNow() {
            const quantidade = document.getElementById('quantity').value;
            alert(`🎉 Redirecionando para pagamento!\nQuantidade: ${quantidade}`);
        }

        function addToCart() {
            const quantidade = document.getElementById('quantity').value;
            alert(`🛒 ${quantidade} item(s) adicionado(s) ao carrinho!`);
        }

        function addToWishlist() {
            alert('❤️ Produto adicionado aos favoritos!');
        }

        // Carregar produto quando a página carregar
        window.onload = carregarProduto;

    function ajustarHeader() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const perfilArea = document.getElementById('perfilArea');
        const perfilFoto = document.getElementById('perfilFoto');

        if (perfilArea && perfilFoto) {
            if (isLoggedIn) {
                const foto = localStorage.getItem('userPhoto') || '../imgs/user(1).png';
                perfilFoto.src = foto;
                perfilArea.style.display = 'flex';
            } else {
                perfilArea.style.display = 'none';
            }
        }
    }

    document.addEventListener('DOMContentLoaded', ajustarHeader);

    function carrinho() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (!isLoggedIn) {
            alert('Você precisa estar logado para acessar o carrinho.');
            window.location.href = '../Login/login.html';
            return;
        }
        window.location.href = '../carrinho/index.html';
    }