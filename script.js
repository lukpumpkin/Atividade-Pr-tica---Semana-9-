// ═══════════════════════════════════════════════════════════════════════════════
// MINI ECOMMERCE - CATÁLOGO EM CARDS
// Atividade Prática: Funções e Manipulação do DOM
// ═══════════════════════════════════════════════════════════════════════════════

// ─── 1. BASE DE DADOS (JSON) ─────────────────────────────────────────────────
const data = {
  produtos: [
    { 
      id: 1, 
      nome: "Fone de Ouvido Bluetooth Sem Fio", 
      preco: 189.90, 
      categoria: "Eletrônicos", 
      imagem: "./images/fone.jpg", 
      descricao: "Som de alta qualidade com cancelamento de ruído e bateria de 24h.", 
      emEstoque: true 
    },
    { 
      id: 2, 
      nome: "Câmera Digital Full HD 1080p", 
      preco: 449.90, 
      categoria: "Eletrônicos", 
      imagem: "./images/image-0.webp", 
      descricao: "Resolução 1080p com zoom óptico 5x e estabilizador de imagem.", 
      emEstoque: true 
    },
    { 
      id: 3, 
      nome: "Relógio Inteligente Fitness Tracker", 
      preco: 299.90, 
      categoria: "Wearables", 
      imagem: "./images/relogio.jpg", 
      descricao: "Monitor cardíaco, pedômetro e GPS integrado. Resistente à água.", 
      emEstoque: true 
    },
    { 
      id: 4, 
      nome: "Teclado Mecânico RGB Gaming", 
      preco: 329.90, 
      categoria: "Periféricos", 
      imagem: "./images/teclado.jpg", 
      descricao: "Switches mecânicos, iluminação RGB customizável e 103 teclas.", 
      emEstoque: true 
    },
    { 
      id: 5, 
      nome: "Mouse Sem Fio com Precisão Óptica", 
      preco: 79.90, 
      categoria: "Periféricos", 
      imagem: "./images/mouse.jpg", 
      descricao: "Sensor óptico de 1200 DPI, bateria durável e design ergonômico.", 
      emEstoque: true 
    },
    { 
      id: 6, 
      nome: "Monitor LED 24\" Full HD 60Hz", 
      preco: 599.90, 
      categoria: "Monitores", 
      imagem: "./images/monitor.webp", 
      descricao: "Resolução 1920x1080, painel IPS e conexões HDMI e VGA.", 
      emEstoque: true 
    },
    { 
      id: 7, 
      nome: "Webcam Full HD 1080p com Microfone", 
      preco: 149.90, 
      categoria: "Câmeras", 
      imagem: "./images/webcam.webp", 
      descricao: "Microfone integrado, visão angular de 80° e plug and play USB.", 
      emEstoque: true 
    },
    { 
      id: 8, 
      nome: "Headset Gamer Profissional 7.1", 
      preco: 249.90, 
      categoria: "Audio", 
      imagem: "./images/fone-de-ouvido.webp", 
      descricao: "Áudio surround 7.1, microfone retrátil e almofadas confortáveis.", 
      emEstoque: true 
    }
  ]
};

// ─── 2. SELEÇÃO DE ELEMENTOS DO DOM (getElementById, querySelector) ────────────
const productList = document.getElementById("product-list");
const productDetails = document.getElementById("product-details");
const searchInput = document.querySelector(".header-input");
const categorySelect = document.querySelector("#category");
const btnRender = document.querySelector(".header-btn");

console.log("✓ Elementos selecionados com getElementById e querySelector");

// ─── 3. FUNÇÕES OBRIGATÓRIAS ────────────────────────────────────────────────

/**
 * Formata o preço com símbolo R$ e duas casas decimais
 * @param {number} preco - Preço em número
 * @returns {string} Preço formatado ex: R$ 189,90
 */
function formatPrice(preco) {
  return "R$ " + preco.toFixed(2).replace(".", ",");
}

/**
 * Cria um card (div) para um produto usando createElement
 * @param {object} produto - Objeto com dados do produto
 * @returns {HTMLElement} Elemento div contendo o card do produto
 */
