import React from "react";
import Categories from "../Components/Categories";
import PizzaItem from "../Components/PizzaItem";
import SortPopup from "../Components/SortPopup";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { addPizzaToCart } from "../redux/actions/cart";

export default function Home() {
  const dispatch = useDispatch();
  const { pizzas, loading } = useSelector(({ pizzas }) => {
    return {
      pizzas: pizzas.items,
      loading: pizzas.isLoaded,
    };
  });
  function onAddPizzaToCart(pizza) {
    dispatch(addPizzaToCart(pizza));
  }
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <SortPopup />
      </div>
      <h2 className="content__title">All Pizzas!</h2>
      <div className="content__items">
        {loading &&
          pizzas?.map((pizza) => {
            return (
              <PizzaItem
                pizza={pizza}
                key={pizza.id}
                onAddPizzaToCart={onAddPizzaToCart}
              />
            );
          })}
        {!loading && (
          <Loader
            style={{ padding: "100px" }}
            type="Circles"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
      </div>
    </div>
  );
}
