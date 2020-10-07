import {
} from '../types';
  
const initialState = {
};
  
export default function(state = initialState, action) {
  switch (action.type) {
    // case SET_USER:
      // return { ...state, user: action.payload, authenticated: true };
      default:
      return state;
  }
}