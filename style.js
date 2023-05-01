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