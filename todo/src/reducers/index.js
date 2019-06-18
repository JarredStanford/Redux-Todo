import { ADDTODO, TOGGLETODO } from "../actions/index";

const initialState = {
  todos: [
    { task: "Complete Project", completed: false },
    { task: "Watch Degrassi", completed: true }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      const newTodo = { task: action.payload, complete: false };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case TOGGLETODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else return todo;
        })
      };

    default:
      return state;
  }
};
