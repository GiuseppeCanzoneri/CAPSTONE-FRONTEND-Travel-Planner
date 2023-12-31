import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homeReducer from "../reducers/homeReducer";

const rootReducer = combineReducers({
  home: homeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
