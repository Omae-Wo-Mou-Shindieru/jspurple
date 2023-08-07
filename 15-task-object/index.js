const toDoList = {
  tasks: [
    {
      id: 1,
      title: "Помыть посуду",
      priority: 1,
    },
    {
      id: 2,
      title: "Разбить посуду",
      priority: 2,
    },
  ],
  addTask: function (title, priority = 1) {
    let id = 1;
    if (this.tasks.length > 0) {
      id = this.tasks[this.tasks.length - 1].id + 1;
    }
    this.tasks.push({
      id,
      title,
      priority,
    });
  },
  removeTask: function (id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },
  updateTask: function (id, title, priority) {
    const foundTask = this.tasks.find((task) => task.id === id);
    if (!foundTask) {
      console.log("Задача не найдена");
      return;
    }
    if (title) {
      foundTask.title = title;
    }
    if (priority) {
      foundTask.priority = priority;
    }
  },
  sortTasks: function () {
    this.tasks.sort((a, b) => a.priority - b.priority);
  },
};

toDoList.removeTask(2);
console.log(toDoList);
toDoList.addTask("Пойти в магазин", 3);
console.log(toDoList);
toDoList.addTask("Починить крышу");
console.log(toDoList);
toDoList.addTask("Пообедать с другом", 2);
console.log(toDoList);
console.log("После сортировки : ");
toDoList.sortTasks();
console.log(toDoList.tasks);
toDoList.updateTask(1, "Купить посуду", 5);
console.log(toDoList);
toDoList.updateTask(1, undefined, 4);
console.log(toDoList);
