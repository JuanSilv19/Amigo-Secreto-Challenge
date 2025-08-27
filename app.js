const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    if(!inputAmigo.value){
        alert("Debes Ingresar el nombre de un amigo")
    }
    listaAmigos.push(inputAmigo.value);
    
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
}

function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecret = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecret}</li>`;
}

