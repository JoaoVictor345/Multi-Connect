   function setGreeting() {
      const hour = new Date().getHours();
      let greeting = hour < 12 ? "Bom dia" : hour < 18 ? "Boa tarde" : "Boa noite";
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const userName = localStorage.getItem('userName');
      const greetingText = isLoggedIn && userName ? `${greeting}, ${userName}!` : `${greeting}, visitante!`;
      document.getElementById("greeting").textContent = greetingText;

      if (!isLoggedIn) {
        document.querySelector(".historico").innerHTML = `
          <div id="historico">
            <h1>Histórico de Compras</h1>
            <p>Faça login para acessar seu histórico de compras.</p>
          </div>`;
      }
    }

    function ajustarHeader() {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const perfilArea = document.getElementById('perfilArea');
      const authButtons = document.getElementById('authButtons');
      const perfilFoto = document.getElementById('perfilFoto');

      if (isLoggedIn) {
        const foto = localStorage.getItem('userPhoto') || '../imgs/user(1).png';
        perfilFoto.src = foto;
        perfilArea.style.display = 'flex';
        authButtons.style.display = 'none';
      } else {
        perfilArea.style.display = 'none';
        authButtons.style.display = 'flex';
      }
    }

    function renderCards() {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (!isLoggedIn) return;

      const container = document.getElementById("cardContainer");
      container.innerHTML = '';

      produtos.forEach(produto => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img class="card-img" src="${produto.imagem}" alt="${produto.nome}">
          <h2>${produto.nome}</h2>
          <p>${produto.descricao}</p>
          <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
          <a href="./products.html?id=${produto.id}">
            <button class="card-button">Ver mais</button>
          </a>`;
        container.appendChild(card);
      });

      if (produtos.length === 0) {
        container.innerHTML = '<p>Nenhum produto encontrado.</p>';
      }
    }

    function renderStores() {
      const container = document.getElementById("storeContainer");
      lojas.forEach(loja => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img class="card-img" src="${loja.imagem}" alt="${loja.nome}">
          <h2>${loja.nome}</h2>
          <p>${loja.descricao}</p>
          <a href="../lojas-perfil/lojas-perfil.html?loja=${loja.id}">
            <button class="card-button">Ver mais</button>
          </a>`;
        container.appendChild(card);
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      setGreeting();
      ajustarHeader();
      renderCards();
      renderStores();

      // Menu hambúrguer com animação melhorada
      const hamburger = document.getElementById("hamburger");
      const menu = document.getElementById("menu");
      const overlay = document.getElementById("overlay");

      // Função para abrir/fechar menu
      function toggleMenu() {
        hamburger.classList.toggle("active");
        menu.classList.toggle("open");
        overlay.classList.toggle("show");
        
        if (menu.classList.contains("open")) {
          overlay.style.display = "block";
          document.body.style.overflow = "hidden";
          // Previne scroll em iOS
          document.body.style.position = "fixed";
          document.body.style.width = "100%";
        } else {
          overlay.style.display = "none";
          document.body.style.overflow = "auto";
          document.body.style.position = "";
          document.body.style.width = "";
        }
      }

      // Event listeners para click e touch
      hamburger.addEventListener("click", toggleMenu);
      hamburger.addEventListener("touchend", (e) => {
        e.preventDefault();
        toggleMenu();
      });

      // Função para fechar menu
      function closeMenu() {
        hamburger.classList.remove("active");
        menu.classList.remove("open");
        overlay.classList.remove("show");
        overlay.style.display = "none";
        document.body.style.overflow = "auto";
        document.body.style.position = "";
        document.body.style.width = "";
      }

      overlay.addEventListener("click", closeMenu);
      overlay.addEventListener("touchend", closeMenu);

      // Fechar menu ao clicar em um link
      const menuLinks = document.querySelectorAll('.menu a');
      menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
        link.addEventListener('touchend', closeMenu);
      });

      // Scroll horizontal nos containers
      const containers = document.querySelectorAll('.card-container, .store-container');
      containers.forEach(container => {
        container.addEventListener('wheel', (e) => {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        });
      });
    });

    function logout() {
      localStorage.clear();
      window.location.href = '../login-cadastro/login-cadastro.html';
    }

    const cidades = [
    "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Fortaleza",
    "Recife", "Salvador", "Porto Alegre", "Brasília", "Manaus",
    "Curitiba", "Belém", "Goiânia", "Natal", "Campo Grande", "Tauá", "Aiuaba",
    "Parambu"
  ];

  const cityInput = document.getElementById("cityInput");
const cityList = document.getElementById("cityList");

function showCities() {
  cityList.innerHTML = "";
  cidades.forEach(cidade => {
    const item = document.createElement("div");
    item.textContent = cidade;
    item.onclick = () => {
      cityInput.value = cidade;  // <-- usa o input certo
      cityList.style.display = "none";
    };
    cityList.appendChild(item);
  });
  cityList.style.display = "block";
}

function filterCities() {
  const termo = cityInput.value.toLowerCase();
  const filtradas = cidades.filter(cidade => cidade.toLowerCase().includes(termo));
  cityList.innerHTML = "";
  filtradas.forEach(cidade => {
    const item = document.createElement("div");
    item.textContent = cidade;
    item.onclick = () => {
      cityInput.value = cidade;  // <-- usa o input certo
      cityList.style.display = "none";
    };
    cityList.appendChild(item);
  });
  cityList.style.display = filtradas.length ? "block" : "none";
}


  const productInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");

function showProducts() {
  productList.innerHTML = "";
  nomesProdutos.forEach(nome => {
    const item = document.createElement("div");
    item.textContent = nome;
    item.onclick = () => {
      productInput.value = nome;
      productList.style.display = "none";
    };
    productList.appendChild(item);
  });
  productList.style.display = "block";
}

function filterProducts() {
  const termo = productInput.value.toLowerCase();
  const filtrados = nomesProdutos.filter(nome => nome.toLowerCase().includes(termo));
  productList.innerHTML = "";
  filtrados.forEach(nome => {
    const item = document.createElement("div");
    item.textContent = nome;
    item.onclick = () => {
      productInput.value = nome;
      productList.style.display = "none";
    };
    productList.appendChild(item);
  });
  productList.style.display = filtrados.length ? "block" : "none";
}


  document.addEventListener("click", function(event) {
  if (!event.target.closest(".search-bar")) {
    cityList.style.display = "none";
    productList.style.display = "none";
  }
});


  const nomesProdutos = produtos.map(p => p.nome);


  function showProducts() {
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
      productInput.value = produto.nome;
      productList.style.display = "none";
    };

    productList.appendChild(item);
  });
  productList.style.display = "block";
}

function filterProducts() {
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
