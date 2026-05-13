let carrito = [
 { producto: "Notebook", precio: 1000, cantidad: 3 },
 { producto: "Mouse", precio: 50, cantidad: 2 },
 { producto: "Teclado", precio: 100, cantidad: 4 },
 { producto: "Monitor", precio: 200, cantidad: 1 }
];

/* 7. mostrar cada producto, mostrar cantidad, calcular total por producto
*/

function totalPorProducto(array) {
    let productos = []
    for (let producto of array) {
      let obj = {
        nombre: producto.producto,
        costo: producto.precio * producto.cantidad
      }
      productos.push(obj)
    }
    return productos
}
let resultado = totalPorProducto(carrito)
console.table(resultado)

// 8. Total carrito
function totalCosto(array) {
  let total = 0;
  for (let obj of array) {
    total += obj.costo
  }
  return total
}
`El costo total de los productos es de u$s ${totalCosto(resultado)}`


// 9. Aplicar descuento del 10% a los productos que sean mayor de 2 unidades a comprar.

function aplicarDescuento(array) {
  let totalConDescuentoAplicado = 0;
  for (let producto of array) {
    if (producto.cantidad > 2) {
      let costo = producto.precio * producto.cantidad
      let descuento = costo * 0.9
      totalConDescuentoAplicado += descuento
    }
  }
  return totalConDescuentoAplicado
}
`El total, con descuento aplicado, es de u$s ${aplicarDescuento(carrito) + resultado[1].costo + resultado[3].costo}`
