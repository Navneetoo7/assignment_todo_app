import {legacy_createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import todoReducer from '../reducers/todoReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

const store: any = legacy_createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default store;
