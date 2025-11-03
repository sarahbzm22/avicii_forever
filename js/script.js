// Abre el menú
function openMenu() {
  console.log("Función openMenu");
  document.getElementById(
    "nav-menu"
  ).firstElementChild.lastElementChild.style.right = "0vw";
}

// Cierra el menú
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

//Inicializa AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1500,
  });
  document.getElementById("only-section").classList.add("visible");
});


// Abre la ventana modal de la galería
function openModal(figura) {
  console.log("Función openModal");
  //Se busca la ventana modal
  var modal = document.getElementById("modal-gallery");
  //Cogemos la imagen para la ventana modal
  var rutaImagen = figura.firstElementChild.getAttribute("src");
  console.log("valor de la ruta de la imagen: " + rutaImagen);
  var pieImagen = figura.lastElementChild.innerHTML; //Cogemos el figcaption completo
  console.log("Pie de imagen: " + pieImagen);

  modal.firstElementChild.firstElementChild.setAttribute("src", rutaImagen);

  //Cambiamos el valor del figcaption con la primera opción
  modal.querySelector("figcaption").innerHTML = pieImagen;

  modal.style.display = "flex";
}

// Cierra la ventana modal
function closeModal() {
  console.log("Función openModal");
  //Buscamos la ventana modal
  var modal = document.getElementById("modal-gallery");
  modal.style.display = "none";
}

// Contador del precio
let ticketCount = 1;
let ticketPrice = 0;
const maxTickets = 10;

function detectTicketType() {
  // Detectamos según el nombre del archivo
  const path = window.location.pathname;

  if (path.includes("buying_section_2.html")) {
    ticketPrice = 300;
  } else {
    ticketPrice = 150;
  }

  updateDisplay();
}

function changeNumber(amount) {
  const numberDisplay = document.getElementById("number-of-tickets");
  ticketCount += amount;
  if (ticketCount < 1) ticketCount = 1;
  if (ticketCount > maxTickets) ticketCount = maxTickets;
  numberDisplay.textContent = ticketCount;
  updateDisplay();
}

function updateDisplay() {
  const priceDisplay = document.getElementById("price");
  priceDisplay.textContent = (ticketCount * ticketPrice).toFixed(2);
  
}

document.addEventListener("DOMContentLoaded", detectTicketType);

let selectedDay = null;

function selectDay(element) {
  // Para que si ya hay un día seleccionado, los otros se desmarquen
  if (selectedDay) {
    selectedDay.classList.remove("selected");
  }

  // Marcar el nuevo día
  element.classList.add("selected");

  // Guardarlo como el actual
  selectedDay = element;

  console.log("Día seleccionado:", element.textContent.trim());
}

// Abrimos la ventana modal de los tickets
function openTicketsModal() {
  console.log("Abriendo modal de tickets");

  //Cogemos los valores del formulario
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone-number").value;

  //Los mostramos en el modal
  document.getElementById("n").textContent = name;
  document.getElementById("sn").textContent = surname;
  document.getElementById("eml").textContent = email;
  document.getElementById("phn").textContent = phone;

  //Mostramos el modal
  document.getElementById("modal-tickets").style.display = "flex";

  //Para que el formulario recargue la página
  return false;
}

function closeTicketsModal() {
  console.log("Cerrando modal de tickets");
  document.getElementById("modal-tickets").style.display = "none";
}
