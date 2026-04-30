// Ejercicio #1
let usuarios = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Juan", edad: 17 },
  { nombre: "Pedro", edad: 25 }
];

/* Mostrar nombres de cada usuario */
for (let usuario of usuarios) {
  console.log(usuario.nombre)
}
for (let i = 0; i < usuarios.length; i++) {
  console.log(usuarios[i].nombre)
}

/* Mostrar la edad de cada usuario */
for (let usuario of usuarios) {
  console.log(usuario.edad)
}

// Ejercicio #2
/*
Mostrar solo los usuarios que:
tengan 18 años o más
*/