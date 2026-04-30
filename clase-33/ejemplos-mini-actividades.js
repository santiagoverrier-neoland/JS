// Consigna:
// Crear un array con al menos 5 productos.
/*
Luego:
Mostrar el array completo
Mostrar el primer elemento
Mostrar el último elemento
*/
let compras = ['pan', 'leche', 'huevos', 'arroz', 'pollo'];
//              0       1         2         3       4
console.log(compras);
console.log(compras[0]);
console.log(compras[compras.length - 1]); // 5 - 1 (4)

//  Recorrer el array anterior y mostrar cada elemento en consola.
for (let item of compras) {
  console.log(item);
}

//  Agregar 2 productos nuevos al final del array.
compras.push('Tomate');
compras.push('lechuga');
compras.push('tornillo');
console.log(compras);

// eliminar el último agregado
compras.pop();

// Agregar al 1er lugar
compras.unshift('queso');
compras.shift();

/*
 Consigna:
 Crear un array con notas de estudiantes.
Luego:
Mostrar todas las notas
Calcular el promedio
*/

let notas = [4, 2, 7, 4, 8, 9, 3, 5, 7, 6, 3, 7,10,3,5];
let suma = 0;

for (let nota of notas) {
  // primero nombre singular el que querramos para asociar el valor que itere, y plural el array que se va a iterar
  suma += nota; // suma = suma + nota -> Suma el valor de la nota que esté iterando
  if (nota >= 5) {
    console.log(`${nota} Nota aprobada!`);
  } else {
    console.log(`${nota} Nota desaprobada`);
  }
}
console.log(`El promedio es de: ${(suma / notas.length).toFixed(2)}`);

// [4, 2, 7, 4, 8, 9, 3, 5, 7, 6, 3, 7, 10, 3, 5];
let notasAprobadas = []
for (let nota of notas) {
  if (nota >= 5) {
     notasAprobadas.push(nota)
  } 
}
console.log(notasAprobadas)


// Consigna:
 //let notas = [4, 2, 7, 4, 8, 9, 3, 5, 7, 6, 3, 7,10,3,5];
// Crear un nuevo array donde cada número esté duplicado x 2.
let notasDuplicadas = []
for (let nota of notas) {
     let notaDuplicada = nota * 2
     notasDuplicadas.push(notaDuplicada)
}
console.log(notasDuplicadas)

/*
Consigna:
 Crear un array de precios y calcular el total.
 */
let precios = [50, 120, 70, 30, 45, 64, 126, 200]
let total = 0
for (let precio of precios) {
  total += precio
}
`el total es de € ${total}`


/*
Consigna:
Simular una lista de tareas:
- Crear un array con tareas
- Agregar una tarea
- Eliminar una tarea
- Mostrar todas las tareas numeradas
*/





