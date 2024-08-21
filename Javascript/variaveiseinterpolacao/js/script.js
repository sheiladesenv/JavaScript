// comentáriode uma linha
/* comentário de várias linhas */

//exibindo um número na tela
console.log(2);

//exibindo o tipo de dado na tela
console.log(typeof 2.5);

//declarando constante e imprimindo
const meunumero = 10;
console.log(meunumero);

//erro ao alterar constante
const numero = 5;
//numero = 3;
console.log(numero);

//string utilizando aspas simples e aspas duplas
console.log('Estou aprendendo Javascript');
console.log("Continue a aprendizagem");

//contagem de strings
const nome = "Carlos Cunha";
console.log(nome.length);

//string de números
const valores ="589";
console.log(valores);
console.log(typeof valores);

//Pular uma linha da String
console.log("vou pular a linha \n R$ 50,00");

//Espaçamento na string
console.log("Espaçamento \t na string ");

//variáveis var e let - var para escopo global - let para escopo local
var numero1 = 5;
numero1 = 3;
console.log(numero1);

let numero2 = 3;
numero2 = 3;
console.log(numero2);

// Inrwepolação
const sobrenome = "Cunha";
console.log(`Olá, ${sobrenome}`);

const idade = 34;
console.log(`Sua idade é ${idade} anos`);

console.log(`Seu sobrenome é ${sobrenome}. sua idade é ${idade}`);