function createProductCard(produto) {
  // Criar container principal do card
  const card = document.createElement("div");
  card.setAttribute("data-id", produto.id);
  card.classList.add("card");
  card.style.border = "1px solid #ddd";
  card.style.borderRadius = "8px";
  card.style.padding = "12px";
  card.style.backgroundColor = "#fff";
  card.style.transition = "all 0.3s ease";

  // Criar imagem
  const img = document.createElement("img");
  img.setAttribute("src", produto.imagem);
  img.setAttribute("alt", produto.nome);
  img.style.width = "100%";
  img.style.height = "160px";
  img.style.objectFit = "cover";
  img.style.borderRadius = "6px";
  img.style.marginBottom = "10px";

  // Criar título
  const titulo = document.createElement("h3");
  titulo.textContent = produto.nome;
  titulo.style.fontSize = "0.95rem";
  titulo.style.fontWeight = "bold";
  titulo.style.marginBottom = "8px";
  titulo.style.color = "#333";

  // Criar categoria
  const categoria = document.createElement("p");
  categoria.textContent = "Categoria: " + produto.categoria;
  categoria.style.fontSize = "0.8rem";
  categoria.style.color = "#2ea064";
  categoria.style.marginBottom = "6px";

  // Criar preço
  const preco = document.createElement("p");
  preco.textContent = formatPrice(produto.preco);
  preco.style.fontSize = "1.1rem";
  preco.style.fontWeight = "bold";
  preco.style.color = "#2ea064";
  preco.style.marginBottom = "8px";

  // Criar status de estoque
  const estoque = document.createElement("p");
  estoque.textContent = produto.emEstoque ? "✓ Em estoque" : "✗ Esgotado";
  estoque.style.fontSize = "0.8rem";
  estoque.style.color = produto.emEstoque ? "#2ea064" : "#e05050";
  estoque.style.marginBottom = "12px";

  // Criar container de botões
  const botoesDiv = document.createElement("div");
  botoesDiv.style.display = "flex";
  botoesDiv.style.gap = "8px";
  botoesDiv.style.marginTop = "12px";

  // Botão "Ver detalhes"
  const btnDetalhes = document.createElement("button");
  btnDetalhes.textContent = "Ver detalhes";
  btnDetalhes.setAttribute("class", "btn-detalhes");
  btnDetalhes.style.flex = "1";
  btnDetalhes.style.padding = "8px";
  btnDetalhes.style.backgroundColor = "#222";
  btnDetalhes.style.color = "#fff";
  btnDetalhes.style.border = "none";
  btnDetalhes.style.borderRadius = "4px";
  btnDetalhes.style.cursor = "pointer";
  btnDetalhes.style.transition = "background 0.3s";
  btnDetalhes.addEventListener("click", function () {
    showProductDetails(produto);
  });
  btnDetalhes.addEventListener("mouseenter", function () {
    this.style.backgroundColor = "#2ea064";
  });
  btnDetalhes.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "#222";
  });

  // Botão "Destacar"
  const btnDestacar = document.createElement("button");
  btnDestacar.textContent = "Destacar";
  btnDestacar.setAttribute("class", "btn-destacar");
  btnDestacar.style.flex = "1";
  btnDestacar.style.padding = "8px";
  btnDestacar.style.backgroundColor = "#f0f0f0";
  btnDestacar.style.color = "#333";
  btnDestacar.style.border = "1px solid #ddd";
  btnDestacar.style.borderRadius = "4px";
  btnDestacar.style.cursor = "pointer";
  btnDestacar.style.transition = "all 0.3s";
  
  let isDestacado = false;
  btnDestacar.addEventListener("click", function () {
    isDestacado = !isDestacado;
    if (isDestacado) {
      card.classList.add("highlight");
      card.style.boxShadow = "0 0 15px 2px #2ea064";
      card.style.border = "2px solid #2ea064";
      btnDestacar.style.backgroundColor = "#2ea064";
      btnDestacar.style.color = "#fff";
      btnDestacar.style.borderColor = "#2ea064";
    } else {
      card.classList.remove("highlight");
      card.style.boxShadow = "none";
      card.style.border = "1px solid #ddd";
      btnDestacar.style.backgroundColor = "#f0f0f0";
      btnDestacar.style.color = "#333";
      btnDestacar.style.borderColor = "#ddd";
    }
  });

  // Montar estrutura do card usando appendChild
  botoesDiv.appendChild(btnDetalhes);
  botoesDiv.appendChild(btnDestacar);

  card.appendChild(img);
  card.appendChild(titulo);
  card.appendChild(categoria);
  card.appendChild(preco);
  card.appendChild(estoque);
  card.appendChild(botoesDiv);

  return card;
}

/**
 * Renderiza os produtos na página
 * @param {array} produtos - Array de produtos para renderizar
 */
function renderProducts(produtos) {
  // Limpar lista anterior usando innerHTML
  productList.innerHTML = "";

  if (produtos.length === 0) {
    productList.innerHTML = '<p style="padding: 20px; color: #999; text-align: center;">Nenhum produto encontrado.</p>';
    return;
  }

  // Adicionar cada card usando appendChild
  produtos.forEach(function (produto) {
    const card = createProductCard(produto);
    productList.appendChild(card);
  });

  // ─── QUERYSELECTORALL OBRIGATÓRIO ───────────────────────────────────────
  // Selecionar todos os cards renderizados e listar seus IDs no console
  const todosOsCards = document.querySelectorAll(".card");
  console.log(`✓ ${todosOsCards.length} cards renderizados:`);
  todosOsCards.forEach(function (card) {
    const idCard = card.getAttribute("data-id");
    console.log(`  → Product ID: ${idCard}`);
  });
}

