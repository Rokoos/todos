import React, { useState } from "react";

class Input extends React.Component {
  state = {
    title: ""
  };
  handleAddTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handleAddTodo} className="input">
        <input
          autoComplete="off"
          type="text"
          name="title"
          value={this.state.title}
          placeholder="Add todo..."
          onChange={this.onChange}
        />
        <button>Add todo</button>
      </form>
    );
  }
}

export default Input;
