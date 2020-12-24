import axios from "axios";
export function fetchAllPizzas() {
  return async (dispathc) =>
    await axios.get("http://localhost:3000/db.json").then(({ data }) => {
      dispathc({
        type: "SET_PIZZAS",
        payload: data.pizzas,
      });
    });
}
