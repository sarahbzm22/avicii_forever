/* Abre el menú */
function openMenu() {
  console.log("Función openMenu");
  document.getElementById(
    "nav-menu"
  ).firstElementChild.lastElementChild.style.right = "0vw";
}

/* Cierra el menú */
function closeMenu() {
  console.log("Función closeMenu");
  document.getElementById(
    "nav-menu"
  ).firstElementChild.lastElementChild.style.right = "100vw";
}

//Animación del inicio
document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("only-section");

  // Para bloquear el scroll al cargar
  document.body.classList.add("no-scroll");

  // Tiempo antes de que haga la animación
  setTimeout(() => {
    section.classList.add("visible");

    // Tiempo antes de que se pueda hacer scroll
    setTimeout(() => {
      document.body.classList.remove("no-scroll");
    }, 2000);
  }, 2000);
});

/* Abre la ventana modal */
function openModal(figura) {
  console.log("Función openModal");
  //Buscamos la ventana modal
  var modal = document.getElementById("modal");
  //Cogemos la imagen para la ventana modal
  var rutaImagen = figura.firstElementChild.getAttribute("src");
  console.log("valor de la ruta de la imagen: " + rutaImagen);
  var pieImagen = figura.lastElementChild.innerHTML; //Cogemos el figcaption completo
  console.log("Pie de imagen: " + pieImagen);

  //Primera opción para cambiar el atributo src de la imagen de la ventana modal
  //modal.querySelector("img").src = rutaimagen;

  //Segunda opción
  modal.firstElementChild.firstElementChild.setAttribute("src", rutaImagen);

  //Cambiamos el valor del figcaption con la primera opción
  modal.querySelector("figcaption").innerHTML = pieImagen;

  modal.style.display = "flex";
}

/* Cierra la ventana modal */
function closeModal() {
  console.log("Función openModal");
  //Buscamos la ventana modal
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}
