
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