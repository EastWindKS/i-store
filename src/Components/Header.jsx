import { Link } from "react-router-dom";
import Button from "./Button";

export default function Header() {
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
        <div className="header__cart">
          <Button className="button--cart">
            <span>555 ₽</span>
            <div className="button__delimitr"></div>
            <img src="../img/cart.svg" alt="cart.svg" />
            <span>3</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
