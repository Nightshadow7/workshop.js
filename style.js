// 3. Contruir el algoritmo para determinar el voltaje de un circuito a partir de la resistencia y la intensidad de la corriente 

let resistencia = parseFloat(prompt(`Digite la resistencia`));
let intensidad = parseFloat(prompt(`Digite la intensidad`));
let voltaje = resistencia * intensidad;
alert(`El voltaje es ${voltaje} voltios`);