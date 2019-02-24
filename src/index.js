//definir variables y funciones para cambiar de un div a otro

const firstBtn = document.getElementById("cipher");
firstBtn.addEventListener ("click", textCipher); //check

const secondBtn = document.getElementById ("decipher");
secondBtn.addEventListener ("click", textDecipher); //check

const decipherTwo = document.getElementById ("decipher-b");
decipherTwo.addEventListener ("click", secondDecipher); //check

const cipherTwo = document.getElementById ("cipher-b");
cipherTwo.addEventListener ("click", cipherDos); //check

const exitPage = document.getElementById ("exit");
//exitPage.addEventListener ("click", out); //mantener en espera, encontrar cómo salir de la página

const exitTwo = document.getElementById ("exit-b");
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

//fórmula cifrado césar

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


