const initialState = {
  category: 0,
  sortBy: "popular",
};
export default function SET_SORT_BY(store = initialState, action) {
  switch (action.type) {
    case "SET_SORT_BY":
      return {
        ...store,
        sortBy: action.payload,
      };
    case "SET_CATEGORY":
      return {
        ...store,
        category: action.payload,
      };
    default:
      return store;
  }
}
