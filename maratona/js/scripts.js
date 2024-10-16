
//1.	Crie um programa que peça ao usuário um valor em graus Celsius e converta para Fahrenheit. 
function converter(){
    let celsius = 38;
    return (celsius * 9/5) + 32; 
    } 

let conversao = converter();
console.log(conversao);

//solicite ao usuário a base e a altura de um triangulo e calcule sua área//
function area(){
    let base = 6;
    let altura = 8;
    return ((base * altura / 2));
}

let resultado = area();
console.log(resultado);

//peça ao usuário um numero e exiba o seu quadrado e seu cubo//

function potencia(){
    let numero = 7;
    let quadrado = numero ** 2;
    let cubo = numero ** 3;

    console.log(`${quadrado}, ${cubo}`);
}

potencia();

//solicite  dois números ao usuário e exiba a potencia do  primeiro numero elevado ao segundo//
function potencia2(){
    let numero1 = 6;
    let numero2 = 4; 

    return (numero1 ** numero2);

}
let elevado = potencia2();

console.log(elevado);

//escreva um programa que peça ao usuário um numero e informe se ele está entre 1 e 100//
function cem(){
    let numero = 85;
     if (numero >= 1 && numero <=100) {
        console.log(`O número ${numero} está entre 1 e 100`);
        } else{
            console.log(`O número ${numero} não está entre 1 e 100`);    
        }
}

cem();

//Implemente uma função que receba a idade de uma pessoa e retorne uma mensagem informando se ela é criança , adolescente ou adulta//
function idade(){
    let numero = 7;
    if(numero <= 12){
        console.log("É criança");
    }
    else if(numero > 12 && numero <= 18){
        console.log("É adolescente");
    }
    else{
        console.log("É adulto");
    }
}

idade();

//crie um programa que solicite um mês de 1 á 12 e informe quantos dias esse mês possui //
function meses(){
    let mes = 2;
    switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log ("Este mês tem 31 dias.");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log ("Este mês tem 30 dias.");
            break;
        case 2:
            console.log ("Fevereiro geralmente tem 28 dias, mas em anos bissextos tem 29.");
            break;
        default:
            console.log ("Mês inválido. Por favor, insira um número entre 1 e 12.");
    }
}
meses();

//escreva um programa que peça ao usuário um número e verifique se ele é positivo , negativo ou zero//
function validar(){
    let numero = 25;
    if (numero < 0){
        console.log("O número digitado é negativo");
    } else if (numero == 0){
        console.log("O número digitado foi o zero");
    } else {
        console.log("O número digitado é positivo");
    }
} 
validar();

//crie uma função que aceita dois números e retorna da divisão do primeiro pelo segundo . Lide com divisões por zero//
function divisao(){
    let dividendo = 8;
    let divisor = 5;
    resultado = dividendo / divisor;
    if (divisor == 0 ){
        console.log("Erro: Divisão por zero não é permitida.");
    }
    else{
        console.log(resultado);
    }
}

divisao();

//escreva uma função que recebe uma lista de strings e retorna a lista ordenada em ordem alfabética //
function ordenar(){
    let frutas = ['banana', 'abacaxi', 'laranja', 'maçã', 'pera', 'uva'];
    frutas.sort();
    console.log(frutas);
}
ordenar();

//escreva uma função que aceita um array de inteiros e retorna o maior numero presente//
function acharMaiorNumero(array) {
    
    if (array.length === 0) {
        console.log("O array está vazio.");
        return; 
    }

    let maiorNumero = array[0]; 

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]; 
        }
    }

    console.log(maiorNumero); 
}

acharMaiorNumero([10, 5, 20, 8, 15]);

//Escreva um programa que imprima todos os números impares de 1 a 100//

function impares(){
    for (let i = 1; i <= 100; i++){
        if (i % 2 !== 0){
            console.log(i);
        }
    }
}
impares();

//escreva um programa que imprima todos os números de 1 50 e indique quais são múltiplos de 5//

function cincos(){
    for (let i = 1; i <= 50; i++){
        if (i % 5 == 0){
            console.log(i);
        }
    }
}
cincos();

//faça um programa que peça um numero ao usuário e calcule a soma de todos os números de 1 até esse número//

function Soma(n) {
    let numero = 12;
    let soma = 0;
    for (let i = 1; i <= numero; i++) {
        soma += i; 
    }
    console.log(`Soma = ${soma}`);

}
Soma();

//crie um array de objetos "produtos" e escreva uma função que calcule o valor total em estoque //

let produtos = [
    { nome: "Produto A", preco: 10.00, quantidade: 5 },
    { nome: "Produto B", preco: 20.50, quantidade: 3 },
    { nome: "Produto C", preco: 15.75, quantidade: 10 },
    { nome: "Produto D", preco: 5.00, quantidade: 2 },
];
function calcularEstoque(produtos){
    let total = 0;
    for (let produto of produtos) {
        total += produto.preco * produto.quantidade; 
    }

    return total;
}
const valorTotal = calcularEstoque(produtos);
console.log(`O valor total em estoque é: R$ ${valorTotal.toFixed(2)}`);

