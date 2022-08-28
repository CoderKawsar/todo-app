import { combineReducers } from "redux";
import todoReducer from "./todos/reducer";
import filterReducer from "./filter/reducer";

const rootReducer = combineReducers({
  filters: filterReducer,
  todos: todoReducer,
});

export default rootReducer;
