// src/reducers/todoReducer.ts

import {TodoState, TodoActionTypes} from '../store/types';

const initialState: TodoState = {
  todos: [],
};
console.log('TodoActionTypes:-', initialState);

const todoReducer = (
  state = initialState,
  action: TodoActionTypes,
): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {id: Date.now(), text: action.payload, done: false},
        ],
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? {...todo, text: action.payload.text}
            : todo,
        ),
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case 'TOGGLE_DONE':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? {...todo, done: !todo.done} : todo,
        ),
      };
    default:
      return state;
  }
};
console.log('TodoActionTypes:-', initialState);

export default todoReducer;
