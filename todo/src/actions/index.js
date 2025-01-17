export const ADDTODO = "ADDTODO";
export const TOGGLETODO = "TOGGLETODO";
export const DELETETODO = "DELETETODO";

export const addToDo = input => {
  return { type: ADDTODO, payload: input };
};

export const toggleToDo = index => {
  return { type: TOGGLETODO, payload: index };
};

export const deleteToDo = index => {
  return { type: DELETETODO, payload: index };
};
