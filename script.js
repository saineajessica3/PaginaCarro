function mostrarCategoria(id) {
  // Oculta todas las categorías
  const categorias = document.querySelectorAll('.categoria');
  categorias.forEach(c => c.classList.remove('activa'));

  // Muestra solo la seleccionada
  const seleccionada = document.getElementById(id);
  seleccionada.classList.add('activa');
}
