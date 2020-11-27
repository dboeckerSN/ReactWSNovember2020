import React from "react";

class TodoItem extends React.Component {
  completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  componentWillUnmount() {
    alert("Todo Item wird gelöscht");
  }

  render() {
    return <li className="todo-item">
      <input type="checkbox"
      checked={this.props.todo.completed}
      onChange={() => this.props.handleChangeProps(this.props.todo.id)} />
     <span style={ this.props.todo.completed ? this.completedStyle : null }>{this.props.todo.title}</span>
     <button onClick={() => this.props.handleDeleteProps(this.props.todo.id)} >Löschen</button>
     </li>
  }
}

export default TodoItem; 