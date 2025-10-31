document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("only-section");

  // Bloquea el scroll al cargar
  document.body.classList.add("no-scroll");

  // Espera 2 segundos antes de empezar el fade-in
  setTimeout(() => {
    section.classList.add("visible");

    // Espera a que acabe la animación (2s) y luego permite hacer scroll
    setTimeout(() => {
      document.body.classList.remove("no-scroll");
    }, 2000);
  }, 2000);
});
