 
function converter(){
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('resultado').innerText = `${celsius} °C é igual a ${fahrenheit} °F`;
}
     //inner.text pq o h2 no html é um texto. Ele retorna um texto na tela!
