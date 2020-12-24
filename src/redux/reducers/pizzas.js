const initialState = {
  items: [],
  isLoaded: false,
};
export default function SET_PIZZAS(store = initialState, action) {
  switch (action.type) {
    case "SET_PIZZAS":
      return {
        ...store,
        items: action.payload,
        isLoaded: true,
      };
    default:
      return store;
  }
}
