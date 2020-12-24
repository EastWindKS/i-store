import React from "react";
import Categories from "../Components/Categories";
import PizzaItem from "../Components/PizzaItem";
import SortPopup from "../Components/SortPopup";
import { useSelector } from "react-redux";

export default function Home() {
  const { pizzas } = useSelector(
    ({ pizzas }) => {
      return {
        pizzas: pizzas.items,
      };
    }
  );
 
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <SortPopup />
      </div>
      <h2 className="content__title">All Pizzas!</h2>
      <div className="content__items">
        {pizzas?.map((pizza) => {
          return <PizzaItem pizza={pizza} key={pizza.id} />;
        })}
      </div>
    </div>
  );
}
