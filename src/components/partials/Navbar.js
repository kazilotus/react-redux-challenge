import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { showCart } from '../../redux/actions/cart'
import { logout } from '../../redux/actions/auth'

import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="fr">
                    <div id="logo" className="fg">
                        <Link to="/"><span>Amari</span> store</Link>
                    </div>
                    <div className="fr ma">
                        <div className="nav-item" onClick={ () => this.props.cart() }>Cart</div>
                        { this.props?.user ? 
                        <React.Fragment>
                            <Link to="/admin" className="nav-item">Admin Panel</Link>
                            <div className="nav-item" onClick={ () => this.props.logout() }>Logout</div>
                        </React.Fragment>
                        : <Link to="/login" className="nav-item">Login</Link> }
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth?.user
})

const mapDispatchToProps = dispatch => ({
    cart: () => dispatch(showCart()),
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
