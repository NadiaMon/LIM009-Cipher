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
const decipherTwo = document.getElementById ("decipherB");
decipherTwo.addEventListener ("click", secondDecipher); //check

const cipherTwo = document.getElementById ("cipherB");
cipherTwo.addEventListener ("click", cipherDos); //check

// para cambiar a arrow const name = () => {}

function secondDecipher () {
    document.getElementById ("second").hidden = true;
    document.getElementById ("third").hidden = false;
}

function cipherDos () {
    document.getElementById ("second").hidden = false;
    document.getElementById ("third").hidden = true;
}

// crear función para botón cifrar

const cipherClick = () => {

 let word = captureText.value.toUpperCase();
 let number = parseInt(cipherOffset.value);

 // devuelve el mensaje ya cifrado
 cipherText.value = cipher.encode(number,word);
 }

const decipherClick = () => {

 let word = printText.value.toUpperCase();
 let number = parseInt(decipherOffset.value);
    
 // devuelve el mensaje original
 decipherText.value = cipher.decode(number,word);
 }


//hacer que el algoritmo que sucede en el btn cifrar se
//imprima en el cuadro
btnCipher.addEventListener("click",cipherClick)
btnDecipher.addEventListener("click",decipherClick)

