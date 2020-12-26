import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/filters";
const menuArray = [
  { name: "All", category: null },
  { name: "Meat", category: 0 },
  { name: "Vegans", category: 1 },
  { name: "Grill", category: 2 },
  { name: "Spicy", category: 3 },
  { name: "Closed", category: 4 },
];

export default function Categories() {
  const dispatch = useDispatch();
  const [choosePostition, setChoosePoition] = useState(0);
  function changeCategory(index, category) {
    setChoosePoition(index);
    dispatch(setCategory(category));
  }

  return (
    <div className="categories">
      <ul>
        {menuArray.map((item, index) => {
          return (
            <li
              key={item.name + index}
              className={choosePostition === index ? "active" : ""}
              onClick={() => changeCategory(index, item.category)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
