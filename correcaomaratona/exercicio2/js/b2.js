//Escreva uma função que, dada uma lista de objetos "Aluno", retorna a lista
//de alunos que têm nota acima de 8.

const alunos = [
    { nome: "João", nota: 7},
    { nome: "Maria", nota: 5},
    { nome: "José", nota: 6},
    { nome: "Ana", nota: 7},
    { nome: "Lucas", nome: 6.5}
];

function filtrarAlunos(){
    return alunos.filter(aluno => aluno.nota > 8);
}

function mostrarAlunos(){
    const alunosFiltrados = filtrarAlunos();
    const listaAlunos = document.getElementById('listaAlunos');
    listaAlunos.innerHTML = '';

    if (alunosFiltrados.length === 0 ){
        listaAlunos.innerHTML = '<li> Nenhum aluno encontrado com nota acima de 8.';
    } else{
        alunosFiltrados.forEach(aluno => {
            const li = document.createElement('li');
            li.textContent = `${aluno.nome} - Nota: ${aluno.nota}`;
            listaAlunos.appendChild(li);
        });
    }
}