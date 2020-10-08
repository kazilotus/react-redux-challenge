import {
  SHOW_CART,
  HIDE_CART,
  UPDATE_TO_CART,
  REMOVE_FROM_CART
} from '../types';

const initialState = {
  visible: false,
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_CART:
      return { ...state, visible: true };
    case HIDE_CART:
      return { ...state, visible: false };
    case UPDATE_TO_CART:
      return { ...state, items: [ ...state.items.filter(item => item?.id !== action.payload.id), action.payload ] };
    case REMOVE_FROM_CART:
      return { ...state, items: state.items.filter(item => item?.id !== action.payload) };
    default:
      return state;
  }
}