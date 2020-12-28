import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import filtersReducer from "../reducers/filters";
import pizzasReducer from "../reducers/pizzas";
import cartReducer from "../reducers/cart";

const reducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  cart: cartReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
