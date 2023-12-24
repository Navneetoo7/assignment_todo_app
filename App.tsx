/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// src/App.tsx

import React from 'react';
import {Provider} from 'react-redux';
import TodoApp from './src/components/TodoList';
import store from './src/store';

const App: React.FC = () => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);

export default App;
