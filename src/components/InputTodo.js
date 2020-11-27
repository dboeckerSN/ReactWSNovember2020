import React from "react";

class InputTodo extends React.Component {
  state = {
    title: "Test Title"
  };

  onChange = e => {
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: "",
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
          placeholder="Todo Hinzufügen"
          value={this.state.title}
          onChange={this.onChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default InputTodo;