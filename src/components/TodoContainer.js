import React from "react";
import axios from "axios";

import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

class TodoContainer extends React.Component {
  state = {
    todos: [],
    show: false,
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos", {
      params: {
        _limit: 10,
      }
    })
      .then( response => this.setState({ todos: response.data }) );
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map( todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
      show: !prevState.show,
    }))
  }

  handleDelete = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => {
        this.setState({
          todos: [
            ...this.state.todos.filter(todo => {
              return todo.id !== id
            }),
          ],
        })
      })
  }

  addTodo = title => {
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false,
    })
    .then( response => this.setState({
      todos: [...this.state.todos, response.data],
    }) );
  }

  render() {
    return (
      <div className="container">
        <Header headerSpan={this.state.show} />
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