import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, auth: { user }, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (!user ? <Redirect to="/login" /> : <Component {...props} />)}
  />
)

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)