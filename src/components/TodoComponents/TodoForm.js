import React, { Component } from "react";
import TodoList from "./TodoList";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task1: ""
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.task]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.extraTask(e, this.state.task);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="task"
            // value={this.state.newTask}
            onChange={this.handleChanges}
          />
          <button>Add Task</button>
          <br></br>
          <button className="reset">Reset</button>
        </form>
        <div className="form-container">
          <TodoList TodoList={this.props.TaskList} />
        </div>
      </div>
    );
  }
}

export default TodoForm;
