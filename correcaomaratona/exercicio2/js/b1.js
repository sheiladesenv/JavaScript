//Escreva uma função que, dada uma lista de objetos "Aluno", retorna a lista
//de alunos que têm nota acima de 8.

function filtrarAlunosComNotaAlta(){
    //filtra a lista de alunos - método filter() do array
    return alunos.filter(aluno => aluno.nota > 8);
}

let alunos = [
    { nome: "Ana", nota: 9},
    { nome: "Wellington", nota: 7},
    { nome: "Lucas", nota: 8.5},
    { nome: "Sheila", nota: 6},
];

//Chama a função e armazena o resultado
let alunosComNotaAlta = filtrarAlunosComNotaAlta(alunos);
console.log(alunosComNotaAlta);