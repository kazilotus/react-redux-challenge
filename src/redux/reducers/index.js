import { combineReducers } from 'redux';

import cart from './cart';
import common from './common';
import categories from './categories';
import products from './products';

const reducers = combineReducers({
  cart,
  common,
  categories,
  products
});

export default reducers;
