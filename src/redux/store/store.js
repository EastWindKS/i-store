import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import filtersReducer from "../reducers/filters";
import pizzasReducer from "../reducers/pizzas";

const reducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
