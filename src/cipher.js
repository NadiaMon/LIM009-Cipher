window.cipher = {

  //EXPLICACIÓN DEL OFFSET Y STRING
  encode:(offset,string) => {

    let textNew=""; //almacenará texto codificado
    for (let i = 0 ; i <string.length ; i++) {
      if(string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90){
        //almacenará el número ascii que le corresponde a los caracteres del texto a codificar
        let asciiNumber =((string[i].charCodeAt())-65+ offset)%26+65;
        //nuevas letras cifradas
        let lettersNew = String.fromCharCode(asciiNumber);
        textNew = textNew+lettersNew;
      }else{
        textNew=textNew+ string[i];
    }
    }

return  textNew;
  },

  decode: () => {
    /* Acá va tu código */
  }
};
