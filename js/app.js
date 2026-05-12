function init() {
  Utils.log("success", "Página carregada");
  
  const productList = document.getElementById("product-list");
  const productDetailsContainer = document.getElementById("product-details-container");
  
  if (productList) {
    Catalog.init();
  } else if (productDetailsContainer) {
    ProductDetails.init();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
 