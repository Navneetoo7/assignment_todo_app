// src/actions/todoActions.ts

import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_DONE,
  TodoActionTypes,
} from '../store/types';

export const addTodo = (text: string): TodoActionTypes => ({
  type: ADD_TODO,
  payload: text,
});

export const editTodo = (id: number, text: string): TodoActionTypes => ({
  type: EDIT_TODO,
  payload: {id, text},
});

export const removeTodo = (id: number): TodoActionTypes => ({
  type: REMOVE_TODO,
  payload: id,
});

export const toggleDone = (id: number): TodoActionTypes => ({
  type: TOGGLE_DONE,
  payload: id,
});
