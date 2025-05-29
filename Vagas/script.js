const container = document.getElementById('lojasContainer');

lojas.forEach(loja => {
  if (loja.contratando) { // ✅ Verifica se está contratando
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${loja.imagem}" alt="${loja.nome}">
      <div class="card-content">
        <h2>${loja.nome}</h2>
        <p>${loja.descricao}</p>
        <div class="avaliacao">${loja.avaliacao}</div>
        <a href="${loja.link}" class="btn">Detalhes</a>
      </div>
    `;

    container.appendChild(card);
  }
});