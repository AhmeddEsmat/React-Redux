import { createSlice } from "@reduxjs/toolkit";

var counter = 1;

const initialState = {
  todos: [
    { id: counter++, title: "Todo 1", completed: false },
    { id: counter++, title: "Todo 2", completed: false },
    { id: counter++, title: "Todo 3", completed: true },
    { id: counter++, title: "Todo 4", completed: false },
  ],
  filteredTodos: [
    { id: counter++, title: "Todo 1", completed: false },
    { id: counter++, title: "Todo 2", completed: false },
    { id: counter++, title: "Todo 3", completed: true },
    { id: counter++, title: "Todo 4", completed: false },
  ],
};

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: counter++,
        title: action.payload.title,
        completed: false,
      };
      state.filteredTodos.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.filteredTodos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.filteredTodos[index].completed = action.payload.completed;
      state.todos[index].completed = action.payload.completed;
    },
    toggleEdit: (state, action) => {
      const index = state.filteredTodos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.filteredTodos[index].title = action.payload.title;
      state.todos = state.filteredTodos;
    },
    deleteTodo: (state, action) => {
      state.filteredTodos = state.filteredTodos.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    showDone: (state) => {
      state.filteredTodos = state.todos.filter(
        (todo) => todo.completed === true
      );
    },
    showUndone: (state) => {
      state.filteredTodos = state.todos.filter(
        (todo) => todo.completed === false
      );
    },
    showAll: (state) => {
      state.filteredTodos = state.todos;
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  toggleEdit,
  deleteTodo,
  showDone,
  showUndone,

  showAll,
} = todoReducer.actions;
export default todoReducer.reducer;
