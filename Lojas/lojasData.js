// lojasData.js
const lojas = [
  { 
    id: "techwave",
    nome: "TechWave",
    descricao: "Loja especializada em eletrônicos e gadgets de última geração.",
    avaliacao: "⭐⭐⭐⭐",
    imagem: "../imgs/techwave.avif",
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
    imagem: "../imgs/casaverde.jpg",
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
    imagem: "../imgs/bellamoda.avif",
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
    nome: "Livros & Cia", 
    descricao: "A livraria perfeita para quem ama clássicos e lançamentos.", 
    avaliacao: "⭐⭐⭐⭐⭐", 
    imagem: "../imgs/betterbooks.avif",
    local: "rua joao levir",
    tipovaga: "CLT",
    servico: "Bibliotecário.",
    contratando: false,
    trabalho: "Atendimento ao público.",
    link: "#" 
  },
  { 
    nome: "PetAlegria",
    descricao: "Tudo para seu pet: ração, brinquedos, acessórios e carinho.",
    avaliacao: "⭐⭐⭐⭐",
    imagem: "../imgs/homepets.avif",
    local: "rua do felp",
    tipovaga: "CLT",
    servico: "Vendedor.",
    contratando: true,
    trabalho: "Atendimento ao público.",
    link: "#" 
  },
  { 
    nome: "Urban Bikes",
    descricao: "Bicicletas urbanas e elétricas com design moderno e desempenho top.",
    avaliacao: "⭐⭐⭐⭐",
    imagem: "../imgs/bicycle.avif",
    local: "rua do vascaino da let",
    tipovaga: "estágio",
    servico: "Atendente.",
    contratando: false,
    trabalho: "Atendimento ao público.",
    link: "#" 
  },
  {
   nome: "Doces Encantos", 
   descricao: "Confeitaria artesanal com doces que encantam pelo sabor e visual.",
   avaliacao: "⭐⭐⭐⭐⭐",
   imagem: "../imgs/doces.avif",
    local: "rua do ivande",
    tipovaga: "freelancer",
    servico: "Desenvolvedor web.",
    contratando: true,
    trabalho: "Desenvolvimento de web site.",
   link: "#" 
  },
  { 
    nome: "ClickTech",
     descricao: "Equipamentos de informática e assistência técnica especializada.",
     avaliacao: "⭐⭐⭐",
     imagem: "../imgs/clicktech.avif",
    local: "rua do xupeta",
    tipovaga: "CLT",
    servico: "técnico de informática.",
    contratando: false,
    trabalho: "Manutenção de dispositivos, atendimento ao publico e manutenção de servidores.",
     link: "#" 
  },
  { 
    nome: "Aroma Zen",
     descricao: "Velas, óleos e itens para aromaterapia e bem-estar.",
     avaliacao: "⭐⭐⭐⭐⭐",
     imagem: "../imgs/aroma_zen.png",
    local: "rua da let do vasco",
    tipovaga: "CLT",
    servico: "Marketing",
    contratando: false,
    trabalho: "Gerenciamento de redes sociais",
     link: "#"
  },
  { 
    nome: "Mundo Geek",
    descricao: "Produtos e colecionáveis para fãs de séries, HQs, games e animes.",
    avaliacao: "⭐⭐⭐⭐",
    imagem: "../imgs/geek_gaming.jpg",
    local: "rua do shaolean(vulgo vito manel)",
    tipovaga: "estágio",
    servico: "Atendente de caixa.",
    contratando: true,
    trabalho: "Atendimento ao público.",
    link: "#"
  }
];
