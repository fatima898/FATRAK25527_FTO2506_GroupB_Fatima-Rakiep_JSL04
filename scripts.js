// The initial list of tasks 
const initialTasks = [
  { id: 1, title: "Launch Epic Career 🚀", description: "Create a killer Resume", status: "todo" },
  { id: 2, title: "Master JavaScript 💛", description: "Get comfortable with the fundamentals", status: "doing" },
  { id: 3, title: "Keep on Going 🏆", description: "You're almost there", status: "doing" },
  { id: 11, title: "Learn Data Structures and Algorithms 📚", description: "Study fundamental data structures and algorithms to solve coding problems efficiently", status: "todo" },
  { id: 12, title: "Contribute to Open Source Projects 🌐", description: "Gain practical experience and collaborate with others in the software development community", status: "done" },
  { id: 13, title: "Build Portfolio Projects 🛠️", description: "Create a portfolio showcasing your skills and projects to potential employers", status: "done" }
];

// DOM references for each task category
const columns = {
  todo: document.querySelector('[data-status="todo"] .tasks-container'),
  doing: document.querySelector('[data-status="doing"] .tasks-container'),
  done: document.querySelector('[data-status="done"] .tasks-container'),
};

// create modal element and attach to the DOM (available for interaction)
const modal = createModal();
document.body.appendChild(modal);
let currentTask = null;

// render all tasks into their respective columns
function renderTasks(tasks) {
  clearColumns();
  tasks.forEach(task => {
    const el = createTaskElement(task);
    columns[task.status].appendChild(el);
  });
}

// clear all task elements from columns
function clearColumns() {
  Object.values(columns).forEach(col => col.innerHTML = '');
}

// create a DOM element for a single task
function createTaskElement(task) {
  const div = document.createElement('div');
  div.className = 'task-div';
  div.textContent = task.title;
  div.addEventListener('click', () => openModal(task)); // open modal when task is clicked
  return div;
}

// create modal element and its inner content and logic
function createModal() {
  const modal = document.createElement('div');
  modal.id = 'task-modal';
  modal.style.display = 'none';
  modal.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="modal-content">
      <button id="modal-close">&times;</button>
      <h3>Task</h3>
      <label>Title</label>
      <input type="text" id="modal-title" placeholder="Task title" />
      <label>Description</label>
      <textarea id="modal-desc" rows="4" placeholder="Task description"></textarea>
      <label>Status</label>
      <select id="modal-status">
        <option value="todo">todo</option>
        <option value="doing">doing</option>
        <option value="done">done</option>
      </select>
    </div>
  `;   

  // close modal when the close button(the x) is clicked
  modal.querySelector('#modal-close').addEventListener('click', () => {
    modal.style.display = 'none';
  });

  return modal;
}

// opens the modal with the given task's data populated
function openModal(task) {
  currentTask = task;
  const modalEl = document.getElementById('task-modal');
  modalEl.style.display = 'flex';

  // populate modal inputs with selected task data
  document.getElementById('modal-title').value = task.title;
  document.getElementById('modal-desc').value = task.description;
  document.getElementById('modal-status').value = task.status;
}

  renderTasks(initialTasks);
  

