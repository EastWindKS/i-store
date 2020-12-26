import React from "react";
import Categories from "../Components/Categories";
import PizzaItem from "../Components/PizzaItem";
import SortPopup from "../Components/SortPopup";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";

export default function Home() {
  const { pizzas, loading } = useSelector(({ pizzas }) => {
    return {
      pizzas: pizzas.items,
      loading: pizzas.isLoaded,
    };
  });
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
            return <PizzaItem pizza={pizza} key={pizza.id} />;
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
