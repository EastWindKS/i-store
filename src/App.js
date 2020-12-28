import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useDispatch } from "react-redux";
import { fetchAllPizzas } from "./redux/actions/pizzas";
import { useSelector } from "react-redux";

export default function App() {
  const { category, filter } = useSelector(({ filters }) => {
    return {
      category: filters.category,
      filter: filters.sortBy,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPizzas(category, filter));
  }, [dispatch, category, filter]);
  return (
    <div className="wrapper">
      <Header dispatch={dispatch} />
      <div className="content">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </div>
    </div>
  );
}
