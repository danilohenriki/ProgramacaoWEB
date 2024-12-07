// atv2.js
document.getElementById('addButton').addEventListener('click', () => {
    // Capturar o valor do campo de texto
    const itemValue = document.getElementById('itemInput').value;
  
    // Verificar se o campo não está vazio
    if (itemValue.trim() === '') {
      alert('Por favor, digite um item!');
      return;
    }
  
    // Criar um novo elemento <li>
    const newItem = document.createElement('li');
    newItem.textContent = itemValue;
  
    // Adicionar o item à lista
    document.getElementById('itemList').appendChild(newItem);
  
    // Limpar o campo de texto
    document.getElementById('itemInput').value = '';
  });
  