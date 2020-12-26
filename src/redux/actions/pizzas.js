import axios from "axios";
export function fetchAllPizzas() {
  return async (dispathc) => {
    dispathc({ type: "SET_LOADING" });
    await axios.get("https://localhost:44356/pizzas").then(({ data }) => {
      dispathc({
        type: "SET_PIZZAS",
        payload: data,
      });
    });
  };
}
