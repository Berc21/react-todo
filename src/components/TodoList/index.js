import React, { Component } from 'react';

import s from './index.scss';

export default class TodoList extends Component {
  render() {
    const task = this.props.tasks.map((item, index) => {
      return (
        <li className={s.ListItem} key={index} > {item.text} <span className={s.ListDone} > {item.done ? '✔s' : '✖'}  </span> <span> Sil </span>  </li>
      )
    } )

    return (
      <ul className="TodoList">
           {task} 
      </ul>
    );
  }
}


