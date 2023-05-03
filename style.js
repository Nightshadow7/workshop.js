//1. Construir un algoritmo paa un programa que ingrese tres notas del alumno, si el promedio es menor o igual a 3.9 mostrar un mensaje "estudie", de lo contrario un mensaje que diga "becado".

let nota1 = parseFloat(prompt(`Digite su nota 1`));
let nota2= parseFloat(prompt(`Digite su nota 2`));
let nota3 = parseFloat(prompt(`Digite su nota 3`));
let promedio = (nota1 + nota2 + nota3) / 3;
if (promedio >= 3.9) {
  alert(`Su promedio de las notas es ${promedio}\n ¡Estudie!`);
} else {
  alert(`Su promedio de las notas es ${promedio}\n ¡Becado!`);
}
      
//2. Dado un numero indicar si es par o impar y si es mayor que 10

let numero = parseFloat(prompt(`Digite un numero`));
if (numero >= 10) {
  if (numero % 2 === 0){
    alert("es mayor que 10 y es par");
  }
  else {
    alert("es mayor que 10 y es impar");
  }
} else{
  if (numero % 2 === 0){
    alert("es menor que 10 y es par");
  } else{
    alert("es menor que 10 y es impar");
  }
}

// 3. Contruir el algoritmo para determinar el voltaje de un circuito a partir de la resistencia y la intensidad de la corriente 

let resistencia = parseFloat(prompt(`Digite la resistencia`));
let intensidad = parseFloat(prompt(`Digite la intensidad`));
let voltaje = resistencia * intensidad;
alert(`El voltaje es ${voltaje}`);

// 4. Construir el algoritmo que solicite el nombre y edad de 3 personas y determine el nombre de la persona de mayor edad

let nombre1 = prompt(`Digite su nombre`);
let edad1 = prompt(`Hola ${nombre1} digite su edad`);
let nombre2 = prompt(`Digite su nombre`);
let edad2 = prompt(`Hola ${nombre2} Digite su edad`);
let nombre3 = prompt(`Digite su nombre`);
let edad3 = prompt(`Hola ${nombre3} Digite su edad`);
if (edad1 > edad2 && edad1 > edad3){
  alert(`El nombre de la persona de mayor edad es ${nombre1}`);
}
else if (edad2 > edad1 && edad2 > edad3){
  alert(`El nombre de la persona de mayor edad es ${nombre2}`);
}
else if (edad3 > edad1 && edad3 > edad2){
  alert(`El nombre de la persona de mayor edad es ${nombre3}`);
}

//5. Construir el algoritmo que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario, informar el producto y la división del primero respecto al segundo.

let numero1 =  parseFloat(prompt(`Digite el primer numero`));
let numero2 = parseFloat(prompt(`Digite el segundo numero`));

if (numero1 > numero2){
  let suma = numero1 + numero2;
  let diferencia = numero1 - numero2;
  alert(`La suma de ${numero1} y ${numero2} es: ${suma}`);
  alert(`La resta de ${numero1} menos ${numero2} es: ${diferencia}`);
} else { 
  let producto = numero1 * numero2;
  let division = numero1 / numero2;
  alert(`La producto de ${numero1} y ${numero2} da como resultado:  ${producto}`);
  alert(`La division de ${numero1} entre ${numero2} es: ${division}`);
}

//6. Construir el algoritmo en Javascript para un programa para cualquier cantidad de estudiantes que lea el nombre, el sexo y la nota definitiva y halle al estudiante con la mayor nota y al estudiante con la menor nota y cuantos eran hombres y cuantos mujeres.

let estudiantes = [];
let cantidadHombres = 0;
let cantidadMujeres = 0;
let cantidadEstudiantes = parseInt(prompt(`Digite la cantidad de estudiantes que desea registrar `));
for (let i = 0; i < cantidadEstudiantes; i++) {
  let nombre = prompt(`Digite el nombre del estudiante ${i+1}`);
  nombre = nombre.replace(/\b\w/g, l => l.toUpperCase())
  let sexo = prompt(`Digite el sexo del estudiante ${i+1} (M/F)`);
  while ((sexo != "M" && sexo != "m") && (sexo != "F" && sexo != "f")) {
    sexo = prompt(`Digite un sexo válido para el estudiante ${i+1} (M/F) o (m/f)`);
  }
  let nota = parseFloat(prompt(`Digite la nota definitiva del estudiante ${i+1}`));
  sexo = sexo.toUpperCase();
  estudiantes.push({
    nombre: nombre,
    sexo: sexo,
    nota: nota
  });
  if (sexo == "M") {
    cantidadHombres++;
  } else {
    cantidadMujeres++;
  }
}
let estudianteMayorNota = estudiantes.reduce(function(a, b) {
  return (a.nota > b.nota) ? a : b;
});
let estudianteMenorNota = estudiantes.reduce(function(a, b) {
  return (a.nota < b.nota) ? a : b;
});
alert(`El estudiante con la mayor nota es ${estudianteMayorNota.nombre} con una nota de ${estudianteMayorNota.nota}`);
alert(`El estudiante con la menor nota es ${estudianteMenorNota.nombre} con una nota de ${estudianteMenorNota.nota}`);
alert(`La cantidad de hombres es ${cantidadHombres} y la cantidad de mujeres es ${cantidadMujeres}`);

