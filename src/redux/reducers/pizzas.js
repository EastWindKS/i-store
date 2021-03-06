const initialState = {
  items: [],
  isLoaded: false,
};
export default function pizzasReducer(store = initialState, action) {
  switch (action.type) {
    case "SET_PIZZAS":
      return {
        ...store,
        items: action.payload,
        isLoaded: true,
      };
    case "SET_LOADING":
      return {
        ...store,
        isLoaded: false,
      };
    default:
      return store;
  }
}
