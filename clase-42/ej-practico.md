# código para luego 'inyectar'

`<span class="merchandising_flag_normal" style="background: rgb(0, 0, 0); color: rgb(255, 255, 255) !important;"><p>NUEVO MODELO</p></span>`
El código queda como string, por lo que en realidad primero deberiamos crear el elemento y luego llenarlo de información para poder adjuntarlo como hijo.

## url

<https://www.lenovo.com/es/es/c/laptops/thinkpad/thinkpadx1/>

## Seleccionamos

const producto0 = document.querySelector(".pc-merchandising_flag_LEN101T0160")
const producto1 = document.querySelector(".pc-merchandising_flag_LEN101T0159")

## Guardamos en array

let productos = [producto0,producto1]

## Creamos elemento y lo aplicamos en bucle

for (let item of productos) {
    const textoNuevo = document.createElement('span')
    textoNuevo.style = "background: rgb(0, 0, 0); color: rgb(255, 255, 255) !important;"
    textoNuevo.classList.add("merchandising_flag_normal")
    textoNuevo.innerHTML = `<p>NUEVO MODELO</p>`
    item.appendChild(textoNuevo)
}
