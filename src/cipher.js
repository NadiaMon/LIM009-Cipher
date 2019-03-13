window.cipher = {

  //EXPLICACIÓN DEL OFFSET Y STRING
  encode:(offset,string) => {
    let textNew=""; //almacenará texto codificado
    //bucle para recorrer cada letra en el texto
    for (let i=0;i<string.length;i++){
      if (string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90){
        //almacenará el número ascii que le corresponde a los caracteres del texto a codificar
        let asciiNumber =((string[i].charCodeAt())-65+offset)%26+65;
        //nuevas letras cifradas
        let lettersNew = String.fromCharCode(asciiNumber);
        textNew = textNew+lettersNew;
      }else{
        textNew = textNew+string[i]; 
      }
    }
return textNew;
  },

  decode: (offset,string) => {
    let newText="";
    for (let i=0;i<string.length;i++){
      if (string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90){
      let ascii =((string[i].charCodeAt())+65-offset)%26+65;
      let letters = String.fromCharCode(ascii);
      newText = newText+letters; 
    }else{
      newText = newText+string[i]; 
    }
    }
return newText;
   }
};