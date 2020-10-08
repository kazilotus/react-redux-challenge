import { createStore, applyMiddleware, compose } from 'redux'
import { save, load } from "redux-localstorage-simple"
import thunk from 'redux-thunk'

import reducers from './reducers'

const initialState = load()

const middleware = [save(), thunk]

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(...middleware))
const store = createStore(reducers, initialState, enhancer)

export default store
