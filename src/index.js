import React from "react";
import ReactDom from "react-dom";

// component files
import TodoContainer from './components/TodoContainer';
import "./App.css";

ReactDom.render(<TodoContainer />, document.getElementById("root"));