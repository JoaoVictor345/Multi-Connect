// lojasData.js
const lojas = [
  { 
    id: "techwave",
    nome: "TechWave",
    descricao: "Loja especializada em eletrônicos e gadgets de última geração.",
    avaliacao: "⭐⭐⭐⭐",
    imagem: "../lojas_imgs/techwave.avif",
    local: "Rua 234",
    tipovaga: "CLT",
    servico: "T.I.",
    contratando: true,
    trabalho: "Organização de documentos, atendimento ao público e manutenção de servidores.",
    corTema: "#007bff",  // Azul
    corFundo: "#e0f0ff",
    produtos: [
      { nome: "Smartphone X200", preco: "R$ 1.299", imagem: "../imgs/smartphone.jpg" },
      { nome: "Headset Pro", preco: "R$ 299", imagem: "../imgs/headset.jpg" },
      { nome: "Mouse Gamer RGB", preco: "R$ 149", imagem: "../imgs/mouse.jpg" },
      { nome: "Teclado Mecânico", preco: "R$ 499", imagem: "../imgs/teclado.jpg" }
    ]
  },
  { 
    id: "casaverde",
    nome: "Casa Verde",
    descricao: "Produtos sustentáveis para o lar e jardim, com foco em ecologia.",
    avaliacao: "⭐⭐⭐⭐⭐", 
    imagem: "../lojas_imgs/casaverde.jpg",
    local: "Rua Blé",
    tipovaga: "Freelancer",
    servico: "Desenvolvedor Web.",
    contratando: false,
    trabalho: "Desenvolvimento de website.",
    corTema: "#28a745",  // Verde
    corFundo: "#e8f5e9",
    produtos: [
      { nome: "Vaso reciclável", preco: "R$ 39", imagem: "../imgs/vaso.jpg" },
      { nome: "Kit jardinagem", preco: "R$ 120", imagem: "../imgs/kit-jardim.jpg" },
      { nome: "Composteira doméstica", preco: "R$ 249", imagem: "../imgs/composteira.jpg" },
      { nome: "Luminária solar", preco: "R$ 79", imagem: "../imgs/luminaria.jpg" }
    ]
  },
  { 
    id: "bellamoda",
    nome: "Bella Moda",
    descricao: "Moda feminina contemporânea com coleções exclusivas.",
    avaliacao: "⭐⭐⭐", 
    imagem: "../lojas_imgs/bellamoda.avif",
    local: "Rua do João Victor",
    tipovaga: "Estágio",
    servico: "Atendente.",
    contratando: true,
    trabalho: "Atendimento ao público.",
    corTema: "#e83e8c",  // Rosa
    corFundo: "#fde0f0",
    produtos: [
      { nome: "Vestido Longo", preco: "R$ 189", imagem: "../imgs/vestido-longo.jpg" },
      { nome: "Blusa de Seda", preco: "R$ 129", imagem: "../imgs/blusa.jpg" },
      { nome: "Jaqueta Jeans", preco: "R$ 299", imagem: "../imgs/jaqueta.jpg" },
      { nome: "Saia Midi", preco: "R$ 149", imagem: "../imgs/saia.jpg" }
    ]
  },
  { 
    id: "livros_cia",
    nome: "Livros & Cia",
    descricao: "A livraria perfeita para quem ama clássicos e lançamentos.",
    avaliacao: "⭐⭐⭐⭐",
    imagem: "../lojas_imgs/betterbooks.avif",
    local: "Rua João Levir",
    tipovaga: "CLT",
    servico: "Bibliotecário.",
    contratando: false,
    trabalho: "Atendimento ao público.",
    // corTema e corFundo são usados para estilizar a loja (azul escuro e azul claro)
    corTema: "#007bff",  // Azul
    corFundo: "#e0f0ff",
    produtos: [
      { nome: "Clássicos da Literatura", preco: "R$ 59", imagem: "../imgs/livro-classico.jpg" },
      { nome: "Novidades Literárias", preco: "R$ 49", imagem: "../imgs/livro-novo.jpg" },
      { nome: "Coleção de HQs", preco: "R$ 89", imagem: "../imgs/hq.jpg" },
      { nome: "Livros Infantis", preco: "R$ 39", imagem: "../imgs/livro-infantil.jpg" }
    ]
  },
  { 
    id: "petalegria",
    nome: "PetAlegria",
    descricao: "Tudo para seu pet: ração, brinquedos, acessórios e carinho.",
    avaliacao: "⭐⭐⭐⭐",
    imagem: "../lojas_imgs/homepets.avif",
    local: "rua do felp",
    tipovaga: "CLT",
    servico: "Vendedor.",
    contratando: true,
    trabalho: "Atendimento ao público.",
    corTema: "#ffc107",  // Amarelo
    corFundo: "#fff3cd",
    produtos: [
      { nome: "Ração Premium", preco: "R$ 99", imagem: "../imgs/racao.jpg" },
      { nome: "Brinquedo Interativo", preco: "R$ 49", imagem: "../imgs/brinquedo.jpg" },
      { nome: "Coleira Personalizada", preco: "R$ 29", imagem: "../imgs/coleira.jpg" },
      { nome: "Cama Confortável", preco: "R$ 199", imagem: "../imgs/cama.jpg" }
    ]
  },
  { 
    id: "urban_bikes",
    nome: "Urban Bikes",
    descricao: "Bicicletas urbanas e elétricas com design moderno e desempenho top.",
    avaliacao: "⭐⭐⭐⭐",
    imagem: "../lojas_imgs/bicycle.avif",
    local: "rua do vascaino da let",
    tipovaga: "estágio",
    servico: "Atendente.",
    contratando: false,
    trabalho: "Atendimento ao público.",
    corTema: "#17a2b8",  // Azul Claro
    corFundo: "#e0f7fa",
    produtos: [
      { nome: "Bicicleta Elétrica", preco: "R$ 2.499", imagem: "../imgs/bike-eletrica.jpg" },
      { nome: "Bicicleta Urbana", preco: "R$ 1.299", imagem: "../imgs/bike-urbana.jpg" },
      { nome: "Acessórios para Bicicleta", preco: "R$ 99", imagem: "../imgs/acessorios-bike.jpg" },
      { nome: "Capacete de Segurança", preco: "R$ 89", imagem: "../imgs/capacete.jpg" }
    ]
  },
  {
    id: "doces_encantos",
   nome: "Doces Encantos", 
   descricao: "Confeitaria artesanal com doces que encantam pelo sabor e visual.",
   avaliacao: "⭐⭐⭐⭐⭐",
   imagem: "../lojas_imgs/doces.avif",
    local: "rua do ivande",
    tipovaga: "freelancer",
    servico: "Desenvolvedor web.",
    contratando: true,
    trabalho: "Desenvolvimento de web site.",
    corTema: "#ff69b4",  // Rosa Claro
    corFundo: "#ffe0f0",
   produtos: [
     { nome: "Bolo de Chocolate", preco: "R$ 49", imagem: "../imgs/bolo-chocolate.jpg" },
     { nome: "Cupcakes Decorados", preco: "R$ 29", imagem: "../imgs/cupcakes.jpg" },
     { nome: "Doces Finos", preco: "R$ 39", imagem: "../imgs/doces-finos.jpg" },
     { nome: "Tortas Especiais", preco: "R$ 59", imagem: "../imgs/torta-especial.jpg" }
   ]
  },
  { 
    id: "clicktech",
    nome: "ClickTech",
     descricao: "Equipamentos de informática e assistência técnica especializada.",
     avaliacao: "⭐⭐⭐",
     imagem: "../lojas_imgs/clicktech.avif",
    local: "rua do xupeta",
    tipovaga: "CLT",
    servico: "técnico de informática.",
    contratando: false,
    trabalho: "Manutenção de dispositivos, atendimento ao publico e manutenção de servidores.",
    corTema: "#6c757d",  // Cinza
    corFundo: "#f8f9fa",
     produtos: [
       { nome: "Notebook Gamer", preco: "R$ 3.499", imagem: "../imgs/notebook-gamer.jpg" },
       { nome: "Monitor 4K", preco: "R$ 1.799", imagem: "../imgs/monitor-4k.jpg" },
       { nome: "Impressora Multifuncional", preco: "R$ 599", imagem: "../imgs/impressora.jpg" },
       { nome: "Teclado e Mouse Sem Fio", preco: "R$ 199", imagem: "../imgs/teclado-mouse.jpg" }
     ]
  },
  { 
      id: "aroma_zen",
    nome: "Aroma Zen",
     descricao: "Velas, óleos e itens para aromaterapia e bem-estar.",
     avaliacao: "⭐⭐⭐⭐⭐",
     imagem: "../lojas_imgs/aroma_zen.png",
    local: "rua da let do vasco",
    tipovaga: "CLT",
    servico: "Marketing",
    contratando: false,
    trabalho: "Gerenciamento de redes sociais",
    corTema: "#ff9800",  // Laranja
    corFundo: "#fff3e0",
     produtos: [
       { nome: "Vela Aromática", preco: "R$ 39", imagem: "../imgs/vela-aromatica.jpg" },
       { nome: "Difusor de Óleos", preco: "R$ 79", imagem: "../imgs/difusor.jpg" },
       { nome: "Kit de Aromaterapia", preco: "R$ 99", imagem: "../imgs/kit-aromaterapia.jpg" },
       { nome: "Incenso Natural", preco: "R$ 19", imagem: "../imgs/incenso.jpg" }
     ]
  },
  { 
    id: "mundo_geek",
    nome: "Mundo Geek",
    descricao: "Produtos e colecionáveis para fãs de séries, HQs, games e animes.",
    avaliacao: "⭐⭐⭐⭐",
    imagem: "../lojas_imgs/geek_gaming.jpg",
    local: "rua do shaolean(vulgo vito manel)",
    tipovaga: "estágio",
    servico: "Atendente de caixa.",
    contratando: true,
    trabalho: "Atendimento ao público.",
    corTema: "#6610f2",  // Roxo
    corFundo: "#f3e5f5",
    produtos: [
      { nome: "Action Figures", preco: "R$ 149", imagem: "../imgs/action-figures.jpg" },
      { nome: "Camisetas Temáticas", preco: "R$ 79", imagem: "../imgs/camisetas-geek.jpg" },
      { nome: "Colecionáveis de Séries", preco: "R$ 99", imagem: "../imgs/colecionaveis-series.jpg" },
      { nome: "Canecas Personalizadas", preco: "R$ 39", imagem: "../imgs/canecas-geek.jpg" }
    ]
  },
  {
    id: "fitness_pro",
    nome: "Fitness Pro",
    descricao: "Equipamentos de academia e suplementos para uma vida saudável.",
    avaliacao: "⭐⭐⭐⭐",
    imagem: "../lojas_imgs/fitness.jpg",
    local: "Rua das Academias, 456",
    tipovaga: "CLT",
    servico: "Instrutor de musculação.",
    contratando: true,
    trabalho: "Orientação de alunos e vendas de suplementos.",
    corTema: "gray",
    corFundo: "#ffffff",
    produtos: [
      { nome: "Whey Protein", preco: "R$ 159", imagem: "../imgs/whey.jpg" },
      { nome: "Halteres Ajustáveis", preco: "R$ 299", imagem: "../imgs/halteres.jpg" },
      { nome: "Esteira Elétrica", preco: "R$ 1.899", imagem: "../imgs/esteira.jpg" },
      { nome: "Kit Elásticos", preco: "R$ 79", imagem: "../imgs/elasticos.jpg" }
    ]
  },
  {
    id: "sabor_caseiro",
    nome: "Sabor Caseiro",
    descricao: "Comida caseira e marmitas saudáveis feitas com carinho.",
    avaliacao: "⭐⭐⭐⭐⭐",
    imagem: "../lojas_imgs/comida-caseira.jpg",
    local: "Rua dos Temperos, 123",
    tipovaga: "Freelancer",
    servico: "Cozinheiro.",
    contratando: false,
    trabalho: "Preparo de refeições e atendimento ao cliente.",
    corTema: "rgb(231, 148, 1)",  // Laranja Escuro
    corFundo: "#2D2D2D",
    produtos: [
      { nome: "Marmita Executiva", preco: "R$ 18", imagem: "../imgs/marmita.jpg" },
      { nome: "Lasanha Caseira", preco: "R$ 35", imagem: "../imgs/lasanha.jpg" },
      { nome: "Sopa da Casa", preco: "R$ 12", imagem: "../imgs/sopa.jpg" },
      { nome: "Torta Salgada", preco: "R$ 25", imagem: "../imgs/torta-salgada.jpg" }
    ]
  },
  {
    id: "auto_center",
    nome: "Auto Center Max",
    descricao: "Peças automotivas e serviços especializados para seu veículo.",
    avaliacao: "⭐⭐⭐⭐",
    imagem: "../lojas_imgs/auto-center.jpg",
    local: "Avenida dos Carros, 789",
    tipovaga: "CLT",
    servico: "Mecânico automotivo.",
    contratando: true,
    trabalho: "Manutenção de veículos e atendimento ao cliente.",
    corTema: "#495057",  // Cinza Escuro
    corFundo: "#e9ecef",
    produtos: [
      { nome: "Pneu Aro 15", preco: "R$ 189", imagem: "../imgs/pneu.jpg" },
      { nome: "Bateria 60Ah", preco: "R$ 299", imagem: "../imgs/bateria.jpg" },
      { nome: "Óleo Motor 5W30", preco: "R$ 49", imagem: "../imgs/oleo.jpg" },
      { nome: "Kit Pastilha de Freio", preco: "R$ 89", imagem: "../imgs/pastilha.jpg" }
    ]
  },
  {
    id: "kids_world",
    nome: "Kids World",
    descricao: "Brinquedos educativos e diversão garantida para crianças.",
    avaliacao: "⭐⭐⭐⭐⭐",
    imagem: "../lojas_imgs/brinquedos.jpg",
    local: "Rua da Alegria, 321",
    tipovaga: "Estágio",
    servico: "Vendedor de brinquedos.",
    contratando: true,
    trabalho: "Atendimento ao público e organização do estoque.",
    corTema: "#ffc107",  // Amarelo
    corFundo: "#fff3cd",
    produtos: [
      { nome: "Quebra-cabeça 1000 peças", preco: "R$ 45", imagem: "../imgs/quebra-cabeca.jpg" },
      { nome: "Boneca Interativa", preco: "R$ 129", imagem: "../imgs/boneca.jpg" },
      { nome: "Carrinho Controle Remoto", preco: "R$ 199", imagem: "../imgs/carrinho-rc.jpg" },
      { nome: "Kit Massinha", preco: "R$ 29", imagem: "../imgs/massinha.jpg" }
    ]
  },
  {
    id: "beauty_care",
    nome: "Beauty Care",
    descricao: "Produtos de beleza e cuidados pessoais para realçar sua beleza.",
    avaliacao: "⭐⭐⭐⭐",
    imagem: "../lojas_imgs/beleza.jpg",
    local: "Rua da Vaidade, 555",
    tipovaga: "CLT",
    servico: "Consultor de beleza.",
    contratando: false,
    trabalho: "Orientação sobre produtos e atendimento personalizado.",
    corTema: "#e83e8c",  // Rosa
    corFundo: "#fde0f0",
    produtos: [
      { nome: "Base Líquida HD", preco: "R$ 59", imagem: "../imgs/base.jpg" },
      { nome: "Paleta de Sombras", preco: "R$ 89", imagem: "../imgs/sombras.jpg" },
      { nome: "Hidratante Facial", preco: "R$ 79", imagem: "../imgs/hidratante.jpg" },
      { nome: "Perfume Importado", preco: "R$ 149", imagem: "../imgs/perfume.jpg" }
    ]
  },
  {
    id: "casa_decoracao",
    nome: "Casa & Decoração",
    descricao: "Móveis e objetos decorativos para transformar sua casa.",
    avaliacao: "⭐⭐⭐⭐",
    imagem: "../lojas_imgs/decoracao.jpg",
    local: "Rua do Design, 888",
    tipovaga: "Freelancer",
    servico: "Designer de interiores.",
    contratando: true,
    trabalho: "Consultoria em decoração e vendas.",
    corTema: "#6f42c1",  // Roxo
    corFundo: "#f3e5f5",
    produtos: [
      { nome: "Sofá 3 Lugares", preco: "R$ 1.299", imagem: "../imgs/sofa.jpg" },
      { nome: "Mesa de Centro", preco: "R$ 399", imagem: "../imgs/mesa-centro.jpg" },
      { nome: "Quadro Decorativo", preco: "R$ 89", imagem: "../imgs/quadro.jpg" },
      { nome: "Luminária de Mesa", preco: "R$ 129", imagem: "../imgs/luminaria-mesa.jpg" }
    ]
  },
  {
    id: "farmacia_saude",
    nome: "Farmácia Saúde+",
    descricao: "Medicamentos, produtos de higiene e cuidados com a saúde.",
    avaliacao: "⭐⭐⭐⭐⭐",
    imagem: "../lojas_imgs/farmacia.jpg",
    local: "Avenida da Saúde, 111",
    tipovaga: "CLT",
    servico: "Farmacêutico.",
    contratando: false,
    trabalho: "Dispensação de medicamentos e orientação farmacêutica.",
    corTema: "#28a745",  // Verde
    corFundo: "#e8f5e9",
    produtos: [
      { nome: "Vitamina C 1g", preco: "R$ 25", imagem: "../imgs/vitamina-c.jpg" },
      { nome: "Termômetro Digital", preco: "R$ 39", imagem: "../imgs/termometro.jpg" },
      { nome: "Álcool em Gel", preco: "R$ 8", imagem: "../imgs/alcool-gel.jpg" },
      { nome: "Protetor Solar FPS 60", preco: "R$ 45", imagem: "../imgs/protetor-solar.jpg" }
    ]
  },
  {
    id: "music_store",
    nome: "Music Store",
    descricao: "Instrumentos musicais e equipamentos de som profissionais.",
    avaliacao: "⭐⭐⭐⭐",
    imagem: "../lojas_imgs/musica.avif",
    local: "Rua dos Músicos, 444",
    tipovaga: "Estágio",
    servico: "Vendedor de instrumentos.",
    contratando: true,
    trabalho: "Atendimento ao público e demonstração de produtos.",
    corTema: "black",  // Azul claro
    corFundo: "white",
    produtos: [
      { nome: "Violão Clássico", preco: "R$ 299", imagem: "../imgs/violao.jpg" },
      { nome: "Teclado 61 Teclas", preco: "R$ 599", imagem: "../imgs/teclado-musical.jpg" },
      { nome: "Bateria Acústica", preco: "R$ 1.599", imagem: "../imgs/bateria.jpg" },
      { nome: "Microfone Profissional", preco: "R$ 189", imagem: "../imgs/microfone.jpg" }
    ]
  },
  {
    id: "papelaria_criativa",
    nome: "Papelaria Criativa",
    descricao: "Material escolar, de escritório e artigos para artesanato.",
    avaliacao: "⭐⭐⭐⭐",
    imagem: "../lojas_imgs/papelaria.jpg",
    local: "Rua das Letras, 777",
    tipovaga: "CLT",
    servico: "Vendedor.",
    contratando: false,
    trabalho: "Atendimento ao público e organização do estoque.",
    corTema: "#ffc107",  // Amarelo
    corFundo: "#fff3cd",
    produtos: [
      { nome: "Kit Escolar Completo", preco: "R$ 89", imagem: "../imgs/kit-escolar.jpg" },
      { nome: "Canetas Coloridas", preco: "R$ 25", imagem: "../imgs/canetas.jpg" },
      { nome: "Caderno Universitário", preco: "R$ 15", imagem: "../imgs/caderno.jpg" },
      { nome: "Material de Artesanato", preco: "R$ 45", imagem: "../imgs/artesanato.jpg" }
    ]
  },
  {
    id: "eletrolar_express",
    nome: "EletroLar Express",
    descricao: "Eletrodomésticos e eletrônicos para facilitar sua vida.",
    avaliacao: "⭐⭐⭐⭐",
    imagem: "../lojas_imgs/eletrodomesticos.jpg",
    local: "Avenida Central, 999",
    tipovaga: "CLT",
    servico: "Técnico em eletrônicos.",
    contratando: true,
    trabalho: "Assistência técnica e vendas de produtos.",
    corTema: "#007bff",  // Azul
    corFundo: "#e0f0ff",
    produtos: [
      { nome: "Geladeira Frost Free", preco: "R$ 1.899", imagem: "../imgs/geladeira.jpg" },
      { nome: "Micro-ondas 30L", preco: "R$ 599", imagem: "../imgs/microondas.jpg" },
      { nome: "Smart TV 50\"", preco: "R$ 2.299", imagem: "../imgs/smart-tv.jpg" },
      { nome: "Ar Condicionado Split", preco: "R$ 1.599", imagem: "../imgs/ar-condicionado.jpg" }
    ]
  },
  {
    id: "verde_jardim",
    nome: "Verde Jardim",
    descricao: "Plantas, sementes e tudo para seu jardim florescer.",
    avaliacao: "⭐⭐⭐⭐⭐",
    imagem: "../lojas_imgs/jardim.avif",
    local: "Rua das Flores, 333",
    tipovaga: "Freelancer",
    servico: "Paisagista.",
    contratando: false,
    trabalho: "Projeto e manutenção de jardins.",
    corTema: "#28a745",  // Verde
    corFundo: "#e8f5e9",
    produtos: [
      { nome: "Orquídea Branca", preco: "R$ 45", imagem: "../imgs/orquidea.jpg" },
      { nome: "Kit Sementes Orgânicas", preco: "R$ 29", imagem: "../imgs/sementes.jpg" },
      { nome: "Adubo Natural", preco: "R$ 35", imagem: "../imgs/adubo.jpg" },
      { nome: "Vaso de Barro", preco: "R$ 25", imagem: "../imgs/vaso-barro.jpg" }
    ]
  },
  {
    id: "cafe_gourmet",
    nome: "Café Gourmet",
    descricao: "Cafés especiais e bebidas artesanais para verdadeiros apreciadores.",
    avaliacao: "⭐⭐⭐⭐⭐",
    imagem: "../lojas_imgs/cafe.jpg",
    local: "Rua do Aroma, 222",
    tipovaga: "CLT",
    servico: "Barista.",
    contratando: true,
    trabalho: "Preparo de bebidas e atendimento ao cliente.",
    corTema: "#6f4e37",  // Marrom
    corFundo: "#f5f5dc",
    produtos: [
      { nome: "Café Especial 250g", preco: "R$ 35", imagem: "../imgs/cafe-especial.jpg" },
      { nome: "Cappuccino Premium", preco: "R$ 8", imagem: "../imgs/cappuccino.jpg" },
      { nome: "Máquina de Café", preco: "R$ 399", imagem: "../imgs/maquina-cafe.jpg" },
      { nome: "Xícara de Porcelana", preco: "R$ 25", imagem: "../imgs/xicara.jpg" }
    ]
  },
  {
    id: "esporte_radical",
    nome: "Esporte Radical",
    descricao: "Equipamentos para esportes radicais e aventuras ao ar livre.",
    avaliacao: "⭐⭐⭐⭐",
    imagem: "../lojas_imgs/esporte.jpg",
    local: "Rua da Aventura, 666",
    tipovaga: "Estágio",
    servico: "Instrutor de esportes.",
    contratando: true,
    trabalho: "Orientação sobre equipamentos e vendas.",
    corTema: "#dc3545",  // Vermelho
    corFundo: "#f8d7da",
    produtos: [
      { nome: "Prancha de Surf", preco: "R$ 899", imagem: "../imgs/prancha-surf.jpg" },
      { nome: "Capacete de Escalada", preco: "R$ 199", imagem: "../imgs/capacete-escalada.jpg" },
      { nome: "Mochila Trekking", preco: "R$ 299", imagem: "../imgs/mochila-trekking.jpg" },
      { nome: "Tênis Trail Running", preco: "R$ 399", imagem: "../imgs/tenis-trail.jpg" }
    ]
  }
];
