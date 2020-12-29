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
export function deleteCurrentPizza(id) {
  return {
    type: "DELETE_CURR_PIZZA",
    payload: id,
  };
}
export function clearCart() {
  return {
    type: "CLEAR_CART",
  };
}
export function plusPizzaInCart(id) {
  return {
    type: "PLUS_PIZZA_IN_CART",
    payload: id,
  };
}
export function minusPizzaInCart(id) {
  return {
    type: "MINUS_PIZZA_IN_CART",
    payload: id,
  };
}
