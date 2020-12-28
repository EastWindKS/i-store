import { Link } from "react-router-dom";
import Button from "./Button";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { totalCalculate } from "../redux/actions/cart";
export default function Header({ dispatch }) {
  const { totalPrice, totalCount, pizzasInCart } = useSelector(({ cart }) => {
    return {
      totalPrice: cart.totalPrice,
      totalCount: cart.totalCount,
      pizzasInCart: cart.addedPizzas,
    };
  });

  useEffect(() => {
    dispatch(totalCalculate());
  }, [pizzasInCart, dispatch]);
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img
              src="../img/pizza-logo.svg"
              alt="logo.svg"
              height="50px"
              width="38"
            />
            <div>
              <h1>React Pizza</h1>
              <p>The best pizza in the World!</p>
            </div>
          </div>
        </Link>
        <Link to="/cart">
          <div className="header__cart">
            <Button className="button--cart">
              <span>{totalPrice} ₽</span>
              <div className="button__delimitr"></div>
              <img src="../img/cart.svg" alt="cart.svg" />
              <span>{totalCount}</span>
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}
