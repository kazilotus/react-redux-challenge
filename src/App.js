import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/partials/Navbar'

import Home from './pages/Home';
import Login from './pages/Login';
import FourOFour from './pages/FourOFour';

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

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="" component={FourOFour} />
      </Switch>

    </div>
  );
}

export default App;
