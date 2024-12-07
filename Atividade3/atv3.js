// atv3.js
const toggleButton = document.getElementById('toggleButton');
const textParagraph = document.getElementById('textParagraph');

toggleButton.addEventListener('click', () => {
  if (textParagraph.style.display === 'none') {
    // Tornar o parágrafo visível
    textParagraph.style.display = 'block';
    // Alterar o texto do botão
    toggleButton.textContent = 'Ocultar';
  } else {
    // Ocultar o parágrafo
    textParagraph.style.display = 'none';
    // Alterar o texto do botão
    toggleButton.textContent = 'Mostrar';
  }
});
