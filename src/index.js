//definir variables y funciones para cambiar de un div a otro

const firstBtn = document.getElementById("option-cipher");
firstBtn.addEventListener("click",()=>{

document.getElementById("first").hidden=true;
document.getElementById("second").hidden=false;
document.getElementById("third").hidden=true;

}); //check

const secondBtn=document.getElementById("option-decipher");
secondBtn.addEventListener("click",()=>{

document.getElementById("first").hidden=true;
document.getElementById("second").hidden=true;
document.getElementById("third").hidden=false; 

}); //check

const decipherTwo=document.getElementById("decipher-b");
decipherTwo.addEventListener("click",()=>{

document.getElementById("first").hidden=true;
document.getElementById("second").hidden=true;
document.getElementById("third").hidden=false;

}); //check

const cipherTwo=document.getElementById("cipher-b");
cipherTwo.addEventListener("click",()=>{

document.getElementById("first").hidden=true;
document.getElementById("second").hidden=false;
document.getElementById("third").hidden=true;

}); //check

const cipherClick=()=>{

 let captureText=document.getElementById("capture-text");
 let cipherOffset=document.getElementById("cipher-offset");
 let word=captureText.value.toUpperCase();
 let number=parseInt(cipherOffset.value);

 // devuelve el mensaje ya cifrado
 let cipherText=document.getElementById("cipher-text");
 cipherText.value=cipher.encode(number,word);
 }

const btnCipher=document.getElementById("btn-cipher");
btnCipher.addEventListener("click",cipherClick)

const decipherClick=()=>{
 
 let printText=document.getElementById("print-text");
 let decipherOffset=document.getElementById("decipher-offset");
 let decipherText=document.getElementById("decipher-text");

 let word=printText.value.toUpperCase();
 let number=parseInt(decipherOffset.value);
    
 // devuelve el mensaje original
 
 decipherText.value=cipher.decode(number,word);
 }

const btnDecipher=document.getElementById("btn-decipher");
btnDecipher.addEventListener("click",decipherClick)

//limpieza datos

const resetOne = document.getElementById("first-reset");
resetOne.addEventListener("click", () =>{
    document.getElementById("cipher-form").reset();
});

const resetTwo = document.getElementById("second-reset");
resetTwo.addEventListener("click", () =>{
    document.getElementById("decipher-form").reset();
});