//7. Programa que pida el ingreso del nombre y precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador en su factura.

let nombre = prompt(`Digite el nombre del articulo: `);
let precio = parseFloat(prompt(`Digite el precio de l@s ${nombre}: `));
let cantidad1 = parseInt(prompt(`Digite la cantidad de ${nombre} que se desea llevar: `));

let cant = cantidad1 * precio;

alert(`El comprador debe pagar un total de $${cant.toLocaleString()} por una cantidad de ${cantidad1} ${nombre} a un precio por unidad de $${precio.toLocaleString()}`)

//8. Programa que Ingrese por teclado: a. el valor del lado de un cuadrado para mostrar por pantalla el perímetro del mismo b. la base y la altura de un rectángulo para mostrar el área del mismo
alert(`Programa que calcula el area de un cuadrado`)
let lado = parseFloat(prompt(`Dijite el lado del cuadrado`))
let area = lado * lado;
alert(`El area del cuadrado con lado ${lado.toLocaleString()} es ${area.toLocaleString()}.`)

alert(`Programa que calcula el area del rectangulo.`)
let base = parseFloat(prompt(`Dijite la base del rectangulo:  `))
let altura = parseFloat(prompt(`Dijite la altura del rectangulo: `));
let area2= base * altura;
alert(`El area del rectangulo con lados ${base.toLocaleString()} de base y ${altura.toLocaleString()} de altura es: ${area2.toLocaleString()}. `)

//9. N atletas han pasado a finales en salto triple en los juegos olímpicos femenino de 2022. Diseñe un programa que pida por teclado los nombres de cada atleta finalista y a su vez, sus marcas del salto en metros. Informar el nombre de la atleta campeona que se quede con la medalla de oro y si rompió récord, reportar el pago que será de 500 millones. El récord esta en 15,50 metros.

let atletas = [];
let cantidadFinalistas = parseInt(prompt(`Dijite la cantidad de finalistas del salto triple`))
for (let i = 0; i <cantidadFinalistas;i++){
  let nombre = prompt(`Dijite el nombre del finalista: `);
  nombre = nombre.replace(/\b\w/g, l => l.toUpperCase());
  let marca = parseFloat(prompt(`Dijite la marca de ${nombre} en el salto triple `));
  atletas.push({
    nombre: nombre,
    marca: marca
  });
}
let finalistaMarca = atletas.reduce(function(a,b){ 
  return (a.marca > b.marca) ? a : b;
})
if  (finalistaMarca > 15.5){
  alert(`La finalista ${finalistaMarca.nombre} rompio el record de 15.50 metros con una marca de ${finalistaMarca.marca} metros. ¡Gano la medalla de oro!`)
} else {
  alert (`Nadie rompio la meta de 15.5 metros\n El atleta con mayor marca es ${finalistaMarca.nombre} con una marca de ${finalistaMarca.marca} metros`)
}

//10. 10. Desarrolle un programa cíclico que capture un dato numérico cada vez, y los vaya acumulando. El programa se detiene cuando el usuario digita un cero. El programa debe mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR VALOR Y MENOR VALOR.

let number = [];
 while (true) {
  let numero = parseFloat(prompt(`Dijite un numero cualquiera:\n Dijite 0 para detener el proceso`));

  if (numero == 0){
    break
  } else {
    number.push(numero);
  }
 }
 let mayorValor = number.reduce(function(a,b){
  return (a > b) ? a : b;
 });
 let menorValor = number.reduce(function(a,b){
  return (a < b) ? a : b;
 });
 let cantidad = number.length
 let suma = number.reduce(function(a,b){
  return a + b;
 });
 let promedio1 = suma / cantidad;
 console.log(number)
 console.log(`La sumatoria de los ${cantidad.toLocaleString()} valores ingresados es: ${suma.toLocaleString()}`);
 console.log(`El valor promedio de los valores ingresados es ${promedio1.toLocaleString()} `);
 console.log(`Se dijitaron un total de ${cantidad} valores `);
 console.log(`El mayor numero dijitado es: ${mayorValor}`);
 console.log(`El menor numero dijitado es: ${menorValor}`);



 