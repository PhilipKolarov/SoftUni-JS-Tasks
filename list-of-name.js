function addItem() {
    const ulContainer = document.getElementById('items');
    const input = document.getElementById('newItemText');
    const newLi = document.createElemenet('li');
    newLi.textContent = input.value;
    ulContainer.appendChild(newLi);
    input.value = '';
}