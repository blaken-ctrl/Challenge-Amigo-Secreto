// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
let amigos = [];

// Función para agregar un nombre al array
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (nombre === '') {
        alert('Por favor, ingresa un nombre.');
        return;
    }

    amigos.push(nombre);

    document.getElementById('amigo').value = '';

    actualizarListaAmigos();
}

// Funcion para actualizar lista de amigos
function actualizarListaAmigos() {
    let lista = document.getElementById('ListaAmigos');

    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let nuevoAmigo = document. createElement('li');
        nuevoAmigo.textContent = amigos[i];
        lista.appendChild(nuevoAmigo);
    }
}

// Funcion para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.lenght === 0) { 
        alert("Agregue al menos un amigo para sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `<p>¡El amigo secreto es: **${amigoSorteado}**! 🎉 </p>`;
}