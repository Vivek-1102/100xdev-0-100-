/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoList = [];
  }
  add(todo) {
    this.todoList.push(todo);
    console.log(this.todoList);
  }
  remove(indexOfTodo) {
    const newTodoItem = this.todoList.filter((todoitem, index) => {
      return index !== indexOfTodo;
    });
    this.todoList = newTodoItem;
    return this.todoList;
  }
  update(index, updatedTodo) {
    if (index <= this.todoList.length - 1) {
      this.todoList[index] = updatedTodo;
      return this.todoList;
    } else {
      return null;
    }
  }
  getAll() {
    console.log(this.todoList);
    return this.todoList;
  }
  get(indexOfTodo) {
    if (indexOfTodo <= this.todoList.length - 1) {
      return this.todoList[indexOfTodo];
    } else {
      return null;
    }
  }
  clear() {
    return (this.todoList = []);
  }
}
let obj = new Todo();
obj.add("dekfm");
obj.add("132ds");
obj.getAll();
module.exports = Todo;
