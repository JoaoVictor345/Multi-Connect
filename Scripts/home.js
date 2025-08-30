    // Lista de cidades
    const cidades = [
      "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Fortaleza",
      "Recife", "Salvador", "Porto Alegre", "Brasília", "Manaus",
      "Curitiba", "Belém", "Goiânia", "Natal", "Campo Grande", "Tauá", "Aiuaba",
      "Parambu", "São João dos Inhamuns"
    ];

    // Dados do aplicativo
    let appData = {
      isLoggedIn: false,
      userName: '',
      userPhoto: '../imgs/user(1).png'
    };

    // Função para definir saudação
    function setGreeting() {
      const greetingElement = document.getElementById('greeting');
      const now = new Date();
      const hour = now.getHours();
      let greeting;

      if (hour < 12) {
        greeting = 'Bom dia';
      } else if (hour < 18) {
        greeting = 'Boa tarde';
      } else {
        greeting = 'Boa noite';
      }

      if (appData.isLoggedIn) {
        greetingElement.textContent = `${greeting}, ${appData.userName}!`;
      } else {
        greetingElement.textContent = `${greeting}! Visitante`;
      }

      if (!appData.isLoggedIn) {
        document.querySelector(".historico").innerHTML = `
          <div id="historico">
            <h1>Histórico de Compras</h1>
            <p>Faça login para acessar seu histórico de compras.</p>
          </div>`;
      }
    }

    // Função para ajustar header baseado no login
    function ajustarHeader() {
      const perfilArea = document.getElementById('perfilArea');
      const authButtons = document.getElementById('authButtons');
      const perfilFoto = document.getElementById('perfilFoto');

      if (appData.isLoggedIn) {
        perfilFoto.src = appData.userPhoto;
        perfilArea.style.display = 'flex';
        authButtons.style.display = 'none';
      } else {
        perfilArea.style.display = 'none';
        authButtons.style.display = 'flex';
      }
    }

    // Função para mostrar modal de login


    // Função para fechar modal de autenticação
    function closeAuthModal() {
      document.getElementById('loginModal').classList.remove('show');
      document.body.style.overflow = 'auto';
      // Limpar formulários
      clearForms();
    }




    function clearError(input) {
      const errorMessage = input.parentNode.querySelector('.error-message');
      if (errorMessage) {
        errorMessage.remove();
      }
      input.style.borderColor = '';
    }

    // Função para lidar com o login (DESABILITADA)
    function handleLogin(event) {
      event.preventDefault();
      alert('Funcionalidade de login temporariamente desabilitada para desenvolvimento.');
    }

    // Função para lidar com o cadastro
    function handleRegister(event) {
      event.preventDefault();
      
      const name = document.getElementById('registerName').value.trim();
      const email = document.getElementById('registerEmail').value.trim();
      const phone = document.getElementById('registerPhone').value.trim();
      const password = document.getElementById('registerPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const city = document.getElementById('registerCity').value;
      const agreeTerms = document.getElementById('agreeTerms').checked;
      
      let isValid = true;
      
      // Validar nome
      if (name.length < 2) {
        showError(document.getElementById('registerName'), 'Nome deve ter pelo menos 2 caracteres');
        isValid = false;
      } else {
        clearError(document.getElementById('registerName'));
      }
      
      // Validar email
      if (!isValidEmail(email)) {
        showError(document.getElementById('registerEmail'), 'Digite um email válido');
        isValid = false;
      } else {
        clearError(document.getElementById('registerEmail'));
      }
      
      // Validar telefone (se preenchido)
      if (phone && !isValidPhone(phone)) {
        showError(document.getElementById('registerPhone'), 'Digite um telefone válido: (00) 00000-0000');
        isValid = false;
      } else {
        clearError(document.getElementById('registerPhone'));
      }
      
      // Validar senha
      if (password.length < 6) {
        showError(document.getElementById('registerPassword'), 'Senha deve ter pelo menos 6 caracteres');
        isValid = false;
      } else {
        clearError(document.getElementById('registerPassword'));
      }
      
      // Validar confirmação de senha
      if (password !== confirmPassword) {
        showError(document.getElementById('confirmPassword'), 'Senhas não conferem');
        isValid = false;
      } else {
        clearError(document.getElementById('confirmPassword'));
      }
      
      // Validar cidade
      if (!city) {
        showError(document.getElementById('registerCity'), 'Selecione uma cidade');
        isValid = false;
      } else {
        clearError(document.getElementById('registerCity'));
      }
      
      // Validar termos
      if (!agreeTerms) {
        showError(document.getElementById('agreeTerms').parentNode, 'Você deve concordar com os termos');
        isValid = false;
      } else {
        clearError(document.getElementById('agreeTerms').parentNode);
      }
      
      if (isValid) {
        // Simular cadastro bem-sucedido
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = 'Cadastro realizado com sucesso! Fazendo login...';
        
        const form = event.target;
        form.insertBefore(successDiv, form.firstChild);
        
        // Simular delay e fazer login automático
        setTimeout(() => {
          appData = {
            isLoggedIn: true,
            userName: name,
            userEmail: email,
            userPhone: phone,
            userCity: city,
            userPhoto: '../imgs/user(1).png'
          };
          
          ajustarHeader();
          closeAuthModal();
          
          // Atualizar histórico para usuário logado
          document.querySelector(".historico").innerHTML = `
            <div id="historico">
              <h1>Histórico de Compras</h1>
              <p>Bem-vindo, ${appData.userName}! Sua conta foi criada com sucesso. Comece a explorar nossas ofertas!</p>
            </div>`;
          
          alert(`Bem-vindo ao MultiConnect, ${name}! Sua conta foi criada com sucesso.`);
        }, 1500);
      }
    }

    // Função para renderizar cards de produtos
    function renderCards() {
      const container = document.getElementById("cardContainer");
      container.innerHTML = '';

      produtos.forEach(produto => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img class="card-img" src="${produto.imagem}" alt="${produto.nome}">
          <h2>${produto.nome}</h2>
          <p>${produto.descricao}</p>
          <p style="font-weight: 600; color: var(--primary-blue); font-size: 16px; margin: 10px 20px;">Preço: R$ ${produto.preco.toFixed(2)}</p>
          <a href="./products.html?id=${produto.id}" class="card-button">Ver mais</a>`;
        container.appendChild(card);
      });

      if (produtos.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-gray);">Nenhum produto encontrado.</p>';
      }
    }

    // Função para renderizar lojas
    function renderStores() {
      const container = document.getElementById("storeContainer");
      container.innerHTML = '';
      
      lojas.forEach(loja => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img class="card-img" src="${loja.imagem}" alt="${loja.nome}">
          <h2>${loja.nome}</h2>
          <p>${loja.descricao}</p>
          <a href="../lojas-perfil/lojas-perfil.html?loja=${loja.id}" class="card-button">Ver mais</a>`;
        container.appendChild(card);
      });
    }

    // Funções para dropdown de cidades
    function showCities() {
      const cityList = document.getElementById("cityList");
      cityList.innerHTML = "";
      cidades.forEach(cidade => {
        const item = document.createElement("div");
        item.textContent = cidade;
        item.onclick = () => {
          document.getElementById("cityInput").value = cidade;
          cityList.style.display = "none";
        };
        cityList.appendChild(item);
      });
      cityList.style.display = "block";
    }

    function filterCities() {
      const cityInput = document.getElementById("cityInput");
      const cityList = document.getElementById("cityList");
      const termo = cityInput.value.toLowerCase();
      const filtradas = cidades.filter(cidade => cidade.toLowerCase().includes(termo));
      
      cityList.innerHTML = "";
      filtradas.forEach(cidade => {
        const item = document.createElement("div");
        item.textContent = cidade;
        item.onclick = () => {
          cityInput.value = cidade;
          cityList.style.display = "none";
        };
        cityList.appendChild(item);
      });
      cityList.style.display = filtradas.length ? "block" : "none";
    }

    // Funções para dropdown de produtos
    function showProducts() {
      const productList = document.getElementById("productList");
      productList.innerHTML = "";
      produtos.forEach(produto => {
        const item = document.createElement("div");
        item.classList.add("product-item");

        item.innerHTML = `
          <img src="${produto.imagem}" alt="${produto.nome}">
          <div class="product-info">
            <div class="product-name">${produto.nome}</div>
            <div class="product-price">R$ ${produto.preco.toFixed(2)}</div>
          </div>
        `;

        item.onclick = () => {
          document.getElementById("searchInput").value = produto.nome;
          productList.style.display = "none";
        };

        productList.appendChild(item);
      });
      productList.style.display = "block";
    }

    function filterProducts() {
      const productInput = document.getElementById("searchInput");
      const productList = document.getElementById("productList");
      const termo = productInput.value.toLowerCase();
      const filtrados = produtos.filter(p => p.nome.toLowerCase().includes(termo));
      
      productList.innerHTML = "";

      filtrados.forEach(produto => {
        const item = document.createElement("div");
        item.classList.add("product-item");

        item.innerHTML = `
          <img src="${produto.imagem}" alt="${produto.nome}">
          <div class="product-info">
            <div class="product-name">${produto.nome}</div>
            <div class="product-price">R$ ${produto.preco.toFixed(2)}</div>
          </div>
        `;

        item.onclick = () => {
          productInput.value = produto.nome;
          productList.style.display = "none";
        };

        productList.appendChild(item);
      });

      productList.style.display = filtrados.length ? "block" : "none";
    }

    // Função de logout
    function logout() {
      appData = {
        isLoggedIn: false,
        userName: '',
        userPhoto: '../imgs/user(1).png'
      };
      
      alert('Logout realizado com sucesso!');
      setGreeting();
      ajustarHeader();
      
      // Resetar histórico
      document.querySelector(".historico").innerHTML = `
        <div id="historico">
          <h1>Histórico de Compras</h1>
          <p>Bem-vindo ao MultiConnect! Faça login para acessar recursos personalizados.</p>
        </div>`;
    }

    // Função para toggle do menu mobile
    function toggleMobileMenu() {
      // Esta função seria implementada para o menu mobile
      alert('Menu mobile - funcionalidade em desenvolvimento');
    }

    // Event listeners
    document.addEventListener('DOMContentLoaded', () => {
      setGreeting();
      ajustarHeader();
      renderCards();
      renderStores();

      // Scroll horizontal nos containers
      const containers = document.querySelectorAll('.card-container, .store-container, .header-nav');
      containers.forEach(container => {
        container.addEventListener('wheel', (e) => {
          e.preventDefault();
          container.scrollLeft += e.deltaY * 4;
        });
      });

      // Fechar dropdowns ao clicar fora
      document.addEventListener("click", function(event) {
        if (!event.target.closest(".search-bar")) {
          document.getElementById("cityList").style.display = "none";
          document.getElementById("productList").style.display = "none";
        }
      });

      // Formatação automática do telefone
      document.getElementById('registerPhone').addEventListener('input', function() {
        formatPhone(this);
      });

      // Botão explorar no banner
      const promoBtn = document.querySelector('.promo-btn');
      promoBtn.addEventListener('click', () => {
        document.querySelector('.main-content').scrollIntoView({ 
          behavior: 'smooth' 
        });
      });
    });

    

    // Expor funções globalmente para uso inline
    window.showCities = showCities;
    window.filterCities = filterCities;
    window.showProducts = showProducts;
    window.filterProducts = filterProducts;
    window.logout = logout;
    window.showLoginModal = showLoginModal;
    window.closeAuthModal = closeAuthModal;
    window.showLoginForm = showLoginForm;
    window.showRegisterForm = showRegisterForm;
    window.handleLogin = handleLogin;
    window.handleRegister = handleRegister;
    window.toggleMobileMenu = toggleMobileMenu;