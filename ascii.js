function convert(nombre, num){
  var sep = nombre.split("");
  var con = '';
    for (var i = 0; i < sep.length; i++) {
      var result = String.fromCharCode(nombre.charCodeAt(i) + num);
      con += result;
      // con = con + result;
    }

    console.log(i);
    //con.reverse();
    console.log(con);
}

convert("ABC", 1);

String.prototype.asciiPlus = function(number){
  console.log(this.toString(), number);
  return 'test';
}

"ABC".asciiPlus(1);


Number.prototype.twice = function() {
  return this * 2;
}

var x = 10;
console.log(x.twice());
console.log("hola".asciiPlus(2));


class User {
  constructor(name){
    this.name = name;
  }

  setName(newName){
    this.name = newName;
  }
}


User.prototype.test = function(){
  console.log('test');
}
let alain = new User('Alain');

console.log(alain.name);
alain.setName('Victor');
console.log(alain.name);
alain.test();


var result3;
let result2 = [1,2,3,4,5].map((number)=>{
  return number + 1;
});
console.log(result2);
//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
/*var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]

*/

// .filter El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
/*
//La siguiente función realiza una comprobación y devuelve un valor booleano (verdadero/falso)
function esSuficientementeGrande(valor) {
  return valor >= 10;
}

//.reduce Aquellos valores del array para los cuales esSuficientementeGrande devuelva verdadero, será almacenados en una array de salida, sin modificar el array inicial
var filtered = [12, 5, 8, 130, 44].filter(esSuficientementeGrande);
// filtered es el array [12, 130, 44]
*/


// .reduce: Ayuda a sumar valores de un array. (Si hay al menos un string lo concatena, True= 1. False = 0
