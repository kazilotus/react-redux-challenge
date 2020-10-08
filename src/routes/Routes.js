import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Admin from '../pages/Admin'
import FourOFour from '../pages/FourOFour'

import PrivateRoute from './PrivateRoute'

export class Routes extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />

          <PrivateRoute exact path="/admin" component={Admin} />

          <Route component={FourOFour} />
        </Switch>
      </>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
