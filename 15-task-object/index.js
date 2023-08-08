const toDoList = {
  tasks: [
    {
      id: 1,
      priority: 1,
      title: "Помыть посуду",
    },
    {
      id: 2,
      priority: 2,
      title: "Разбить посуду",
    },
  ],
  addTask: function (task) {
    let id = 1;
    if (this.tasks.length > 0) {
      id = this.tasks[this.tasks.length - 1].id + 1;
    }
    this.tasks.push({
      id,
      priority: task.priority ?? 1,
      ...task,
    });
  },
  removeTask: function (id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },
  updateTask: function (id, task) {
    // let foundTask = this.tasks.find((task) => task.id === id);
    let foundTaskIndex = this.tasks.findIndex((task) => task.id === id);
    if (foundTaskIndex === -1) {
      console.log("Задача не найдена");
      return;
    }
    this.tasks[foundTaskIndex] = {
      ...this.tasks[foundTaskIndex],
      ...task,
    };
  },
  sortTasks: function () {
    this.tasks.sort((a, b) => a.priority - b.priority);
  },
};

const newTask1 = {
  priority: 4,
  title: "Поиграть в Baldur's Gate 3",
  timeLimit: 3600,
};

const newTask2 = {
  priority: 1,
  title: "Перепройти Gothic",
  comment: "Не забыть про мод Архолос",
};

toDoList.removeTask(2);
console.log(toDoList);
toDoList.addTask({ priority: 3, title: "Пойти в магазин" });
console.log(toDoList);
toDoList.addTask({ title: "Починить крышу" });
console.log(toDoList);
toDoList.addTask({ priority: 2, title: "Пообедать с другом" });
console.log(toDoList);
toDoList.addTask(newTask1);
console.log(toDoList);
toDoList.addTask(newTask2);
console.log(toDoList);
toDoList.updateTask(1, { priority: 5, title: "Купить посуду" });
console.log(toDoList);
toDoList.updateTask(2, { priority: 4, shoppingList: ["Молоко", "Картофель"] });
console.log(toDoList);
console.log("После сортировки : ");
toDoList.sortTasks();
console.log(toDoList.tasks);
