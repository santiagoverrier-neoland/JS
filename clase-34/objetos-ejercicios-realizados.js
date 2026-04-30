// Ejercicio #1
let usuarios = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Juan", edad: 17 },
  { nombre: "Pedro", edad: 25 }
];

let estudiantes = [{
  id: 1,
  nombre: "Aroa",
  apellido: "Ramirez",
  edad: 25,
  localidad: "Madrid",
  país: "España",
  cursando: true
},
{
  id: 2,
  nombre: "Marcos",
  apellido: "Oliveros",
  edad: 52,
  localidad: "Valencia",
  país: "España",
  cursando: true
},
{
  id: 3,
  nombre: "Sebas",
  apellido: "Alonso",
  edad: 40,
  localidad: "Madrid",
  país: "España",
  cursando: true
},{
  id: 4,
  nombre: "Alex",
  apellido: "Gonzalez",
  edad: 34,
  localidad: "Madrid",
  país: "España",
  cursando: true
}]

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
function chequearEdad(array) { // Toma como parámetro al array que le haya 'enviado'
  let mensajes = []
  for (let usuario of array) {
     if (usuario.edad  >= 18) {
       mensajes.push(`${usuario.nombre} es mayor de edad`)
     }
  } 
  return mensajes
  
}
chequearEdad(usuarios)
chequearEdad(estudiantes)

// Ejercicio #3
/*
contar cuántos usuarios hay
contar cuántos son mayores de edad
*/
function cuantasPersonas(array) {
  let totalMayores = 0;
  for (let persona of array) {
    if (persona.edad  >= 18) {
        totalMayores++
     }
  }
  let totalUsuarios = array.length
  return `Hay ${totalMayores} mayores y son ${totalUsuarios} usuarios`
}
cuantasPersonas(usuarios)




