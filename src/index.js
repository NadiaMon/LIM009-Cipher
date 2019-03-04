//definir variables y funciones para cambiar de un div a otro

const firstBtn = document.getElementById("optionCipher");
firstBtn.addEventListener ("click", textCipher = () => {

document.getElementById ("first").hidden = true;
document.getElementById ("second").hidden = false;
document.getElementById ("third").hidden = true;

}); //check

const secondBtn = document.getElementById ("optionDecipher");
secondBtn.addEventListener ("click", textDecipher = () => {

document.getElementById ("first").hidden = true;
document.getElementById ("second").hidden = true;
document.getElementById ("third").hidden = false; 

}); //check

const decipherTwo = document.getElementById ("decipherB");
decipherTwo.addEventListener ("click", secondDecipher = () => {

document.getElementById ("first").hidden = true;
document.getElementById ("second").hidden = true;
document.getElementById ("third").hidden = false;

}); //check

const cipherTwo = document.getElementById ("cipherB");
cipherTwo.addEventListener ("click", cipherDos = () => {

document.getElementById ("first").hidden = true;
document.getElementById ("second").hidden = false;
document.getElementById ("third").hidden = true;

}); //check

// para cambiar a arrow const name = () => {}

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

//hacer que el algoritmo que sucede en los botones
//se impriman en los cuadros
btnCipher.addEventListener("click",cipherClick)
btnDecipher.addEventListener("click",decipherClick)

//limpieza datos

const resetOne = document.getElementById("firstReset");
resetOne.addEventListener ("click", deleteOne = () =>{
    document.getElementById("cipherForm").reset();
});

const resetTwo = document.getElementById("secondReset");
resetTwo.addEventListener ("click", deleteTwo = () =>{
    document.getElementById("decipherForm").reset();
});