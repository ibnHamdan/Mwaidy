import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "../features/login/redux/login";

export const rootRedcer = combineReducers({
  login: loginReducer,
});

const store = configureStore({
  reducer: rootRedcer,
});

export default store;
