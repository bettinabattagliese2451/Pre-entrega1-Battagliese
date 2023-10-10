
// Solicitar al usuario que seleccione un artículo
const seleccion = prompt("Seleccione un artículo ingresando el número:\n\n" +
"1. Velas de Miel medianas (x2)\n" +
"2. Vela de Soja 7 Chakras\n" +
"3. Vela Circo XXL con Plato de resina\n" +
"4. Dos Velas de Soja, con tapa de bambú");

let precio = 0;

// Verificar la selección del usuario y asignar el precio correspondiente
switch (seleccion) {
case '1':
    precio = 180;
    break;
case '2':
    precio = 630;
    break;
case '3':
    precio = 1100;
    break;
case '4':
    precio = 790;
    break;
default:
    alert('Selección no válida. Inténtelo de nuevo.');
    break;
}

// Si la selección fue válida, solicitar la cantidad de unidades a comprar
if (precio > 0) {
const cantidad = prompt(`Ingrese la cantidad de unidades para el artículo seleccionado.\nPrecio: $${precio}`);

// Verificar si la cantidad es válida y es un número
if (cantidad !== null && !isNaN(cantidad) && cantidad > 0) {
    // Calcular el total
    const total = precio * parseInt(cantidad);

    // Mostrar el total al usuario
    alert(`Total de la compra: $${total}`);
} else {
    alert('Cantidad no válida. Inténtelo de nuevo.');
}
}