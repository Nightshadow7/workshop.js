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
