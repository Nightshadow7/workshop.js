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