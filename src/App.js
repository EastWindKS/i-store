import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { fetchAllPizzas } from "./redux/actions/pizzas";
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPizzas());
  }, [dispatch]);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </div>
  );
}
