import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/partials/Navbar'

import Routes from './routes/Routes'

import CartView from './components/CartView';
import ProductView from './components/ProductView';

import 'antd/dist/antd.css'

function App() {
  return (
    <div id="app" className="App">
      <style jsx>{`
        #app {
            font-family: 'Source Sans Pro', sans-serif;
            padding: 50px;
        }
      `}</style>

      <Navbar/>

      <CartView/>
      <ProductView/>

      <Switch>
        <Route component={Routes} />
      </Switch>

    </div>
  );
}

export default App;
