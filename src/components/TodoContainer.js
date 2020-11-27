import React from "react";

import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Webseite entwickeln und Content hinzufügen",
        completed: false,
      },
      {
        id: 3,
        title: "Anwendung deployen",
        completed: false,
      },
    ]
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map( todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    }))
  }

  handleDelete = id => {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    }))
  }

  render() {
    return (
      <div>
        <Header />
        <InputTodo />
        <TodosList 
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          handleDeleteProps={this.handleDelete} />
      </div>
    );
  }
}

export default TodoContainer;