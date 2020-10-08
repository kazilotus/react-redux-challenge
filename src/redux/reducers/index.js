import { combineReducers } from 'redux';

import cart from './cart';
import common from './common';
import categories from './categories';
import products from './products';
import users from './users';

const reducers = combineReducers({
  cart,
  common,
  categories,
  products,
  users
});

export default reducers;
