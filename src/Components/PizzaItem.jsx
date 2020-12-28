import React, { useState } from "react";
import classNames from "classnames";
const pizzasBoardTypeArray = ["thin", "traditional"];

export default function PizzaItem({ pizza, onAddPizzaToCart }) {
  const { sizes, name, price, imageUrl, id, types } = pizza;
  const [sizeChoose, setSizeChoose] = useState(0);
  const [typeBoard, setTypeBoard] = useState(types[0]);
  const callOnAddPizzaToCart = () =>
    onAddPizzaToCart({
      id,
      price,
      name,
      imageUrl,
      size: sizes[sizeChoose],
      type: pizzasBoardTypeArray[typeBoard],
    });
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {pizzasBoardTypeArray?.map((type, index) => (
            <li
              onClick={() => setTypeBoard(index)}
              key={type}
              className={classNames({
                active: typeBoard === index,
                disabled: !types.includes(index),
              })}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li
              key={`${id} ${index}`}
              className={index === sizeChoose ? "active" : ""}
              onClick={() => setSizeChoose(index)}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <img src="./img/plus.svg" alt="add" />
          <span onClick={callOnAddPizzaToCart}>Add</span>
        </div>
      </div>
    </div>
  );
}
