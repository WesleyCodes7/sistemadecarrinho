// Define uma array vazia para armazenar os produtos no carrinho
let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarProduto() {
    // Solicita ao usuário que digite o nome, preço e quantidade do produto
    let nome = prompt("Digite o nome do produto:");
    let preco = parseFloat(prompt("Digite o preço do produto:"));
    let quantidade = parseInt(prompt("Digite a quantidade do produto:"));

    // Calcula o subtotal do produto (preço * quantidade)
    let subtotal = preco * quantidade;

    // Adiciona o produto ao carrinho como um objeto com nome, preço, quantidade e subtotal
    carrinho.push({ nome: nome, preco: preco, quantidade: quantidade, subtotal: subtotal });

    // Exibe um alerta informando que o produto foi adicionado ao carrinho
    alert("Produto adicionado ao carrinho!");
}

// Função para exibir os itens no carrinho na página HTML
function exibirCarrinho() {
    // Inicializa uma string HTML com um título "Carrinho de Compras"
    let carrinhoHTML = "<h2>Carrinho de Compras</h2>";
    
    // Itera sobre cada produto no carrinho
    carrinho.forEach(function (produto) {
        // Para cada produto, adiciona informações como nome, preço, quantidade e subtotal ao HTML
        carrinhoHTML += "<p><strong>Nome:</strong> " + produto.nome + "</p>";
        carrinhoHTML += "<p><strong>Preço:</strong> R$ " + produto.preco.toFixed(2) + "</p>";
        carrinhoHTML += "<p><strong>Quantidade:</strong> " + produto.quantidade + "</p>";
        carrinhoHTML += "<p><strong>Subtotal:</strong> R$ " + produto.subtotal.toFixed(2) + "</p>";
        carrinhoHTML += "<hr>"; // Adiciona uma linha horizontal entre os produtos
    });
    
    // Atualiza o conteúdo da div com id "container" com o HTML do carrinho
    document.getElementById("container").innerHTML = carrinhoHTML;
}

// Função para calcular o valor total da compra
function calcularTotal() {
    // Inicializa a variável total como zero
    let total = 0;
    
    // Itera sobre cada produto no carrinho
    carrinho.forEach(function (produto) {
        // Para cada produto, adiciona o subtotal ao total
        total += produto.subtotal;
    });
    
    // Exibe um alerta com o total da compra formatado como moeda
    alert("Total da compra: R$ " + total.toFixed(2)); // toFixed formata um numero com precisão especifica de casas decimais.
}
