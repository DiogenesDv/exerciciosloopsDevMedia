// const readLine_sync = require('readline-sync');
// const colors = require('colors');

//---------Lendo um array sem loop---------
// let aluno = ['Marcos Deogado', 'marcossos@email.com',25];
// console.log('Lendo um Arrey sem loop')
// console.log(`${aluno[0]}, ${aluno[1]}, ${aluno[2]}`);

// let alunos = [
//   ['Marcos Deogado', 'marcossos@email.com',25],
//   ['Mara Deogado', 'mariallu@email.com',27],
//   ['Suri Oliv', 'surisuri@email.com',21]
// ];

// console.log(`${alunos[0][0]}, ${alunos[0][1]}, ${alunos[0][2]}`);


// console.log('\n');
// //----------Lendo um OBJETO sem loop-------------------
// console.log('Lendo um Objeto sem loop')
// let pessoa = {nome:'Diogo Alcantara', email:'diogoalcantara022@email.com', idade: 32}
// console.log(`${pessoa.nome}, ${pessoa.idade}, ${pessoa.email}`)

// let pessoas = [
//   {nome:'Diogo Alcantara', email:'diogoalcantara022@email.com', idade: 32},
//   {nome:'Carlos Arauto', email:'carlos22@email.com', idade: 20},
//   {nome:'Jose largo', email:'joseido022@email.com', idade: 52}
// ];

// console.log(`${pessoas[0].nome}, ${pessoas[0].idade}, ${pessoas[0].email}`)

//----------------------------------While
//let cont = 0;
// while (cont <= 5) {
//     console.log(cont);
//     cont++;
// }


// console.clear();

// console.log('#######')                                           
// console.log('   #      ##   #####  #    #   ##   #####    ##   ')
// console.log('   #     #  #  #    # #    #  #  #  #    #  #  #  ')
// console.log('   #    #    # #####  #    # #    # #    # #    # ')
// console.log('   #    ###### #    # #    # ###### #    # ###### ')
// console.log('   #    #    # #    # #    # #    # #    # #    # ')
// console.log('   #    #    # #####   ####  #    # #####  #    # ')
// console.log('');
// //let num = 2;
// //console.log('Tabuada de ', num);
// let nome = readLine_sync.question('Digite seu nome: ')//Bibliotecs READLINE_SYNC é responsavel pela entrada de dados em Node no Js, porem toda netrada é como string, por isso tem que converter para numeros
// console.log(`Ola Sr. ${nome}`)
// let num = Number(readLine_sync.question("Digite um numero: ").replace(',','.'));//REPLACE-troca a virgula pelo ponto

// let cont = 0;
// while (cont <= 10) {
//     let resul = num * cont;
//     console.log(`${num} x ${cont} = ${resul}`.italic);
//     cont++;
// }


// console.clear()

// console.log("###                   #          ##                 ")
// console.log(" #   ## # #  ##     ### ###       # # # ### ###  ## ")
// console.log(" #  # #  #  # #     # # ##        # # # #   # #  #  ")
// console.log(" #  ### # # ###     ### ###     # # ### #   ### ##  ")
// console.log(" #                               #                  ")

// let capital_emprestado = Number(readLine_sync.question('Digite o valor emprestado: ').replace(',','.'));
// let taxa_juros = Number(readLine_sync.question('Digite o valor da taxa de juros: ').replace(',','.'));
// let parcelas_totais = Number(readLine_sync.question('Digite a quantidade parcelas: '));

// let cont = 1;

// while (cont <= parcelas_totais) {
//     let numero_de_parcelas = cont;

//     let juros_do_emprestimo = capital_emprestado * taxa_juros * numero_de_parcelas
//     console.log(`A taxa de juros no periodo de ${numero_de_parcelas} mes(s) é de R$ ${juros_do_emprestimo}`)

//     cont++;
// }


//------------------------------------------------DO-WHILE
// console.clear();
// let conti = 0;
// do{//Execulta pelomenus uma vez a condicao
//  console.log(`N u m e r o = ${conti}`)
//  conti++
// }while(conti < 0)

// console.log('#######')
// console.log('   #      ##   #####  #    #   ##   #####    ##   ')
// console.log('   #     #  #  #    # #    #  #  #  #    #  #  #  ')
// console.log('   #    #    # #####  #    # #    # #    # #    # ')
// console.log('   #    ###### #    # #    # ###### #    # ###### ')
// console.log('   #    #    # #    # #    # #    # #    # #    # ')
// console.log('   #    #    # #####   ####  #    # #####  #    # ')
// console.log('');

// let num = Number(readLine_sync.question("Digite um numero: ").replace(',', '.'));

// let cont = 0;
// do {
//     let resul = num * cont;
//     console.log(`${num} x ${cont} = ${resul}`.italic);
//     cont++;
// }
// while (cont <= 10)


// let cont = 0;

// let arrayMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
//  do{
//    console.log(`Mês - ${cont + 1} - ${arrayMeses[cont]}\n`);
//    cont++;
//  }while (cont < arrayMeses.length) 


//-----------------------------------------FOR.....
// console.clear();

// let multiplicador = Number(readLine_sync.question('Digite um numero para gerar a Tabuada: ').replace(',','.'));

