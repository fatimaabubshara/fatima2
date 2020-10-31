import { GET_PRODUCTS, REMOVE_CONTACT } from "../actions/productsAction";
import { getProducts } from "../selectors/productsSelector";

const initState = {
  data: [],
};

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      debugger;
      return {
        ...state,
        data: action.payload,
      };
    case REMOVE_CONTACT:
      return {
        ...state.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default productsReducer;
