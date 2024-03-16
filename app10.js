const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');
const addButton = document.getElementById('add-button');

// Function to create a new todo list item
function addTodo(text) {
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  const todoText = document.createElement('span');
  const deleteButton = document.createElement('button');

  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', (event) => {
    listItem.classList.toggle('completed');
  });

  todoText.innerText = text;

  deleteButton.innerText = 'X';
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(listItem);
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(todoText);
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);
  newTodoInput.value = ''; // Clear the input field
}

// Add event listener to the Add button
addButton.addEventListener('click', () => {
  const newTodoText = newTodoInput.value.trim();
  if (newTodoText) {
    addTodo(newTodoText);
  }
});
