let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        list.innerHTML += `
            <li class="task ${task.done ? 'completed' : ''}">
                <span onclick="toggleTask(${index})">${task.text}</span>
                <button class="deleteBtn" onclick="deleteTask(${index})">X</button>
            </li>
        `;
    });
}

function addTask() {
    const input = document.getElementById("taskInput");
    if (input.value.trim() === "") {
        alert("Enter a task first!");
        return;
    }

    tasks.push({ text: input.value, done: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    displayTasks();
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

displayTasks();