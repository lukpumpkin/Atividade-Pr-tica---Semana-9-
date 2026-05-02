const data = {
    produtos: [
        { id: 1, nome: "Produto A", preco: 100, categoria: "Categoria 1", imagem: "imagem1.jpg", descricao: "Descrição do Produto A", emEstoque: true },
        { id: 2, nome: "Produto B", preco: 100, categoria: "Categoria 2", imagem: "imagem2.jpg", descricao: "Descrição do Produto B", emEstoque: true },
        { id: 3, nome: "Produto C", preco: 100, categoria: "Categoria 1", imagem: "imagem3.jpg", descricao: "Descrição do Produto C", emEstoque: true },
        { id: 4, nome: "Produto D", preco: 100, categoria: "Categoria 3", imagem: "imagem4.jpg", descricao: "Descrição do Produto D", emEstoque: true },
        { id: 5, nome: "Produto E", preco: 100, categoria: "Categoria 2", imagem: "imagem5.jpg", descricao: "Descrição do Produto E", emEstoque: true },
        { id: 6, nome: "Produto F", preco: 100, categoria: "Categoria 1", imagem: "imagem6.jpg", descricao: "Descrição do Produto F", emEstoque: true },
        { id: 7, nome: "Produto G", preco: 100, categoria: "Categoria 3", imagem: "imagem7.jpg", descricao: "Descrição do Produto G", emEstoque: true },
        { id: 8, nome: "Produto H", preco: 100, categoria: "Categoria 2", imagem: "imagem8.jpg", descricao: "Descrição do Produto H", emEstoque: true },
    ]
};

function formatoarPreco(preco) {
    return "R$ " + preco.toFixed(2);
}


