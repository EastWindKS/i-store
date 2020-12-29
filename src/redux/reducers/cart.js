const initialState = {
  addedPizzas: {},
  totalPrice: 0,
  totalCount: 0,
};
function calculateTotalSum(pizzas) {
  let totalPrice = 0;
  for (const key in pizzas) {
    totalPrice += pizzas[key].price * pizzas[key].count;
  }
  return totalPrice;
}
function calculateTotalCount(pizzas) {
  let totalCount = 0;
  for (const key in pizzas) {
    totalCount += pizzas[key].count;
  }
  return totalCount;
}
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PIZZA_TO_CART":
      const { id } = action.payload;
      if (!state.addedPizzas[id]) {
        let count = { count: 1 };
        return {
          ...state,
          addedPizzas: {
            ...state.addedPizzas,
            [id]: Object.assign(action.payload, count),
          },
        };
      } else {
        return {
          ...state,
          addedPizzas: {
            ...state.addedPizzas,
            [id]: {
              ...state.addedPizzas[id],
              count: state.addedPizzas[id].count + 1,
            },
          },
        };
      }
    case "TOTAL_CALCULATE":
      return {
        ...state,
        totalPrice: calculateTotalSum(state.addedPizzas),
        totalCount: calculateTotalCount(state.addedPizzas),
      };
    case "DELETE_CURR_PIZZA":
      delete state.addedPizzas[action.payload];
      return {
        ...state,
        addedPizzas: {
          ...state.addedPizzas,
        },
      };
    case "PLUS_PIZZA_IN_CART":
      const plusId = action.payload;
      return {
        ...state,
        addedPizzas: {
          ...state.addedPizzas,
          [plusId]: {
            ...state.addedPizzas[plusId],
            count: state.addedPizzas[plusId].count + 1,
          },
        },
      };
    case "MINUS_PIZZA_IN_CART":
      const minusId = action.payload;
      return {
        ...state,
        addedPizzas: {
          ...state.addedPizzas,
          [minusId]: {
            ...state.addedPizzas[minusId],
            count: state.addedPizzas[minusId].count - 1,
          },
        },
      };
    case "CLEAR_CART":
      return {
        ...state,
        addedPizzas: {},
      };
    default:
      return state;
  }
}
