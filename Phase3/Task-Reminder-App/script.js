document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskList = document.getElementById("task-list");

  let tasks = [];

  // Add a new Task :

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskname = document.getElementById("task-name").value;
    const taskdate = new Date(document.getElementById("task-date").value);

    if (taskdate < new Date()) {
      alert("The reminder time must be in the future!");
      return;
    }

    const task = {
      id: Date.now(),
      name: taskname,
      date: taskdate,
    };

    tasks.push(task);
    displayTasks();
    scheduleReminder(task);
    taskForm.reset();

    // Display tasks in the list
    function displayTasks() {
      taskList.innerHTML = `<h2>Your Tasks</h2>`;
      tasks.forEach((task) => {
        const taskItem = document.createElement("div");
        taskItem.className = "task";
        taskItem.innerHTML = `
                <span>${task.name}</span>
                <span class="time">${task.time.toLocaleString()}</span>
            `;
        taskList.appendChild(taskItem);
      });
    }
  });

  // Schedule a reminder for the task
  function scheduleReminder(task) {
    const timeDifference = task.time - new Date();
    setTimeout(() => {
      alert(`Reminder: ${task.name}`);
    }, timeDifference);
  }
});
