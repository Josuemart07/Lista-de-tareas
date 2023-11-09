const controller = {
    init: function() {
      view.renderTasks(model.tasks);
  
      const addTaskButton = document.getElementById('addTaskButton');
      addTaskButton.addEventListener('click', () => this.addTask());
  
      const taskInput = document.getElementById('taskInput');
      taskInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          this.addTask();
        }
      });
    },
  
    addTask: function() {
      const taskInput = document.getElementById('taskInput');
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        model.addTask(taskText);
        taskInput.value = '';
        view.renderTasks(model.tasks);
      }
    },
  
    toggleTaskCompletion: function(index) {
      model.toggleTaskCompletion(index);
      view.renderTasks(model.tasks);
    },
  
    deleteTask: function(index) {
      model.deleteTask(index);
      view.renderTasks(model.tasks);
    }
  };
  
  controller.init();
  