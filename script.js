// 1. Selección de elementos por su identificador.
const titulo = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje");
const btnTexto = document.getElementById("btnTexto");

// 2. Evento click: modifica el texto y alterna el color del título.
let tituloAzul = true;
btnTexto.addEventListener("click", (event) => {
  mensaje.textContent = "¡El evento click se ejecutó correctamente!";
  tituloAzul = !tituloAzul;
  titulo.style.color = tituloAzul ? "blue" : "red";
  console.log("Elemento que originó el evento:", event.target);
});

// 3. Apariencia: se recomienda reutilizar clases CSS con classList.
const seccionColor = document.getElementById("seccionColor");
document.getElementById("btnColor").addEventListener("click", () => {
  seccionColor.classList.add("resaltado");
});
document.getElementById("btnRestaurar").addEventListener("click", () => {
  seccionColor.classList.remove("resaltado");
});

// 4. Seguimiento en tiempo real: input se activa mientras cambia el valor.
const entradaTexto = document.getElementById("entradaTexto");
const vistaPrevia = document.getElementById("vistaPrevia");
entradaTexto.addEventListener("input", () => {
  vistaPrevia.textContent = entradaTexto.value || "Tu texto aparecerá aquí.";
});

// 5. Lista dinámica: crea elementos y permite eliminarlos individualmente.
const nuevoElemento = document.getElementById("nuevoElemento");
const listaTareas = document.getElementById("listaTareas");
const mensajeLista = document.getElementById("mensajeLista");
document.getElementById("btnAgregar").addEventListener("click", () => {
  const texto = nuevoElemento.value.trim();
  if (!texto) {
    mensajeLista.textContent = "Escribe un elemento antes de agregarlo.";
    mensajeLista.className = "error";
    return;
  }

  const li = document.createElement("li");
  const textoTarea = document.createElement("span");
  textoTarea.textContent = texto;

  const btnEliminar = document.createElement("button");
  btnEliminar.type = "button";
  btnEliminar.textContent = "Eliminar";
  btnEliminar.className = "btn-eliminar";
  btnEliminar.addEventListener("click", () => li.remove());

  li.appendChild(textoTarea);
  li.appendChild(btnEliminar);
  listaTareas.appendChild(li);
  nuevoElemento.value = "";
  mensajeLista.textContent = "Elemento agregado.";
  mensajeLista.className = "exito";
});

// 6. Formulario: preventDefault evita la recarga para mostrar el resultado.
const formRegistro = document.getElementById("formRegistro");
const mensajeFormulario = document.getElementById("mensajeFormulario");
formRegistro.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!formRegistro.checkValidity()) {
    mensajeFormulario.textContent = "Revisa los campos del formulario.";
    mensajeFormulario.className = "error";
    return;
  }
  mensajeFormulario.textContent = "Datos validados correctamente en este ejemplo.";
  mensajeFormulario.className = "exito";
});

// 7. Caso aplicado: búsqueda de cursos usando input y textContent.
const buscarCurso = document.getElementById("buscarCurso");
const cursos = document.querySelectorAll("#resultadosCursos li");
buscarCurso.addEventListener("input", () => {
  const termino = buscarCurso.value.toLowerCase().trim();
  cursos.forEach((curso) => {
    curso.hidden = !curso.textContent.toLowerCase().includes(termino);
  });
});

// 8. Evento load: se registra cuando la página y sus recursos terminan de cargar.
window.addEventListener("load", () => {
  console.log("La página terminó de cargar.");
});
