//7. Programa que pida el ingreso del nombre y precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador en su factura.

let nombre = prompt(`Digite el nombre del articulo: `);
let precio = parseFloat(prompt(`Digite el precio de l@s ${nombre}: `));
let cantidad = parseInt(prompt(`Digite la cantidad de ${nombre} que se desea llevar: `));

let cant = cantidad * precio;

alert(`El comprador debe pagar un total de $${cant.toLocaleString()} por una cantidad de ${cantidad} ${nombre} a un precio por unidad de $${precio.toLocaleString()}`)