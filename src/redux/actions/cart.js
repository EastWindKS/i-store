export function addPizzaToCart(obj) {
  return {
    type: "ADD_PIZZA_TO_CART",
    payload: obj,
  };
}
export function totalCalculate() {
  return {
    type: "TOTAL_CALCULATE",
  };
}
