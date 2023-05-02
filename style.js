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