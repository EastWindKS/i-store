import axios from "axios";
function filterQuery(category, filter) {
  const obj = {
    category,
    filter,
  };
  for (const key of Object.keys(obj)) {
    if (obj[key] === null) {
      delete obj[key];
    }
    return Object.keys(obj)
      .reduce(function (a, k) {
        a.push(k + "=" + obj[k]);
        return a;
      }, [])
      .join("&");
  }
}

export function fetchAllPizzas(category, filter) {
  const query = filterQuery(category, filter);
  return async (dispathc) => {
    dispathc({ type: "SET_LOADING" });
    await axios
      .get(`https://simpleserverasp.herokuapp.com/pizzas?${query}`)
      .then(({ data }) => {
        dispathc({
          type: "SET_PIZZAS",
          payload: data,
        });
      });
  };
}
