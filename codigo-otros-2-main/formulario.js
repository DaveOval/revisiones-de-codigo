//! cambio de var a const 
const formulario = document.querySelector("#form")

formulario.onsubmit = function (e) {

  //! se corrigo el evento a preventDefault
  e.preventDefault()

  //! se cambiaron los var por let
  //! se cambio la refencia por un querySelector y se agrego el .value
  let name = document.querySelector("#name")
  let age = document.querySelector("#age")
  let nationality = document.querySelector("#nationality")


  let n = name.value
  let a = age.value
  let na = nationality.value
  /* console.log(nombre, edad)
  console.log(nacionalidad) */

  if (n.length === 0) {
    name.classList.add("error")
  }
  if (a < 18 || age > 120) {
    age.classList.add("error")
  }
  if (n.length > 0
    && (a > 18
      && a < 120)) {
    // se remueven los errores para que no se queden en el formulario
    name.classList.remove("error")
    age.classList.remove("error")
    agregarInvitado(n, a, na)
  }
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  var lista = document.getElementById("lista-de-invitados")

  var elementoLista = document.createElement("div")
  //! se corrigio el add
  elementoLista.classList.add("elemento-lista")
  lista.appendChild(elementoLista)

  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span")
    var inputNombre = document.createElement("input")
    var espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  /* crearElemento("Nombre ", nombre) */
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}