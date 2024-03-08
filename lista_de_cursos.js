/*
let cursos_de_idiomas = [
    {nome: 'Inglês', preco: 2500, carga_horaria: 160},
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Francês", preco: 3600, carga_horaria: 200 },
    { nome: "Chinês", preco: 5500, carga_horaria: 400 },
    { nome: "Alemão", preco: 3800, carga_horaria: 230 }
]

for (const curso of cursos_de_idiomas) {
    let nome_curso = curso.nome;
    let preco_curso = curso.preco;
    let carga_horaria_curso = curso.carga_horaria;

    let preco_hora_curso = preco_curso / carga_horaria_curso;

    console.log('Nome do curso: ', nome_curso);
    console.log('Carga horária do curso: ', carga_horaria_curso);
    console.log('Preço do curso: ', preco_curso, ',00');

    if (preco_hora_curso >= 15) {
        console.log('Hora/aula superior ou igual a R$ 15,00')
    }else{
        console.log('Hora/aula inferior a R$15,00');
    }

    console.log('\n');
}
*/
/*
let aluno = { nome: "Marcos", email: "marcos@email.com", idade: 25 };

for (let dados in aluno) {
    console.log(aluno[dados])
}
*/
/*
let contador =  10;

do {
    console.log(contador);
    contador--;
} while (contador > 0);
*/

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

let contador = 0;

do {

console.log(meses);
contador+2;


} while (meses.legth < contador);


