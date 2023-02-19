import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import list from "./listSlice.js";

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ list });

const store = configureStore({ reducer, middleware });

export default store;
