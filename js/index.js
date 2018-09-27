document.querySelector("textarea").oninput = mecanografiar;

// Llama al API para que aparezca una frase al azar
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

/*
 * LLAMADA AL SERVIDOR EXTERNO
 */

let letrasCita = [];

const myInit = {
    method: 'GET',
    error: 'error.html'
};

const obtenerQuotes = ((frase) => {
    fetch("https://talaikis.com/api/quotes/random/", myInit)
        .then(response => response.json())
        .then(json => frase(null, json.quote))
        .catch(error => frase(error, null));
});

obtenerQuotes((error, frase) => {
    if (error){
        console.log(error);
        window.location.href = 'error.html';
    } else{
        document.querySelector("#mecanografia").textContent = frase;
    // Crear aquí un array con cada letra de la frase

    recogeLetras(frase, letrasCita);
    }
});

//PROGRAMA PRINCIPAL
function mecanografiar() {
    let textoIntroducido = document.querySelector("textarea").value;
    let listaLetras = [];

    recogeLetras(textoIntroducido, listaLetras);
    validarTexto(letrasCita, listaLetras);
}

function recogeLetras(cita, lista) {
    //Recoge cada letra escrita por el usuario y la coloca en una lista
    for (let i = 0; i < cita.length; i++) {
        letra = cita.charAt(i); 
        lista.push(letra);
    }
}

// Experimental: Verificar por qué no funciona
function validarTexto(textoCita, textoInput){
        for(let j = 0; j < textoCita; j++){
            if(textoInput.includes(textoCita[j])){
                console.log('El texto coincide');
                document.querySelector('#miInput').textContent = textoInput;
            }
        }
    console.log(textoInput);
}
