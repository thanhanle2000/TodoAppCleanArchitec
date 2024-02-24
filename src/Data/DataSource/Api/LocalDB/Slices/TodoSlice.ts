import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Todo } from "../../../../../Domain/Model/Todo";

const CommonSlice = createSlice({
  name: "common",
  initialState: {
    todos: [] as Todo[],
  },

  reducers: {
    //todo
    createTodo: (state, action: PayloadAction<Todo>) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    },
    //todo
    updateTodo: (state, action: PayloadAction<Todo>) => {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.payload.id
            ? {
                ...todo,
                title: action.payload.title,
                isComplete: action.payload.isComplete,
              }
            : todo;
        }),
      };
    },
    //id
    removeTodo: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    },
  },
});

export const { createTodo, updateTodo, removeTodo } = CommonSlice.actions;

export default CommonSlice.reducer;
