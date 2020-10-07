import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Modal } from 'antd';
import Counter from './Counter';

export class ProductView extends Component {

    state = {
        count: 0
    }

    updateCount = (count) => {
        this.setState({
            count: count
        })
    }

    render() {

        const product = this.props.products.find(p => p.id === this.props.selectedProduct)

        return (
            <React.Fragment>

                <style jsx>{`

                    .product {
                        font-family: 'Source Sans Pro', sans-serif;
                        padding: 50px;
                    }

                    .product img {
                        width: 100%;
                    }

                    .product .description {
                        width: 100%;
                        margin-left: 60px;
                    }

                    .product h4 {
                        font-size: 24px;
                        line-height: 1.5;
                    }

                    .product span {
                        font-size: 24px;
                        font-weight: 600;
                        line-height: 1.388888;
                        color: #333;
                    }

                    .product p {
                        font-size: 14px;
                        line-height: 1.7;
                        color: #666;
                        margin-top: 20px;
                    }

                `}</style>

                { product && <Modal
                    visible={this.props.selectedProduct}
                    closable={true}
                    width={1000}
                    footer={null}
                >
                    
                    <div className="product fr">
                        <div className="image">
                            <img src={product.image} alt="product preview"/>
                        </div>
                        <div className="description">
                            <h4>{product.name}</h4>
                            <span>${product.price}</span>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
                            <Counter value={ this.state.count } onChange={ this.updateCount } />
                        </div>
                    </div>

                </Modal> }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedProduct: state.common?.product,
    products: state.products
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductView)
