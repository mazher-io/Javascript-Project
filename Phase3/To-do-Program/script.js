// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim(); // Get input value and remove extra spaces

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new <li> element
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  // Create a delete button for the task
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  // Append delete button to the task item
  taskItem.appendChild(deleteBtn);

  // Append task item to the list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = '';

  // Add event listener to delete the task when clicked
  deleteBtn.addEventListener('click', () => {
    taskItem.remove();
  });
}

// Add event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Optional: Add task on pressing Enter key
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});