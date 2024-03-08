//let dataHoje = new Date();
//console.log(dataHoje.toString());

//Calculando a diferenca de uma data de postagem

//pegando o timestamp das datas
//const dataAtual = new Date();
//const dataPostagem = new Date('2022-12-01T06:00');
//verificando a diferença em milissegundos
//const diferenca = dataAtual - dataPostagem;
//convertendo em horas
//const segundos = diferenca / 1000;
//const minutos = segundos / 60;
//const horas = minutos / 60;
//
//console.log(horas);

/*
//Teste de Date()
const hoje = new Date();
//Imprimindo uma string com a data e a hora local
console.log('Data e Hora de Hoje:',hoje.toLocaleString(),'Hs');
//Imprimindo uma string com a data armazenada
console.log(hoje.toString());
//Imprimindo uma string com a data universal (UTC)
console.log(hoje.toUTCString());
//Imprimindo timestamp
console.log(hoje.valueOf());
*/


const pessoa = {

    name: 'Diogenes',
    idade: 33,
    profissao: 'Tecnico 5g'

};

console.log('Esse é o FOR IN');

for (let key in pessoa) {
    console.log(key, ' : ', pessoa[key]);
}

//--------------------------------------------------

 const cores = {
     co1:'red',
     co2:'green',
     co3:'blue'
 };

const pessoas = [

    {name: 'Manuel', idade: 30, profissao: 'Tecnico de Informatica'},
    {name: 'Rodrigo', idade: 23, profissao: 'Auxiliar de Informatica'},
    {name: 'Igor', idade: 25, profissao: 'Dev Junior'}

]

//PARA APENAS COLECOES DE OBJETOS USA - SE FOR OF
console.log('Esse é o FOR OF')

for (let propriedades of pessoas){

    console.log(propriedades.name, ' : ', propriedades.idade, ' : ', propriedades.profissao);

};

//PARA APENAS UM OBJETO USA - SE  FOR IN
for (const key in cores) {
    
    console.log(key, ' - ', cores[key])

}
