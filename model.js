const model = {
    tasks: [],
  
    addTask: function(taskText) {
      this.tasks.push({ text: taskText, completed: false });
    },
  
    toggleTaskCompletion: function(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
  
    deleteTask: function(index) {
      this.tasks.splice(index, 1);
    }
  };
  