import React from "react";

class Header extends React.Component {
  headerStyle = {
    padding: "20px 0",
    lineHeight: "2em"
  }

  componentDidUpdate(prevProps, prevState) {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb("+x+","+y+","+z+")";

    if(prevProps.headerSpan !== this.props.headerSpan) {
      document.getElementById("inH1").innerHTML = "clicked";
      document.getElementById("inH1").style.backgroundColor = bgColor;
    }
  }

  render() {
    return (
      <header>
        <h1 style={this.headerStyle}>Simple Todo App <span id="inH1"></span></h1>
        <p style={ {fontSize: "19px", marginBottom: "10px"} }>Bitte füg mithilfe des Eingabefelds neue todos hinzu</p>
      </header>
    )
  }
}
export default Header;