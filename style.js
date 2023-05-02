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