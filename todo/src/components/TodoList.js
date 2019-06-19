import React from "react";
import { connect } from "react-redux";
import { addToDo, toggleToDo } from "../actions";

class TodoList extends React.Component {
  state = {
    newTodo: ""
  };

  handleChanges = e => {
    console.log(this.state.newTodo);
    this.setState({ newTodo: e.target.value });
  };

  addTask = e => {
    e.preventDefault();
    console.log(this.state.newTodo);
    this.props.addToDo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  toggleComplete = index => {
    console.log(index);
    this.props.toggleToDo(index);
  };

  render() {
    return (
      <div className="list">
        {this.props.todos.map((todo, index) => {
          console.log(index);
          console.log(this.props.todos);
          return (
            <p
              onClick={() => this.toggleComplete(index)}
              className={todo.completed === true ? "complete" : ""}
              key={index}
            >
              {todo.task}
              {todo.completed}
            </p>
          );
        })}
        <form onSubmit={this.addTask}>
          <input
            placeholder="Task"
            value={this.state.newTodo}
            onChange={this.handleChanges}
            name="task"
          />
          <button>Add Task</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addToDo, toggleToDo }
)(TodoList);
