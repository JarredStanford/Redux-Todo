import React from "react";
import { connect } from "react-redux";
import { addToDo, toggleToDo, deleteToDo } from "../actions";

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

  deleteTask = index => {
    console.log(index);
    console.log(this.props.todos);
    this.props.deleteToDo(index);
  };

  render() {
    return (
      <div className="list">
        {this.props.todos.map((todo, index) => {
          return (
            <div key={index}>
              <div
                onClick={() => this.toggleComplete(index)}
                className={todo.completed === true ? "complete" : ""}
              >
                {todo.task}
                {todo.completed}
              </div>
              <button onClick={() => this.deleteTask(index)}>
                Delete Todo
              </button>
            </div>
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
  { addToDo, toggleToDo, deleteToDo }
)(TodoList);
