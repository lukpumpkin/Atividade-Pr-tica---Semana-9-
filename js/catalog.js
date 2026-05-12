const Catalog = {
  elements: {},
  
  init() {
    this.elements.productList = document.getElementById("product-list");
    this.elements.searchInput = document.getElementById("search");
    this.elements.categorySelect = document.getElementById("category");
    this.elements.btnRender = document.getElementById("btnRender");
    
    if (!this.elements.productList) return;
    
    Utils.log("header", "MINI ECOMMERCE - CATÁLOGO EM CARDS");
    this.setupEventListeners();
    this.loadCategories();
    this.renderProducts(Database.produtos);
  },
  
  setupEventListeners() {
    if (this.elements.searchInput) {
      this.elements.searchInput.addEventListener("input", () => {
        this.renderProducts(this.filterProducts());
      });
    }
    
    if (this.elements.categorySelect) {
      this.elements.categorySelect.addEventListener("change", () => {
        this.renderProducts(this.filterProducts());
      });
    }
    
    if (this.elements.btnRender) {
      this.elements.btnRender.addEventListener("click", () => {
        this.renderProducts(this.filterProducts());
        Utils.log("success", "Catálogo renderizado via botão");
      });
    }
  },
  
  loadCategories() {
    const categorias = Database.getCategorias();
    this.elements.categorySelect.innerHTML = '<option value="Todas">Todas</option>';
    
    categorias.forEach(categoria => {
      const option = document.createElement("option");
      option.value = categoria;
      option.textContent = categoria;
      this.elements.categorySelect.appendChild(option);
    });
    
    Utils.log("success", "Categorias carregadas: " + categorias.join(", "));
  },
  
  filterProducts() {
    const busca = this.elements.searchInput.value.toLowerCase().trim();
    const categoria = this.elements.categorySelect.value;
    
    return Database.produtos.filter(p => 
      p.nome.toLowerCase().includes(busca) &&
      (categoria === "Todas" || p.categoria === categoria)
    );
  },
  
  renderProducts(produtos) {
    this.elements.productList.innerHTML = "";
    
    if (produtos.length === 0) {
      this.elements.productList.innerHTML = '<p style="padding: 20px; color: #999; text-align: center;">Nenhum produto encontrado.</p>';
      return;
    }
    
    produtos.forEach(produto => {
      const card = this.createCard(produto);
      this.elements.productList.appendChild(card);
    });
    
    Utils.log("success", `${produtos.length} produtos renderizados`);
  },
  
  createCard(produto) {
    const card = document.createElement("div");
    card.setAttribute("data-id", produto.id);
    card.classList.add("card");
    card.style.cssText = "border: 1px solid #ddd; border-radius: 8px; padding: 12px; background: #fff; transition: all 0.3s;";
    
    const img = document.createElement("img");
    img.src = produto.imagem;
    img.alt = produto.nome;
    img.style.cssText = "width: 100%; height: 160px; object-fit: cover; border-radius: 6px; margin-bottom: 10px;";
    
    const titulo = document.createElement("h3");
    titulo.textContent = produto.nome;
    titulo.style.cssText = "font-size: 0.95rem; font-weight: bold; margin-bottom: 8px; color: #333;";
    
    const categoria = document.createElement("p");
    categoria.textContent = "Categoria: " + produto.categoria;
    categoria.style.cssText = "font-size: 0.8rem; color: #2ea064; margin-bottom: 6px;";
    
    const preco = document.createElement("p");
    preco.textContent = Utils.formatPrice(produto.preco);
    preco.style.cssText = "font-size: 1.1rem; font-weight: bold; color: #2ea064; margin-bottom: 8px;";
    
    const estoque = document.createElement("p");
    estoque.textContent = produto.emEstoque ? "✓ Em estoque" : "✗ Esgotado";
    estoque.style.cssText = `font-size: 0.8rem; color: ${produto.emEstoque ? "#2ea064" : "#e05050"}; margin-bottom: 12px;`;
    
    const botoesDiv = document.createElement("div");
    botoesDiv.style.cssText = "display: flex; gap: 8px; margin-top: 12px;";
    
    const btnDetalhes = this.createButton("Ver detalhes", "#222", () => {
      window.location.href = "./detalhes.html?id=" + produto.id;
    });
    
    const btnDestacar = this.createButton("Destacar", "#f0f0f0");
    btnDestacar.style.color = "#333";
    btnDestacar.style.border = "1px solid #ddd";
    
    let isDestacado = false;
    btnDestacar.addEventListener("click", () => {
      isDestacado = !isDestacado;
      if (isDestacado) {
        card.style.boxShadow = "0 0 15px 2px #2ea064";
        card.style.border = "2px solid #2ea064";
        btnDestacar.style.background = "#2ea064";
        btnDestacar.style.color = "#fff";
        btnDestacar.style.borderColor = "#2ea064";
      } else {
        card.style.boxShadow = "none";
        card.style.border = "1px solid #ddd";
        btnDestacar.style.background = "#f0f0f0";
        btnDestacar.style.color = "#333";
        btnDestacar.style.borderColor = "#ddd";
      }
    });
    
    botoesDiv.appendChild(btnDetalhes);
    botoesDiv.appendChild(btnDestacar);
    
    card.appendChild(img);
    card.appendChild(titulo);
    card.appendChild(categoria);
    card.appendChild(preco);
    card.appendChild(estoque);
    card.appendChild(botoesDiv);
    
    return card;
  },
  
  createButton(texto, bgcolor, onClick) {
    const btn = document.createElement("button");
    btn.textContent = texto;
    btn.style.cssText = `flex: 1; padding: 8px; background: ${bgcolor}; color: #fff; border: none; border-radius: 4px; cursor: pointer; transition: background 0.3s;`;
    
    btn.addEventListener("mouseenter", function() { this.style.background = "#2ea064"; });
    btn.addEventListener("mouseleave", function() { this.style.background = bgcolor; });
    
    if (onClick) btn.addEventListener("click", onClick);
    
    return btn;
  }
};
