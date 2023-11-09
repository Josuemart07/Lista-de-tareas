const view = {
  renderTasks: function(taskList) {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';

    taskList.forEach((task, index) => {
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        <span>${task.text}</span>
        <button class="completeButton">${task.completed ? 'Completada' : 'Pendiente'}</button>
        <button class="deleteButton">Eliminar</button>
      `;

      const completeButton = taskItem.querySelector('.completeButton');
      completeButton.addEventListener('click', () => controller.toggleTaskCompletion(index));

      const deleteButton = taskItem.querySelector('.deleteButton');
      deleteButton.addEventListener('click', () => controller.deleteTask(index));

      // Insertar la tarea al final de la lista
      taskListElement.appendChild(taskItem);
    });

    // Scroll hacia abajo para mostrar la tarea recién agregada
    taskListElement.scrollTop = taskListElement.scrollHeight;
  }
};
