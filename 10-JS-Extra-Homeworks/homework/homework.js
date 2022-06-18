// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arr= Object.keys(objeto).map(function (key) {
    return [(key), objeto[key]];
    });  
  
  return arr;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

var separarCadena = string.split("").sort(); // var separarCadena = "hola".split("");

var objeto = {};

for(var i = 0; i < separarCadena.length; i++) {
  
  if (!objeto[separarCadena[i]]){
    objeto[separarCadena[i]]=1;
  }
  else
  {
    objeto[separarCadena[i]]++;
  }

}

return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var may ="";
  var min ="";
  var resultado ="";
  
  for(var i = 0; i < s.length; i++) {
  var character = s.charAt(i);  

    if (character == character.toUpperCase()) {   
      may = may +character;     
    }
    else
    {
      min= min + character; 
    }
}

return resultado = may + min;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

var nuevoString = "";

var separarCadena = str.split(" "); // var separarCadena = "hola".split("");

  for(var i = 0; i < separarCadena.length; i++) {
      
    var separarCadena2 = separarCadena[i].split("");
    var invertirArreglo = separarCadena2.reverse();   
    var unirArreglo = invertirArreglo.join(""); 
    
  if (i < (separarCadena.length-1)) 
  {
    nuevoString = nuevoString + unirArreglo + ' ';
  }    
  else
  {
    nuevoString = nuevoString + unirArreglo;
  }
}
return nuevoString;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí


var nuevoNumero = numero.toString();

var separarCadena = nuevoNumero.split(""); // var separarCadena = "hola".split("");
    // ["h", "o", "l", "a"]
 
    // Paso 2. Usa el método reverse() para invertir el nuevo arreglo creado
    var invertirArreglo = separarCadena.reverse(); // var invertirArreglo = ["h", "o", "l", "a"].reverse();
    // ["a", "l", "o", "h"]
 
    // Paso 3. Usa el método join() para unir todos los elementos del arreglo en una cadena
    var unirArreglo = invertirArreglo.join(""); // var unirArreglo = ["a", "l", "o", "h"].join("");
    // "aloh"

if (nuevoNumero == unirArreglo)
{
  return "Es capicua";
}
else
{
  return "No es capicua";
}

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

var nuevaCadena = "";

  for(var i = 0; i < cadena.length; i++) {
  var character = cadena.charAt(i);  

    if (!(character == "a" || character == "b" ||character == "c" )) { 
   
      nuevaCadena= nuevaCadena + character; 
    }
}

return nuevaCadena;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

arr.sort(function(a, b) {
  return a.length - b.length;
});

return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var nuevoArray= [];

  for(var i = 0; i < arreglo1.length; i++) {
    var elemento = arreglo1[i];
    for(var c = 0; c < arreglo2.length; c++) {
      if (arreglo2[c]==elemento) nuevoArray.push(arreglo2[c]);
    }
  }  
return nuevoArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

