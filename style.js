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