import React, { Component } from "react";
import TodoList from "./TodoList";

class TodoForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="todo" />
          <button>Add Task</button>
        </form>
        <div className="form-container">{/* <TodoList /> */}</div>
      </div>
    );
  }
}

export default TodoForm;
