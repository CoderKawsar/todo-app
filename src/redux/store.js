import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
  //   composeWithDevTools(),
  // applyMiddleware(...middleware)
  // // other store enhancers if any
  //   )
});

export default store;
