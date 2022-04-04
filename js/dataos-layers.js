let element = document.getElementById('dataos-layers');

document.addEventListener('scroll', () => {
  let bounds = element.getBoundingClientRect();
  element.classList.toggle('visible', bounds.top < bounds.height / 2);
});