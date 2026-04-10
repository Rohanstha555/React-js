import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todoMsg: "making todo",
      checked: false,
    },
  ],

  addTodo: (todoMsg) => {},
  updateTodo: (id, todoMsg) => {},
  deleteTodo: (id) => {},
  togglecheckedTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
