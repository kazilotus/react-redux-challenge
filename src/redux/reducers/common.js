import {
    SHOW_PRODUCT,
} from '../types';
  
const initialState = {
    product: null,
};
  
export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_PRODUCT:
      return { ...state, product: action.payload };
    default:
      return state;
  }
}