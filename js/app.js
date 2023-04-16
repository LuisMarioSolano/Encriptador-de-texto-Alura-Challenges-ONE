//Función que encripta una cadena de texto
function encriptar(texto) {
    //Convertir las letras según las reglas dadas
    texto = texto.replaceAll("e", "enter");
    texto = texto.replaceAll("i", "imes");
    texto = texto.replaceAll("a", "ai");
    texto = texto.replaceAll("o", "ober");
    texto = texto.replaceAll("u", "ufat");

    return texto;
}

//Función que desencripta una cadena de texto
function desencriptar(texto) {
    //Convertir las letras según las reglas dadas
    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("imes", "i");
    texto = texto.replaceAll("ai", "a");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ufat", "u");

    return texto;
}

//Obtener el textarea y los botones de encriptar y desencriptar
const textarea = document.getElementById("mensaje");
const botonEncriptar = document.querySelector(".boton-encriptar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");
const resultado = document.querySelector(".resultado");


//Función que maneja el evento de encriptar
function manejarEncriptar() {
    const texto = textarea.value.toLowerCase().replace(/[^a-z]/g, '');
    resultado.textContent = encriptar(texto);
}

//Función que maneja el evento de desencriptar
function manejarDesencriptar() {
    const texto = textarea.value.toLowerCase().replace(/[^a-z]/g, '');
    resultado.textContent = desencriptar(texto);
}

//Asignar los eventos a los botones
botonEncriptar.addEventListener("click", manejarEncriptar);
botonDesencriptar.addEventListener("click", manejarDesencriptar);
