//npm install prompt-sync
const entrada = require('prompt-sync')({ sigint: true });

nomecliente = entrada("Sr.(a), por favor digite seu nome: ");

//armazenar
let carrinho = [];


//adicionar
function addProduto() {
    console.log(" ");
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
    console.clear();
    console.log(`Produto "${nome}" adicionado ao carrinho.`);

}



// Exibindo o conteúdo do carrinhos
function mostrarCarrinho() {
    console.log(" ");
    console.log("Sr.(a) " + nomecliente + " estes são os itens adicionados para a compra:")
    console.log(" ");

    let totaltodos = 0;
    carrinho.forEach((produto) => {
        let totalItem = produto.preco * produto.quantidade;
        console.log(`Descrição: ${produto.nome} - Preço: R$ ${produto.preco} - Quantidade: ${produto.quantidade} - Total: R$ ${totalItem.toFixed(2)}`);
        totaltodos += totalItem;
    });
    console.log(" ");
    console.log(`Total da compra no carrinho: R$ ${totaltodos.toFixed(2)}`);

}


//continua = entrada("Adicionar outro produto: (s/n): ");
//while (continua === 's' || continua === 'S');
let continua = "S";

while (continua.toLowerCase() === "s") {
    addProduto();
    mostrarCarrinho();
    console.log(" ");
    console.log(" ");
    continua = entrada("Adicionar outro produto: (s/n): ");

}

//sair
if (continua.toLowerCase() === "n") {
    //console.clear();
    console.log(" ");
    console.log("# # # # # # # # # # # #");
    console.log(" ");
    console.log("Volte sempre sr.(a) " + nomecliente);
    console.log(" ");
    console.log("# # # # # # # # # # # #");
}



// else {
//   removerProduto();
// }
//entrada("Deseja retirar algum produto: (s/n): ");