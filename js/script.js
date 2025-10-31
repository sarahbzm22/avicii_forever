window.addEventListener('scroll', () => {
  const section = document.querySelector('#only-section');
  const scrollY = window.scrollY;
  const fadeDistance = window.innerHeight * 0.7;

  // Para calcular la opacidad según el scroll
  let opacity = Math.min(scrollY / fadeDistance, 1);
  section.style.opacity = opacity;

  // Para que cuando llege a opacidad completa, se active el scroll normal
  if (opacity >= 1) {
    section.classList.add('visible');
  } else {
    section.classList.remove('visible');
  }
});