// for(let contador = 0; contador <= 10; contador++){
//   let resultado = multiplicador * contador;
//   console.log(`${multiplicador} x ${contador} = ${resultado}`)
// }

//----------------------------------------FOR----witch-break-e-continue----

//BREAK
// console.clear();

// let funcionarios = [
//   { id: 1, nome: "César", habilitado: false },
//   { id: 2, nome: "Jéssica", habilitado: true },
//   { id: 3, nome: "Renan", habilitado: false },
//   { id: 4, nome: "Marlon", habilitado: false },
//   { id: 5, nome: "Ana", habilitado: true },
// ]

// let achouHabilitado = false;

// for (let index = 0; index < funcionarios.length; index++) {
//   let funcionario = funcionarios[index];
//   if (funcionario.habilitado == true) {
//     console.log(`Funcionario habilitado encontrado: Id ${funcionario.id} - ${funcionario.nome}`.blue)
//     achouHabilitado = true;
//     // break; com o BREAK ele para no primeiro encontrado!
//   }
// }

// if (!achouHabilitado) {
//   console.log('Nenhum funcionario habilitado encontrado'.red);
// }

//CONTINUE

// function ForComContinue() {
//   console.clear();

//   let alunos = [
//     { id: 1, nome: 'Bruna', media: 8 },
//     { id: 2, nome: "Laura", media: 7 },
//     { id: 3, nome: "José", media: 5 },
//     { id: 4, nome: "Guilherme", media: 4 },
//     { id: 5, nome: "Rafael", media: 10 },
//   ];

//   console.log('----------Notas de Aprovados-------------------');
//   for (let cont = 0; cont < alunos.length; cont++) {

//     let aluno = alunos[cont];

//     if (aluno.media < 6) {//pula os reprovados e mostra so os aprovados
//       continue;
//     }
//     console.log(`Id: ${aluno.id}`);
//     console.log(`Nome: ${aluno.nome}`);
//     console.log(`Media: ${aluno.media}`);
//     //console.log('\n');

//   };


//   console.log('----------Notas de Reprovados-------------------');
//   for (let cont = 0; cont < alunos.length; cont++) {

//     let aluno = alunos[cont];

//     if (aluno.media > 6) {//Pula os aprovados e mostra so o reprovados
//       continue;
//     }
//     console.log(`Id: ${aluno.id}`);
//     console.log(`Nome: ${aluno.nome}`);
//     console.log(`Media: ${aluno.media}`);
//     //console.log('\n');

//   };
// }

// ForComContinue();



//-----------------------------------------FOR--OF-------------

// console.clear();

// function ImprimindoContatosComForOf(){

//   let contatos = [

//     {id: 1, nome: "Daiana"},
//     {id: 2, nome: "Raquel"},
//     {id: 3, nome: "Diogo"},
//     {id: 4, nome: "Sandro"},
//     {id: 5, nome: "Carolina"}
  
//   ];
  
//   for (const contato of contatos) {
  
//     console.log(`Id - ${contato.id} - ${contato.nome}`);
  
//   }

// }

// ImprimindoContatosComForOf()



//---------------------------------------------FOR--IN---

// console.clear();

// let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

// let percentual_desconto = 5;

// for (const propriedade in carro) {

//   let propsDoArray = propriedade  + " - " +  carro[propriedade];

//   if(propriedade == 'preco'){

//     let desconto = (carro[propriedade]* percentual_desconto) / 100;
//     let novo_preco = carro[propriedade] - desconto;
//     propsDoArray = novo_preco;

//     console.log(`Novo preço R$ ${propsDoArray},00`);

//   }else{
//     console.log(`${propsDoArray}`)
//     //console.log(`----${propriedade} : ${carro[propriedade]}`)
//   }
  
// }

// let paises = ['Brasil', 'Suiça', 'França' ,'Japão'];

// let cont = 0;

// while(cont < paises.length){
//   console.log(paises[cont]);
//   cont++
// }


//---------------------------FOR IN ----------------------

// let estudante = {nome: 'Luiz', idade: 25}
// for(let dados in estudante){
//   console.log(`${dados} - ${estudante[dados]}`);//Primeira iteração = aluno.nome
//                                     //Segunda iteração = aluno.idade
// }

// let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

// let percentual_desconto = 5;

// for ( let propriedade in carro ) {

//     if ( propriedade == "preco" ) {

//         let preco = propriedade;

//         let desconto = ( carro[preco] * percentual_desconto ) / 100;

//         let novo_preco = carro[preco] - desconto;

//         console.log("novo preço: R$" + novo_preco + ",00");

//     } else {

//         console.log(propriedade + ": " + carro[propriedade]);

//     }

// }



let produtos = [
  { id: 1, nome: "pizza", preco: 50 },
  { id: 2, nome: "macarronada", preco: 25 },
  { id: 3, nome: "lasanha", preco: 45 },
  { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5; //5%

for(let cont = 0; cont < produtos.length; cont++){
  
  let produto = produtos[cont];

  for(let propriedade in produto){
    
    if(propriedade == "preco"){

      let preco = propriedade;

      let novo_preco = produto[preco] - desconto;

      console.log(` Novo valor com desconto: ${novo_preco}`);

    }else{
      console.log(`${propriedade}: ${produto[propriedade]}`);
    }

  }

}