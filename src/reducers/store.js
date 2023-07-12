import {combineReducers, configureStore} from '@reduxjs/toolkit';
import itemsReducer from './itemsReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
