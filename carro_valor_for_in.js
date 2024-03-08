let carro_dados = {
    nome: 'Argo', 
    marca: 'Fiat', 
    preco: 50000, 
    ano: 2020
}

let percentual_desconto = 5;

for (const propriedade in carro_dados) {
    if (propriedade == 'preco') {
        let preco = propriedade;

        let desconto = (carro_dados[preco]* percentual_desconto) / 100;

        let novo_preco = carro_dados[preco] - desconto;

        console.log('Preço com ', percentual_desconto, '%', 'de desconto é ', novo_preco)
    }else{
        console.log(propriedade,': ', carro_dados[propriedade]);
    }

    if (propriedade == 'ano') {
        let mensagem = carro_dados[propriedade];
        console.log(mensagem, ' não é carro do ano!')
    }
}