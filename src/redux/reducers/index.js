import { combineReducers } from 'redux';

import auth from './auth';
import cart from './cart';
import common from './common';
import categories from './categories';
import products from './products';
import orders from './orders';

const reducers = combineReducers({
  auth,
  cart,
  common,
  categories,
  products,
  orders
});

export default reducers;
