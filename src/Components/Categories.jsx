import React, { useState } from "react";
const menuArray = ["All", "Meat", "Vegans", "Grill", "Spicy", "Closed"];

export default function Categories() {
  const [choosePostition, setChoosePoition] = useState(0);
  function changeActionButtonClass(index) {
    setChoosePoition(index);
  }
  return (
    <div className="categories">
      <ul>
        {menuArray.map((item, index) => {
          return (
            <li
              key={item + index}
              className={choosePostition === index ? "active" : ""}
              onClick={() => changeActionButtonClass(index)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
