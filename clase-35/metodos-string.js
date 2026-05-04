"The quick brown fox jumps over the lazy dog.".includes("fox") // busca


"I think Ruth's dog is cuter than your dog!".replace("dog","cat") // reemplaza texto

"ALFABETO".toLowerCase() // pasa a minúsculas, está toUpperCase para caso contrario

"  nombre ".trim() // remueve espacios

"The empty string has a length of ".length // longitud de textos en caracteres

"Educación Tecnológica".substring(0,9) // Extrae caracteres desde un índice inicial hasta uno final (sin incluir el último)

"python es genial python es util".replaceAll("python", "javascript") // Busca todas las coincidencias de un texto y las cambia por uno nuevo. Es ideal para limpiar datos o corregir errores recurrentes en un texto.

"clase_programacion.pdf".slice(-3); // Es muy similar a substring, pero tiene un "superpoder": acepta índices negativos, lo que permite contar desde el final del texto hacia atrás

"Juan, Maria, Pedro, Ana".split(", ") // Divide un string en un array (una lista) basándose en un carácter separador que elijas (un espacio, una coma, un guion, etc.).