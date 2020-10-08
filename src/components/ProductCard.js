import React, { Component } from 'react'
import { connect } from 'react-redux'

import { showProduct } from '../redux/actions/common'

import './ProductCard.css'

export class ProductCard extends Component {
    render() {
        return (
            <div className="card" onClick={() => { this.props.showProduct(this.props.id) }}>

                    <div className="img-wrapper">
                        <img src={this.props.image} alt="cart item"></img>
                    </div>

                    <div className="description">
                        <div className="name">{this.props.name}</div>
                        <div className="price">${this.props.price}</div>
                    </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    showProduct: (id) => dispatch(showProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
