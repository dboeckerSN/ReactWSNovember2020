import React from "react";
import {v4 as uuidv4} from "uuid";

import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true,
      },
      {
        id: uuidv4(),
        title: "Webseite entwickeln und Content hinzufügen",
        completed: false,
      },
      {
        id: uuidv4(),
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

  addTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    this.setState({
      todos: [...this.state.todos, newTodo],
    })
  }

  render() {
    return (
      <div>
        <Header />
        <InputTodo addTodoProps={this.addTodo} />
        <TodosList 
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          handleDeleteProps={this.handleDelete} />
      </div>
    );
  }
}

export default TodoContainer;