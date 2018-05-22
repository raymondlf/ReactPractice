import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    //console.log(this.props.todo.completed);
    return (
      <li className="TodoItem">
        <strong>{this.props.todo.title}</strong> - {this.props.todo.id}
      </li>
    );
  }
}

export default TodoItem;
