import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
// import { composeWithDevTools } from "@redux-devtools/extension";

const store = configureStore({
  reducer: rootReducer,
  //   composeWithDevTools(),
  // applyMiddleware(...middleware)
  // // other store enhancers if any
  //   )
});

export default store;
