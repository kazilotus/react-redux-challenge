import React from 'react';
import Navbar from './components/partials/Navbar'

import Home from './pages/Home';

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

      <CartView/>
      <ProductView/>

      <Navbar/>
      <Home/>
      {/* <Cart/> */}
    </div>
  );
}

export default App;
