import {combineReducers, configureStore} from '@reduxjs/toolkit';
import itemsReducer from './itemsReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
