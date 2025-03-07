// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// array para almacenar los nombres
let listaAmigos = [];
let ulListaAmigos = document.getElementById('listaAmigos');

// función para agregar amigos
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo').value.trim(); // Evita espacios innecesarios


    // verificar que se haya ingresado un nombre
    if (inputAmigo === '') {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // validar que el nombre no este duplicado
    if (listaAmigos.includes(inputAmigo)) {
        alert(`El nombre ${inputAmigo} ya ha sido ingresado.`);
        return;
    }

    // agregrar el nombre al array listaAmigos
    listaAmigos.push(inputAmigo);

    // limpiar caja
    document.getElementById('amigo').value = '';

    actualizarLista();
}

function actualizarLista() {

    // limpiar el contenido de la lista
    ulListaAmigos.innerHTML = '';

    // Recorrer el array 
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaAmigos[i];
        ulListaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos === 0) {
        alert('No hay amigos dispnibles para sortear, ingrese un nombre.');
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceAleatorio];

    let ulResultado = document.getElementById('resultado');
    ulResultado.innerHTML = `Amigo sorteado: <strong>${amigoSecreto}</strong>`;
}
