import React, { Component } from 'react'
import { connect } from 'react-redux'

import { showCart } from '../../redux/actions/cart'

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <style jsx>{`

                    nav {
                        height: auto;
                    }

                    nav .nav-item {
                        margin: auto 15px;
                    }
                    nav .nav-item:last-child {
                        margin-right: 0;
                    }

                    #logo {
                        font-family: 'Playfair Display', serif;
                        font-size: 2.5rem;
                        line-height: 2rem;
                    }
                    #logo span {
                        font-weight: 500;
                    }

                    .nav-item {
                        cursor: pointer;
                    }

                `}</style>

                <nav className="fr">
                    <div id="logo" className="fg">
                        <span>Amari</span> store
                    </div>
                    <div className="fr ma">
                        <div className="nav-item" onClick={ () => { this.props.cart() } }>Cart</div>
                        <div className="nav-item">Login</div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    cart: () => dispatch(showCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
