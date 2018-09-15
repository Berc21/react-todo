import React, { Component } from 'react';

import s from './index.scss';
export default class TodoForm extends Component {
  constructor() {
    super();

    this.addTask = this.addTask.bind(this);
  }

  state = {
    name : '',
  }

  addTask(e) {
    e.preventDefault();
    this.props.addTask( {
      text: this.state.name,
      done: false,
    });
 }
  render() {
    const { state } = this;
   
    return (
      <form  onSubmit={this.addTask} className={s.TodoForm} >
          <input type="text" value={ state.name }  onChange={ e => this.setState({ name : e.target.value }) } />
          <button type="submit" > Ekle</button>
      </form>
    );
  }
}

