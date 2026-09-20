
const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const priorityInput = document.getElementById('priority-input');
const filterSelect = document.getElementById('filter-select');
const taskList = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


function saveAndRender() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newTask = {
    id: Date.now(),
    text: taskInput.value.trim(),
    priority: priorityInput.value,
    completed: false,
  };

  tasks.push(newTask);
  taskInput.value = '';
  saveAndRender();
});
function toggleTask(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveAndRender();
}


function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveAndRender();
}

filterSelect.addEventListener('change', renderTasks);

function renderTasks() {
  taskList.innerHTML = '';
  const filterValue = filterSelect.value;

  const filteredTasks = tasks.filter((task) => {
    if (filterValue === 'completed') return task.completed;
    if (filterValue === 'pending') return !task.completed;
    return true; 
  });

  filteredTasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;

    li.innerHTML = `
      <div class="task-content">
        <input 
          type="checkbox" 
          ${task.completed ? 'checked' : ''} 
          onchange="toggleTask(${task.id})"
        />
        <span class="task-text">${escapeHTML(task.text)}</span>
        <span class="priority-tag priority-${task.priority}">${task.priority}</span>
      </div>
      <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
    `;

    taskList.appendChild(li);
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

renderTasks();