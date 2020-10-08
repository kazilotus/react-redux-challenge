import {
  SET_USER,
} from '../types';

import users from './users.json'

const initialState = {
  users: users,
  user: null,
};
  
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}