// src/store/types.ts

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_DONE = 'TOGGLE_DONE';

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: string;
}

interface EditTodoAction {
  type: typeof EDIT_TODO;
  payload: {id: number; text: string};
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: number;
}

interface ToggleDoneAction {
  type: typeof TOGGLE_DONE;
  payload: number;
}

export type TodoActionTypes =
  | AddTodoAction
  | EditTodoAction
  | RemoveTodoAction
  | ToggleDoneAction;
