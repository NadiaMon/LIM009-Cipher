//definir variables y funciones para cambiar de un div a otro

const firstBtn=document.getElementById("optionCipher");
firstBtn.addEventListener("click",()=>{

document.getElementById("first").hidden=true;
document.getElementById("second").hidden=false;
document.getElementById("third").hidden=true;

}); //check

const secondBtn=document.getElementById("optionDecipher");
secondBtn.addEventListener("click",()=>{

document.getElementById("first").hidden=true;
document.getElementById("second").hidden=true;
document.getElementById("third").hidden=false; 

}); //check

const decipherTwo=document.getElementById("decipherB");
decipherTwo.addEventListener("click",()=>{

document.getElementById("first").hidden=true;
document.getElementById("second").hidden=true;
document.getElementById("third").hidden=false;

}); //check

const cipherTwo=document.getElementById("cipherB");
cipherTwo.addEventListener("click",()=>{

document.getElementById("first").hidden=true;
document.getElementById("second").hidden=false;
document.getElementById("third").hidden=true;

}); //check

// para cambiar a arrow const name = () => {}

//variables
//let captureText= document.getElementById(captureText);
//let cipherOffset= document.getElementById(cipherOffset);
//let cipherText= document.getElementById(cipherText);
//let printText= document.getElementById(printText);
//let decipherOffset= document.getElementById(decipherOffset);
//let decipherText= document.getElementById(decipherText);

const cipherClick=()=>{

 let captureText=document.getElementById("captureText");
 let cipherOffset=document.getElementById("cipherOffset");
 let word=captureText.value.toUpperCase();
 let number=parseInt(cipherOffset.value);

 // devuelve el mensaje ya cifrado
 let cipherText=document.getElementById("cipherText");
 cipherText.value=cipher.encode(number,word);
 }

const decipherClick=()=>{
 
 let printText=document.getElementById("printText");
 let decipherOffset=document.getElementById("decipherOffset");
 let decipherText=document.getElementById("decipherText");

 let word=printText.value.toUpperCase();
 let number=parseInt(decipherOffset.value);
    
 // devuelve el mensaje original
 
 decipherText.value=cipher.decode(number,word);
 }

//hacer que el algoritmo que sucede en los botones
//se impriman en los cuadros

btnCipher.addEventListener("click",cipherClick)
btnDecipher.addEventListener("click",decipherClick)

//limpieza datos

const resetOne=document.getElementById("firstReset");
resetOne.addEventListener("click",()=>{
    document.getElementById("cipherForm").reset();
});

const resetTwo=document.getElementById("secondReset");
resetTwo.addEventListener("click",()=>{
    document.getElementById("decipherForm").reset();
});
