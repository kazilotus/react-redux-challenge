import {
    SHOW_PRODUCT,
    HIDE_PRODUCT,
} from '../types';
  
const initialState = {
    product: null,
};
  
export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_PRODUCT:
      return { ...state, product: action.payload };
    case HIDE_PRODUCT:
      return { ...state, product: null };
    default:
      return state;
  }
}