import type { Reducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./product.reducer";
import authReducer from "./auth.reducer";
const appReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
});

const rootReducer: Reducer = (state: RootState, action: any) => {
  if (action.type === "LOGOUT") {
    state = {} as RootState;
  }
  return appReducer(state, action);
};
export default rootReducer;
export type RootState = ReturnType<typeof appReducer>;
