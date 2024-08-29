// Crie uma variável para armazenar seu nome completo
let nome = "Sheila Rodrigues Barcellos";

console.log(`Meu nome é ${nome} `);

// Crie uma variável para armazenar se você gosta de programar (true ou false)

const gosta = true;
if (gosta){
    console.log("Gosta de programar");
    console.log(gosta);
}

// Dadas as operações matemáticas abaixo, calcule-as utilizando Javascript, para cada número utilizar uma variável

//2 + (3 x 4) - 5

let dois = 2;
let tres = 3;
let quatro = 4;
let cinco = 5;
total = dois+(tres * quatro) - cinco;
console.log(total);

//2 x (3 + 4) - 5 ÷ 5
total2 = dois * (tres + quatro) - cinco / cinco;
console.log(total2);

//{[(10 - 4) / 2] * 3} + 1
let dez = 10;
let um = 1;
total3 = ((((dez - quatro) / dois)*tres)+um);
console.log(total3);

//3 * 4 / 2 + 1 - 5
total4 = (tres * quatro / dois) + (um - cinco);
console.log(total4);

//Crie um poema utilizando interpolação para inserir variáveis em diferentes linhas

let poema = 'Todos esses que aí estão. \nAtravancando meu caminho, \nEles passarão… \nEu passarinho!';

console.log(`\nPoema de Mário Quintana \n\n${poema} `);

//Crie um programa que exiba a data atual formatada utilizando interpolação

let data = new Date();

//console.log(data);

let dia = String(data.getDate()).padStart(2, '0'); // 1 -> 01
let mes = String(data.getMonth() + 1).padStart(2, '0'); //jan = 0, 3 ->
let ano = data.getFullYear();

let dataAtual = `${dia}/${mes}/${ano}`; //concatenar

console.log(`\nHoje é dia ${dataAtual} \n`); 

//Crie um programa que calcule a área de um retângulo, solicitando a base e a altura ao usuário. Exiba o resultado utilizando interpolação

let base = parseFloat(prompt("Entre com a base do triângulo: "));
let altura = parseFloat(prompt("Entre com a altura do triângulo: "));

let area = base * altura;

console.log("Base: ", base);
console.log("Altura: ", altura);
console.log("A área do triângulo é: ", area);

//Crie uma condicional para verificar se o caractere é uma vogal

let letra = "z";

if (letra == "a") {
    console.log("É uma vogal \n");
}
else if (letra == "e") {
     console.log ("É uma vogal \n");
}
else if (letra == "i") {
    console.log ("É uma vogal \n");
}
else if (letra == "o") {
    console.log ("É uma vogal \n");
}
else if (letra == "u") {
    console.log ("É uma vogal \n");
}
else { 
    console.log ("Não é uma vogal \n");
}

//Crie uma condicional para verificar se o número é par ou é impar

let numero = 7;

let resto = numero%2;

if (resto == 0){
    console.log("O número é par,", numero);
}
else {
    console.log("O número é impar,", numero);
}

//Crie uma condicional if else if else para verificar se um triângulo é equilátero, isósceles ou escaleno:

let lado1 = 1; 
let lado2 = 2;
let lado3 = 3;

if (lado1 === lado2 && lado1 === lado3 ){
    console.log("Este é um triângulo equilátero \n");
}
else if(lado1 === lado2 || lado1 === lado2 || lado2 === lado3){
    console.log("Este é um triângulo isósceles \n");
}
else if(lado1 !== lado2 && lado2 != lado3){
    console.log("Este é um triângulo escaleno \n");
}

//Calcule a média do aluno e verifique se ele foi aprovado

let nota1 = 5, nota2 = 10; media = (nota1 + nota2)/2;

if (media < 7 ){
    console.log("O aluno foi reprovano, média = ", media);
}
else {
    console.log("O aluno foi aprovado, média", media);
}
// Crie uma variável para armazenar um array com seus hobbies

let hobbies = ['musica', 'dança', 'fotografia', 'leitura', 'caminhada'];

console.log("Meus hobbies são: ", (hobbies));

/* 
Crie um array chamado frutas com os nomes de 5 frutas diferentes.
Acesse e imprima o segundo elemento do array.
Adicione mais duas frutas ao final do array.
Remova a primeira fruta do array.

*/

let frutas = ['banana', 'maçã', 'laranja', 'manga', 'abacate'];

console.log(frutas[1]);

frutas.push('uva', 'melão');
console.log(frutas);

frutas.shift();
console.log(frutas);

/* 
Crie uma variável e atribua um valor de qualquer tipo (número, string, booleano).
Utilize o operador typeof para verificar o tipo da variável.
Imprima o tipo da variável no console.
*/

var tipo = true;
console.log(typeof tipo);

/* Crie um programa que simule uma calculadora simples. O usuário deve inserir dois números e um operador (+, -, *, /). Utilize a estrutura switch para realizar a operação correspondente e exibir o resultado. */

var primeiroValor = parseInt(prompt('Digite o primeiro valor: \n'));
 do {
    var operacao = prompt('Digite o sinal da operação matemática: ');

 } while(operacao!="+" && operacao!="-" && operacao!="/" && operacao!="*");

 var segundoValor = parseInt(prompt('Digite o segundo valor: \n'));

 var resultado = 0;

 switch(operacao){
    case "+":
        resultado = primeiroValor + segundoValor;
        console.log(resultado);
        break

    case "-":
        resultado = primeiroValor - segundoValor;
        console.log(resultado);
        break

    case "/":
        resultado = primeiroValor / segundoValor;
        console.log(resultado);
        break

    case "*":
        resultado = primeiroValor * segundoValor;
        console.log(resultado);
        break
 }

/*Ao final suba o arquivo javascript no seu github em um repositorio chamado exercícios javascript. 

Irei sortear o exercício onde o aluno irá explicar via Teams como chegou na conclusão. Essa atividade é individual. */