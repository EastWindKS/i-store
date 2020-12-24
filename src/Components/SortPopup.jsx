import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSortBy } from "../redux/actions/filters";
const filterListArray = [
  { name: "popularity", type: "popular" },
  { name: "price", type: "price" },
  { name: "alphabet", type: "alphabet" },
];
export default function SortPopup() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [filterName, setFilterName] = useState("popularity");
  const [filterPosition, setFilterPosition] = useState(0);
  function onOpenClick() {
    setOpen((prev) => !prev);
  }
  function onFilterRowClick(index, filterName) {
    setFilterPosition(index);
    setFilterName(filterName);
    dispatch(setSortBy(filterName));
    setOpen((prev) => !prev);
  }

  return (
    <div className="sort">
      <div className="sort__label">
        <img
          src="./img/arrow-top.svg"
          width="25"
          height="10"
          alt="arrow"
          className={open ? "rotated" : ""}
        />
        <b>Sort by:</b>
        <span onClick={onOpenClick}>{filterName}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {filterListArray.map((item, index) => {
              return (
                <li
                  className={index === filterPosition ? "active" : ""}
                  onClick={() => onFilterRowClick(index, item.name)}
                  key={item.name}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
