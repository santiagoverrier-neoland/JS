// Create an Array
const fruits = ['Banana', 'Orange', 'Cebollín', 'Mango'];
//                 0         1         2        3

// Borrar la pos 2 (que es 'Apple') ya que indique que borre un item al poner el parámetro '1'
fruits.splice(2, 0); // (posición, eliminar)

let verduras = fruits.splice(2, 1, 'Kiwi'); // Va a reemplazar cebollín por una fruta en el array original y mientras crea un nuevo array con el valor eliminado del original

console.log(verduras);
console.log(fruits);

const citrus = fruits.slice(1, 3); // Tomará el valor de la posición 1 y 2, sin incluir el valor de la posición 3. NO modifica el array original
console.log(citrus);
console.log(fruits);

const arr1 = ['Cecilie', 'Lone'];
const arr2 = ['Emil', 'Tobias', 'Linus'];
const arr3 = ['Robin'];
const children = arr1.concat(arr2, arr3);
console.log(children);

let text = fruits.join(' | ');
// Convierte los valores del array a texto (string)
console.log(text);

let ordenado = fruits.sort(); // ordenar
console.log(ordenado);

// Create an Array
const points = [40, 100, 1, 5, 25, 10];

// Sort the Array
points.sort((nro1, nro2) => nro1 - nro2);

