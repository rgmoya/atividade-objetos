//npm install prompt-sync

const entrada = require('prompt-sync')({ sigint: true });

nomecliente = entrada("Sr.(a), por favor digite seu nome: ");



//variavel armazenar
let carrinho = [];


//adicionar
function addProduto() {
    let nome = entrada("Digite o nome do produto: ");
    let preco = parseFloat(entrada("Digite o preço do produto: ")).toFixed(2);
    let quantidade = parseInt(entrada("Digite a quantidade do produto: "));

    let produto =
    {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    };

    carrinho.push(produto);
    console.log(`Produto "${nome}" adicionado ao carrinho.`);

}


//continua = entrada("Adicionar outro produto: (s/n): ");
//while (continua === 's' || continua === 'S');
//addProduto();

function validarcontinuar() {
    let continua = "S";
    while (continua.toLowerCase() === "s") {
        addProduto();
        continua = entrada("Adicionar outro produto: (s/n): ");
    }
}

function addmais() {
    addProduto
}


//addProduto();

// Exibindo o conteúdo do carrinho
//console.log(carrinho);

console.log("Sr.(a), " + nomecliente + " estes são seus itens do carrinho: ")

//let continua = "S";
//while (continua.toLowerCase() === "s") {
//    addProduto();
//    continua = entrada("Adicionar outro produto: (s/n): ");


carrinho.forEach((produto) => {
    console.log(`Descrição: ${produto.nome} - Preço: ${produto.preco} - Quantidade: ${produto.quantidade}`);
});