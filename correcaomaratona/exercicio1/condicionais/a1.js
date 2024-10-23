//Função para converter Celsius em Fahrenheit
function celsiusParaFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}

let celsius = prompt("Digite a temperatura em graus Celsius:");

//Converter o valor para Fahrenheit
let fahrenheit = celsiusParaFahrenheit(celsius);

//Exibir o resultado
console.log(`A temperatura em Fahrenheit é: ${fahrenheit}`);