//implemente um método em um objeto "estudante" que retorna se o estudante está aprovado ou reprovado ,com base em suas notas//
const estudante = {
    nome: "João",
    notas: [8.5, 7.0, 9.0], 

    verificarAprovacao: function() {
        const soma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0); 
        const media = soma / this.notas.length; 

        if (media >= 7) {
            return "Aprovado"; 
        } else {
            return "Reprovado"; 
        }
    }
};


const resultado1 = estudante.verificarAprovacao();
console.log(`${estudante.nome} está ${resultado1}.`); 

//crie uma função que dada uma lista de objetos "funcionário" , calcule a soma dos salários //
let funcionarios = [
    { nome: "Joao", salario: 1800.00 },
    { nome: "Luis", salario: 2000.50},
    { nome: "Felipe", salario: 1500.75},
    { nome: "Julia", salario: 5000.00},
];
function calcularSalario(funcionarios){
    let total = 0;
    for (let funcionario of funcionarios) {
        total += funcionario.salario; 
    }

    return total;
}
const valorTotal1 = calcularSalario(funcionarios);
console.log(`O valor total de salários é: R$ ${valorTotal1.toFixed(2)}`);

//crie uma função que recebe  uma array de objetos "produtos" e calcule a média de preços
let produtos1 = [
    { nome: "Produto A", preco: 10.00},
    { nome: "Produto B", preco: 20.50},
    { nome: "Produto C", preco: 15.75},
    { nome: "Produto D", preco: 5.00},
];
function calcularSoma(produtos1){
    let soma = 0;
    for (let produto of produtos) {
        soma += produto.preco; 
    }

    return soma / produtos.length;
}
const valorTotal2 = calcularSoma(produtos1);
console.log(`A média de preços é: R$ ${valorTotal2.toFixed(2)}`);

//escreva uma função que recebe um array de objetos "aluno" e retorna a lista de alunos que tem nota acima de 8 //

const alunos = [
    { nome: "Gabriel", nota: 8.5 },
    { nome: "Laura", nota: 9.5 },
    { nome: "Augusto", nota: 8.0 },
    { nome: "Mariana", nota: 5.0 },
    { nome: "Nicolas", nota: 9.2 },
];

function notasAltas(alunos){
    return alunos.filter(aluno => aluno.nota > 8);
}
const listaNotasAltas = notasAltas(alunos);
console.log("Alunos com nota acima de 8:");
listaNotasAltas.forEach(aluno => {
    console.log(`${aluno.nome} - Nota: ${aluno.nota}`);
});

//implemente uma função que aceita uma array de objetos 'funcionário" e retorna o funcionário com o maior salario//
const funcionarios2 = [ // Renomeado para "funcionarios"
    { nome: "Maria", salario: 4000 },
    { nome: "José", salario: 1500 },
    { nome: "Ana", salario: 3000 },
    { nome: "Pedro", salario: 4500 },
];

function encontrarFuncionarioComMaiorSalario(funcionarios2) { // Usar o nome correto
    if (funcionarios.length === 0) { // Usar o nome correto
        return null; 
    }

    let funcionarioMaiorSalario = funcionarios2[0]; // Usar o nome correto
    for (let funcionario of funcionarios2) { // Usar o nome correto
        if (funcionario.salario > funcionarioMaiorSalario.salario) {
            funcionarioMaiorSalario = funcionario;
        }
    }
    return funcionarioMaiorSalario; 
}

const funcionarioComMaiorSalario = encontrarFuncionarioComMaiorSalario(funcionarios2); // Usar o nome correto
if (funcionarioComMaiorSalario) {
    console.log(`O funcionário com o maior salário é: ${funcionarioComMaiorSalario.nome} - Salário: R$ ${funcionarioComMaiorSalario.salario}`);
} else {
    console.log("Não há funcionários na lista.");
}

//escreva uma função que dada uma lista de objetos " pessoa", retorne as pessoas que tem mais de 30  anos//
const pessoas = [
    { nome: "Carlos", idade: 25 },
    { nome: "Ana", idade: 35 },
    { nome: "João", idade: 40 },
    { nome: "Mariana", idade: 28 },
    { nome: "Pedro", idade: 33 },
];
function pessoasComMaisDe30Anos(pessoas) {
    return pessoas.filter(pessoa => pessoa.idade > 30); // Retorna pessoas com mais de 30 anos
}
const listaPessoasComMaisDe30 = pessoasComMaisDe30Anos(pessoas);
console.log("Pessoas com mais de 30 anos:");
listaPessoasComMaisDe30.forEach(pessoa => {
    console.log(`${pessoa.nome} - Idade: ${pessoa.idade}`);
});
