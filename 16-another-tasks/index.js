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

const task1 = {
  order: 4,
  name: "Поиграть в Baldur's Gate 3",
  timeLimit: 3600,
};

const task2 = {
  order: 1,
  name: "Перепройти Gothic",
  description: "Не забыть про мод Архолос",
};

const newTask = {
  tasks: [
    {
      id: 1,
      name: "test",
      description: "описание",
      order: 0,
    },
  ],
};

const addTaskFunc = toDoList.addTask;
const updateTaskFunc = toDoList.updateTask;
const removeTaskFunc = toDoList.removeTask.bind(newTask);
const addTestTaskFunc = toDoList.addTask.bind(newTask, { name: "test" });

console.log("ADD TASK CALL TEST");
addTaskFunc.call(newTask, task1);
console.log(newTask);
addTaskFunc.call(newTask, task2);
console.log(newTask);
console.log("=================");
console.log("UPDATE TASK APPLY TEST");
updateTaskFunc.apply(newTask, [3, { timeLimit: 3600 }]);
updateTaskFunc.apply(newTask, [2, { priority: 2 }]);
console.log(newTask);
console.log("=================");
console.log("REMOVE TASK BIND TEST");
removeTaskFunc(1);
console.log(newTask);
console.log("=================");
console.log("UPDATE TASK BIND TEST");
addTestTaskFunc({ description: "описание" });
console.log(newTask);
console.log("=================");
