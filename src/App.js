import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./Todo.css";

const TaskList = [
  {
    task: "Take out Trash",
    id: Date.now(),
    completed: false
  },
  {
    task: "Wash the Dishes",
    id: Date.now(),
    completed: false
  },
  {
    task: "Mow the Lawn",
    id: Date.now(),
    completed: false
  },
  {
    task: "Make Dinner",
    id: Date.now(),
    completed: false
  },
  {
    task: "Fold the Laundry",
    id: Date.now(),
    completed: false
  },
  {
    task: "File for Taxes",
    id: Date.now(),
    completed: false
  },
  {
    task: "Get Groceries",
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      TaskList
    };
  }

  extraTodo = (e, item) => {
    e.preventDefault();

    const newTodo = {
      task: "",
      id: Date.now(),
      completed: false
    };

    this.setState({
      TaskList: newTodo
    });
  };

  toggleTodo = todoId => {
    this.setState({
      TaskList: this.state.TaskList.map(todo => {
        console.log(todo);
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  render() {
    return (
      <div className="App">
        <h1>This is My Todo App!</h1>
        <TodoForm />
      </div>
    );
  }
}

export default App;
