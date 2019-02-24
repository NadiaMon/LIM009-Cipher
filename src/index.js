//declarar variables para llamar los input de texto y offset

let captureText = document.getElementById ("ftext") // texto a cifrar
let cipherOffset = document.getElementById ("firstOffset") // offset de cifrado
let btnCipher = document.getElementById ("resultA") //botón de cifrado
let cipherText = document.getElementById("fmessage")// imprimir el texto codificado
let printText = document.getElementById ("stext"); // texto a descifrar
let decipherOffset = document.getElementById ("secondOffset"); // offset de descifrar
let btnDecipher = document.getElementById ("resultB") //botón de decifrado
let decipherText = document.getElementById("smessage")// imprimir el texto decodificado

//definir variables y funciones para cambiar de un div a otro

const firstBtn = document.getElementById("optionCipher");
firstBtn.addEventListener ("click", textCipher); //check

const secondBtn = document.getElementById ("optionDecipher");
secondBtn.addEventListener ("click", textDecipher); //check

const decipherTwo = document.getElementById ("decipherB");
decipherTwo.addEventListener ("click", secondDecipher); //check

const cipherTwo = document.getElementById ("cipherB");
cipherTwo.addEventListener ("click", cipherDos); //check

const exitPage = document.getElementById ("exit");
//exitPage.addEventListener ("click", out); //mantener en espera, encontrar cómo salir de la página

const exitTwo = document.getElementById ("exitB");
//exitTwo.addEventListener ("click", secondOut); //mantener en espera, encontrar cómo salir de la página

// para cambiar a arrow const name = () => {}

function textCipher () {
    document.getElementById ("first").hidden = true;
    document.getElementById ("second").hidden = false;
    document.getElementById ("third").hidden = true;
}

function textDecipher () {
    document.getElementById ("first").hidden = true;
    document.getElementById ("second").hidden = true;
    document.getElementById ("third").hidden = false; 
}

function secondDecipher () {
    document.getElementById ("first").hidden = true;
    document.getElementById ("second").hidden = true;
    document.getElementById ("third").hidden = false;
}

function cipherDos () {
    document.getElementById ("first").hidden = true;
    document.getElementById ("second").hidden = false;
    document.getElementById ("third").hidden = true;
}

// crear función para botón cifrar

const cipherClick = () => {

let word = captureText.value.toUpperCase();
let number = parseInt(cipherOffset.value);

// esto dará el nuevo mensaje
cipherText.value = cipher.encode(number,word);
}


//hacer que el algoritmo que sucede en el btn cifrar se
//imprima en el cuadro
btnCipher.addEventListener("click",cipherClick)
//btnDecipher.addEventListener("click",decipherClick)


