import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Modal, Space } from 'antd';
import Counter from './Counter';

import { hideProduct } from '../redux/actions/common'
import { updateToCart } from '../redux/actions/cart'

import './ProductView.css'

export class ProductView extends Component {

    state = {
        count: 1
    }

    updateCount = (count) => {
        this.setState({
            count: count
        })
    }

    onCancel = () => {
        this.updateCount(1)
        this.props.hideProduct()
    }

    render() {

        const product = this.props.products.find(p => p.id === this.props.selectedProduct)

        return (
            <React.Fragment>

                <Modal
                    visible={this.props.selectedProduct}
                    onCancel={this.onCancel}
                    closable={true}
                    width={1000}
                    footer={null}
                >
                    
                    <div className="product fr">
                        <div className="image">
                            <img src={product?.image} alt="product preview"/>
                        </div>
                        <div className="description">
                            <h4>{product?.name}</h4>
                            <span className="price">${product?.price}</span>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                            { this.props.user !== 1 && <Space>
                                <Counter value={ this.state.count } onChange={ this.updateCount } />
                                <Button size="large" onClick={ () => { this.props.add(product?.id, this.state.count); this.onCancel() } }>Add to Cart</Button>
                            </Space>}
                        </div>
                    </div>
                </Modal>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedProduct: state.common?.product,
    products: state.products,
    user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
    hideProduct: () => dispatch(hideProduct()),
    add: (id, quantity) => dispatch(updateToCart(id, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductView)
