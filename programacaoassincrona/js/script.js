//setTimeout
function exibirMensagem(){
    console.log("A mensagem foi exibida após 3 segundos");
}
 
setTimeout(exibirMensagem, 3000);

//setTimeout
 
//setInterval(exibirMensagem, 3000);

//Promises
const promise = Promise.resolve(2+5);

console.log("Exibir primeiro teste");

promise

.then((value) => {
    console.log(`A soma dos valores informados é ${value}`);
    return value;
})

.then((value) => value - 1)
.then((value) => console.log(`Esse é o novo resultado ${value}`));

console.log("Exibir novo teste");

//Rejeiçao de promise
function verificarNumero(numero){
    return new Promise((resolve, reject) => {
        if (typeof numero === 'number'){
            resolve(`O número digitado foi "${numero}" é um número.`);
        }else{
            reject(`O valor informado "${numero}" não é um número.`);
        }
    });
}

verificarNumero(42)
.then((mensagem) => {
    console.log(mensagem);
})
.catch((erro) => {
    console.log(erro);
});

//async function
async function esperar(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Esperei ${segundos} segundos`);
        }, segundos * 1000);
    });
}

async function executar() {
    const resultado = await esperar(3);
    console.log(resultado);
}

executar();