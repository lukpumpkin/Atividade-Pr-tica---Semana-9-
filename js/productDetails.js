const ProductDetails = {
  container: null,
  
  init() {
    this.container = document.getElementById("product-details-container");
    if (!this.container) return;
    
    const productId = parseInt(Utils.getQueryParam("id"));
    const produto = Database.getProdutoById(productId);
    
    if (produto) {
      this.render(produto);
    } else {
      this.renderNotFound();
    }
  },
  
  render(produto) {
    const detailsDiv = document.createElement("div");
    detailsDiv.style.cssText = "max-width: 900px; margin: 0 auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);";
    
    const img = document.createElement("img");
    img.src = produto.imagem;
    img.alt = produto.nome;
    img.style.cssText = "width: 100%; max-width: 500px; height: auto; border-radius: 8px; display: block; margin: 0 auto 20px;";
    
    const titulo = document.createElement("h2");
    titulo.textContent = produto.nome;
    titulo.style.cssText = "font-size: 2rem; font-weight: bold; margin-bottom: 10px; color: #333;";
    
    const categoria = document.createElement("p");
    categoria.textContent = "Categoria: " + produto.categoria;
    categoria.style.cssText = "font-size: 1rem; color: #2ea064; margin-bottom: 10px; font-weight: bold;";
    
    const preco = document.createElement("p");
    preco.textContent = Utils.formatPrice(produto.preco);
    preco.style.cssText = "font-size: 1.8rem; font-weight: bold; color: #2ea064; margin-bottom: 15px;";
    
    const estoque = document.createElement("p");
    estoque.textContent = produto.emEstoque ? "✓ Produto em estoque" : "✗ Produto esgotado";
    estoque.style.cssText = `font-size: 1rem; color: ${produto.emEstoque ? "#2ea064" : "#e05050"}; margin-bottom: 20px; font-weight: bold;`;
    
    const descricaoTitulo = document.createElement("h3");
    descricaoTitulo.textContent = "Descrição do Produto:";
    descricaoTitulo.style.cssText = "font-size: 1.3rem; font-weight: bold; margin-top: 20px; margin-bottom: 10px; color: #333;";
    
    const descricao = document.createElement("p");
    descricao.textContent = produto.descricao;
    descricao.style.cssText = "font-size: 1rem; color: #666; line-height: 1.6; margin-bottom: 20px;";
    
    const btnComprar = document.createElement("button");
    btnComprar.textContent = "Adicionar ao Carrinho";
    btnComprar.style.cssText = "padding: 12px 30px; background: #2ea064; color: #fff; border: none; border-radius: 4px; font-size: 1rem; font-weight: bold; cursor: pointer; transition: background 0.3s;";
    
    btnComprar.addEventListener("mouseenter", function() { this.style.background = "#1f7549"; });
    btnComprar.addEventListener("mouseleave", function() { this.style.background = "#2ea064"; });
    btnComprar.addEventListener("click", () => {
      alert("Produto '" + produto.nome + "' adicionado ao carrinho!");
    });
    
    detailsDiv.appendChild(img);
    detailsDiv.appendChild(titulo);
    detailsDiv.appendChild(categoria);
    detailsDiv.appendChild(preco);
    detailsDiv.appendChild(estoque);
    detailsDiv.appendChild(descricaoTitulo);
    detailsDiv.appendChild(descricao);
    detailsDiv.appendChild(btnComprar);
    
    this.container.appendChild(detailsDiv);
  },
  
  renderNotFound() {
    const notFound = document.createElement("div");
    notFound.style.cssText = "text-align: center; padding: 40px;";
    notFound.innerHTML = "<h2 style='color: #e05050;'>Produto não encontrado</h2><p>O produto solicitado não existe em nossa base de dados.</p>";
    this.container.appendChild(notFound);
  }
};
