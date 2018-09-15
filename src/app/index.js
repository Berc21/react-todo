import React, { Component } from "react";
import logo from "./logo.svg";
import s from "./index.scss";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          text: "Elma Al",
          done: false
        },
        {
          text: "Armut Al",
          done: false
        },
        {
          text: "Patates Al",
          done: false
        }
      ]
    };
  }

  addTask = (val) => {
    let updated = this.state.tasks;
    updated.push(val)
    
    this.setState({tasks : updated})
 
  }
  render() {
    return (
      <div className={s.App}>
        <header className={s.AppHeader}>
          <img src={logo} className={s.AppLogo} alt="logo" />
        </header>
        <TodoForm addTask={this.addTask} /> 
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
