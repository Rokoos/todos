import React from "react";
import uuid from "uuid";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
import "./styles/style.scss";

class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    const todos = localStorage.getItem("todos");
    if (!todos) {
      return [];
    } else {
      this.setState({ todos: JSON.parse(todos) });
    }
  }
  saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };
  markComplete = id => {
    this.setState(
      {
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      },
      () => this.saveToLocalStorage()
    );
  };

  addTodo = title => {
    const newTodo = {
      title,
      id: uuid(),
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] }, () =>
      this.saveToLocalStorage()
    );
  };
  removeTodo = id => {
    this.setState(
      {
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      },
      () => this.saveToLocalStorage()
    );
  };
  render() {
    return (
      <div className="app">
        <Header />
        <Input addTodo={this.addTodo} />
        <List
          markComplete={this.markComplete}
          remove={this.removeTodo}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
