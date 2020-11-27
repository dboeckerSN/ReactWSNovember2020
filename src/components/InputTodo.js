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

  render() {
    return (
      <form>
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