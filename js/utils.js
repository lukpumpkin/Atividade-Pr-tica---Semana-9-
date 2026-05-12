const Utils = {
  formatPrice(preco) {
    return "R$ " + preco.toFixed(2).replace(".", ",");
  },
  
  getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  },
  
  log(tipo, mensagem) {
    if (tipo === "header") {
      console.log("═".repeat(60));
      console.log(mensagem);
      console.log("═".repeat(60));
    } else if (tipo === "success") {
      console.log("✓ " + mensagem);
    } else {
      console.log(mensagem);
    }
  }
};