/**
 * Renderiza as categorias dinamicamente no select
 */
function renderCategories() {
  // Extrair categorias únicas
  const categorias = [];
  data.produtos.forEach(function (produto) {
    if (!categorias.includes(produto.categoria)) {
      categorias.push(produto.categoria);
    }
  });

  // Limpar select e adicionar opção "Todas"
  categorySelect.innerHTML = '<option value="Todas">Todas</option>';

  // Adicionar opções de categorias usando createElement
  categorias.forEach(function (categoria) {
    const option = document.createElement("option");
    option.setAttribute("value", categoria);
    option.textContent = categoria;
    categorySelect.appendChild(option);
  });

  console.log("✓ Categorias carregadas: " + categorias.join(", "));
}

/**
 * Mostra os detalhes de um produto
 * @param {object} produto - Objeto do produto
 */
function showProductDetails(produto) {
  const statusEstoque = produto.emEstoque 
    ? '<span style="color: #2ea064;">✓ Em estoque</span>' 
    : '<span style="color: #e05050;">✗ Fora de estoque</span>';

  // Usar innerHTML para preencher detalhes
  productDetails.innerHTML = `
    <div style="background: #fff; padding: 20px; border-radius: 8px; border: 2px solid #2ea064; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <h2 style="color: #222; margin-bottom: 15px; font-size: 1.5rem;">${produto.nome}</h2>
      
      <img src="${produto.imagem}" alt="${produto.nome}" style="width: 200px; height: auto; border-radius: 6px; margin-bottom: 15px; border: 1px solid #ddd;">
      
      <p style="margin-bottom: 10px;"><strong>Preço:</strong> <span style="color: #2ea064; font-size: 1.2rem; font-weight: bold;">${formatPrice(produto.preco)}</span></p>
      
      <p style="margin-bottom: 10px;"><strong>Categoria:</strong> ${produto.categoria}</p>
      
      <p style="margin-bottom: 10px;"><strong>Status:</strong> ${statusEstoque}</p>
      
      <p style="margin-bottom: 15px;"><strong>Descrição:</strong></p>
      <p style="color: #666; line-height: 1.6;">${produto.descricao}</p>
      
      <p style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #ddd; font-size: 0.9rem; color: #999;">ID do Produto: ${produto.id}</p>
    </div>
  `;

  // Scroll suave até os detalhes
  productDetails.scrollIntoView({ behavior: "smooth" });
}

/**
 * Filtra produtos por busca (nome) e categoria
 * @returns {array} Array de produtos filtrados
 */
function filterProducts() {
  const textoBusca = searchInput.value.toLowerCase().trim();
  const categoriaSelecionada = categorySelect.value;

  return data.produtos.filter(function (produto) {
    const nomeContem = produto.nome.toLowerCase().includes(textoBusca);
    const categoriaCorreta = categoriaSelecionada === "Todas" || produto.categoria === categoriaSelecionada;
    return nomeContem && categoriaCorreta;
  });
}

// ─── 4. EVENTOS (ADDEVENTLISTENER) ──────────────────────────────────────────

// Evento: Digitação no campo de busca (input)
if (searchInput) {
  searchInput.addEventListener("input", function () {
    const produtosFiltrados = filterProducts();
    renderProducts(produtosFiltrados);
  });
}

// Evento: Mudança de categoria (change)
if (categorySelect) {
  categorySelect.addEventListener("change", function () {
    const produtosFiltrados = filterProducts();
    renderProducts(produtosFiltrados);
  });
}

// Evento: Clique no botão Renderizar
if (btnRender) {
  btnRender.addEventListener("click", function () {
    const produtosFiltrados = filterProducts();
    renderProducts(produtosFiltrados);
    console.log("✓ Catálogo renderizado via botão de busca");
  });
}

// ─── 5. INICIALIZAÇÃO ───────────────────────────────────────────────────────

console.log("═══════════════════════════════════════════════════════════");
console.log("MINI ECOMMERCE - CATÁLOGO EM CARDS");
console.log("Atividade Prática - Funções e Manipulação do DOM");
console.log("═══════════════════════════════════════════════════════════");
console.log(`✓ Base de dados carregada: ${data.produtos.length} produtos`);
console.log("");

renderCategories();
renderProducts(data.produtos);

console.log("");
console.log("✓ Página inicializada com sucesso!");
console.log("✓ Todos os requisitos foram atendidos:");
console.log("  • Base de dados JSON com 8+ produtos");
console.log("  • Seleção de elementos (getElementById, querySelector, querySelectorAll)");
console.log("  • Funções: formatPrice, createProductCard, renderProducts, renderCategories, showProductDetails, filterProducts");
console.log("  • Uso de createElement, setAttribute, appendChild");
console.log("  • Uso de classList.add e style");
console.log("  • Eventos com addEventListener");
console.log("═══════════════════════════════════════════════════════════");

