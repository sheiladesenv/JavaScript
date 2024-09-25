//adicionando evento
const btn = document.querySelector("#meu-botao");

// dois argumentos, tipo de evento e função que vai acontecer após clicar no evento
btn.addEventListener("click", function(){
    console.log("Clicou!");
});

//Selecionando o campo de entrada e a div de saída
const inputField = document.getElementById('inputField');
const output = document.getElementById('output');

//adicionando o evento keydown ao campo de entrada
/*inputField.addEventListener("keydown", function(event){
//Exibir qual tecla foi pressionada
output.textContent = `Você pressionou: ${event.key}`;
});
*/
//adicionando o evento keyup ao campo de entrada
inputField.addEventListener("keyup", function(event){
//Exibir qual tecla foi pressionada
output.textContent = `Você pressionou: ${event.key}`;
});

//Outros eventos de mouse
const eventosMouse=document.querySelector("#mouse");
eventosMouse.addEventListener("mousedown",()=>{
    console.log("Pressionou o Botão do mouse");
});
 
eventosMouse.addEventListener("mouseup",()=> {
    console.log("Soltou o Botão do mouse");
});

eventosMouse.addEventListener("dblclick",() =>{
    console.log("Duplo click");
});

//movimento do mouse
eventosMouse.addEventListener("mousemove",(e) =>{
    console.log(`Mouse no eixo x: ${e.x}`);
    console.log(`Mouse no eixo y: ${e.y}`);
});

//focus e blur
const input = document.querySelector("#meu-input");

input.addEventListener("focus", (e) => {
    console.log("Entrou no input");

});

input.addEventListener("blur", (e) => {
    console.log("Saiu do input");
});