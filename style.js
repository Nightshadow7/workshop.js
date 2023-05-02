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
 let promedio = suma / cantidad;
 console.log(number)
 console.log(`La sumatoria de los ${cantidad.toLocaleString()} valores ingresados es: ${suma.toLocaleString()}`);
 console.log(`El valor promedio de los valores ingresados es ${promedio.toLocaleString()} `);
 console.log(`Se dijitaron un total de ${cantidad} valores `);
 console.log(`El mayor numero dijitado es: ${mayorValor}`);
 console.log(`El menor numero dijitado es: ${menorValor}`);
