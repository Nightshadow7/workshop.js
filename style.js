// Declaración de variables con sus respectivos valores
let continente = 1036900579;
let pais = 51520000;
let departamento = 2185000;
let ciudad = 163362 ;
let barrio = 2300;
let direccion = "Calle 4A #17-22 casa 102 manzana L 4ta etapa";
// Registro de valores en la consola
console.log(`En el Continente America hay ${continente.toLocaleString()} de personas`);
console.log(`En el País Colombia hay ${pais.toLocaleString()} de personas`);
console.log(`En el Departamento Santander hay ${departamento.toLocaleString()} de personas`);
console.log(`En la Ciudad Piedecuesta hay ${ciudad.toLocaleString()} de personas`);
console.log(`En el Barrio San Cristobal hay ${barrio.toLocaleString()} de personas`);
console.log(`La Direccion es: ${direccion}`);

//2. punto
let esTercermundista  = true;
const Continente1 = "America";
const pais1 = "Colombia";
//let idioma;
console.log(`El continente es: ${Continente1}`);
console.log(`El Pais es: ${pais1}`);
if (esTercermundista===true){
  let temp = esTercermundista;
  temp = esTercermundista;
  esTercermundista = "Verdadero";
  console.log(`Es Tercermundista: ${esTercermundista}`);
  esTercermundista = temp;
}

//3. 
const idioma = "Español";
console.log(`El idioma que se habla en el continenete ${Continente1} en ${pais1} es: ${idioma}`);

//4. punto
//a.
let pais_mitad = pais/2;
console.log(`En el caso en el que el pais se dividiera en la mitad habrian ${pais_mitad.toLocaleString()} de personas en cada lado.`);
//b.
let sps = pais + 1000000;
console.log(`Despues de aumentar en 1.000.000 de personas en el pasis hay: ${sps.toLocaleString()} de personas.`);
//c. 
const finlandia = 6000000;
if (finlandia > pais){
  let diferencia = finlandia - pais;
  console.log(`Finlandia tiene mas personas que ${pais1} por ${diferencia.toLocaleString()} personas`);
}
else {
  let diferencia = pais - finlandia;
  console.log(`${pais1} tiene mas personas que Finlandia por ${diferencia.toLocaleString()} personas`);
}
//d. 
const promedio = 33000000;
if (promedio > pais){
  let diferencia = promedio - pais;
  console.log(`${pais1} tiene mas personas que el promedio por ${diferencia.toLocaleString()} personas`);
}
else {
  let diferencia = pais - finlandia;
  console.log(`${pais1} tiene menos personas que el promedio por ${diferencia.toLocaleString()} personas`);
}
//e. 
let descripcion = "Colombia está en América, y Bucaramanga que está en el departamento de Santander tiene un barrio llamado el prado y sus 3000 personas hablan inglés.";
console.log(`${descripcion}`);

//Cree 10 variables de tipo cadena donde almacene valores string en Ingles y aplique cada una de los siguientes métodos de cadena
let name = "Ana Maria";
let text = "Hello world";
let names = "Alan Brito";
let age = 19;
let chart = "     Boolean text";
let list = "At the end of list      ";
let hello = "The most important person is your name";
let country = "New Zealand";
let state = "The state of the country you are looking for in your list ";
let computer = "Tv And Board And Mouse ";
console.log(name.length); //Devuelve la longitud de una cadena.
console.log(text.includes("Hello")); //Devuelve un booleano que indica si una cadena contiene otra subcadena.
console.log(`${names} tiene ${age} años`); //Permiten crear cadenas de texto con variables y expresiones dentro de ellas. Para definir una plantilla de cadena, se utilizan las comillas invertidas (`) en lugar de las comillas simples o dobles.
console.log(chart.trimStart()); //Permiten crear cadenas de texto con variables y expresiones dentro de ellas. Para definir una plantilla de cadena, se utilizan las comillas invertidas (`) en lugar de las comillas simples o dobles.
console.log(list.trimEnd()); // Elimina los espacios en blanco al final de una cadena.
console.log(hello.replace("name","friend")); //Reemplaza una subcadena en una cadena por otra subcadena.
console.log(country.slice(1)); //Devuelve una subcadena de una cadena original.
console.log(state.split(",")); //Divide una cadena en un arreglo de subcadenas, utilizando un separador específico.
console.log(computer.toUpperCase()); //Convierte una cadena a mayúsculas.
console.log(computer.toLowerCase()); //Convierte una cadena a minusculas.