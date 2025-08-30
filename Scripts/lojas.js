

    function renderStores(query = '') {
      const container = document.getElementById("storeContainer");
      const emptyState = document.getElementById("emptyState");
      const loading = document.getElementById("loading");
      
      // Mostrar loading
      loading.style.display = "flex";
      container.innerHTML = '';
      emptyState.style.display = "none";
      
      // Simular delay de carregamento
      setTimeout(() => {
        loading.style.display = "none";
        
        const filteredLojas = lojas.filter(loja => 
          loja.nome.toLowerCase().includes(query.toLowerCase()) || 
          loja.descricao.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredLojas.length === 0) {
          emptyState.style.display = "block";
          return;
        }

        filteredLojas.forEach(loja => {
          const card = document.createElement("div");
          card.classList.add("store-card");
          card.innerHTML = `
            <div class="store-card-header">
              <img class="store-img" src="${loja.imagem}" alt="${loja.nome}">
              <div class="store-info">
                <h3 class="store-name">${loja.nome}</h3>
                <p class="store-description">${loja.descricao}</p>
              </div>
            </div>
            <div class="store-card-footer">
              <a href="../lojas-perfil/lojas-perfil.html?loja=${loja.id}" class="store-button">Ver mais</a>
            </div>`;
          container.appendChild(card);
        });
      }, 500);
    }

    function filterStores(query) {
      renderStores(query);
    }

    function toggleMobileMenu() {
      // Implementar menu mobile se necessário
      console.log('Toggle mobile menu');
    }

    // Inicializar página
    document.addEventListener("DOMContentLoaded", () => {
      renderStores();
    });

    const wheel = document.querySelector('.header-nav')

    wheel.addEventListener('wheel', (e) => {

        e.preventDefault
        

        wheel.scrollLeft += e.deltaY * 2
    })