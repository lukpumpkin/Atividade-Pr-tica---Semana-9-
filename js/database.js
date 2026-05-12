const Database = {
  produtos: [
    { id: 1,
      nome: "Fone de Ouvido Bluetooth Sem Fio", 
      preco: 189.90, categoria: "Eletrônicos", 
      imagem: "./images/fone.jpg", 
      descricao: "Som de alta qualidade com cancelamento de ruído e bateria de 24h.", 
      emEstoque: true },
    { id: 2, 
      nome: "Câmera Digital Full HD 1080p", 
      preco: 449.90, categoria: "Eletrônicos", 
      imagem: "./images/image-0.webp", 
      descricao: "Resolução 1080p com zoom óptico 5x e estabilizador de imagem.", 
      emEstoque: true },
    { id: 3, 
      nome: "Relógio Inteligente Fitness Tracker", 
      preco: 299.90, categoria: "Wearables", 
      imagem: "./images/relogio.jpg", 
      descricao: "Monitor cardíaco, pedômetro e GPS integrado. Resistente à água.", 
      emEstoque: true },
    { id: 4, 
      nome: "Teclado Mecânico RGB Gaming", 
      preco: 329.90, categoria: "Periféricos", 
      imagem: "./images/teclado.jpg", 
      descricao: "Switches mecânicos, iluminação RGB customizável e 103 teclas.", 
      emEstoque: true },
    { id: 5, 
      nome: "Mouse Sem Fio com Precisão Óptica", 
      preco: 79.90, categoria: "Periféricos", 
      imagem: "./images/mouse.jpg", 
      descricao: "Sensor óptico de 1200 DPI, bateria durável e design ergonômico.", 
      emEstoque: true },
    { id: 6, 
      nome: "Monitor LED 24\" Full HD 60Hz", 
      preco: 599.90, categoria: "Monitores", 
      imagem: "./images/monitor.webp", 
      descricao: "Resolução 1920x1080, painel IPS e conexões HDMI e VGA.", 
      emEstoque: true },
    { id: 7, 
      nome: "Webcam Full HD 1080p com Microfone", 
      preco: 149.90, categoria: "Câmeras", 
      imagem: "./images/webcam.webp", 
      descricao: "Microfone integrado, visão angular de 80° e plug and play USB.", 
      emEstoque: true },
    { id: 8, 
      nome: "Headset Gamer Profissional 7.1", 
      preco: 249.90, categoria: "Audio", 
      imagem: "./images/fone-de-ouvido.webp", 
      descricao: "Áudio surround 7.1, microfone retrátil e almofadas confortáveis.", 
      emEstoque: true }
  ],
  
  getProdutoById(id) {
    return this.produtos.find(p => p.id === id);
  },
  
  getCategorias() {
    const categorias = [];
    this.produtos.forEach(p => {
      if (!categorias.includes(p.categoria)) categorias.push(p.categoria);
    });
    return categorias;
  }
};
