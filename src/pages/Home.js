import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProductCard from '../components/ProductCard'
// import CategoryCard from '../components/CategoryCard'

import CartView from '../components/CartView';
import ProductView from '../components/ProductView';

import { Row, Col } from 'antd'

export class Home extends Component {

    render() {
        return (
            <div>

                <CartView/>
                <ProductView/>
                
                <style jsx>{`
                    .landing {
                        min-height: 80px;
                    }

                    .masthead {
                        background: url("");
                    }

                    section {
                        max-width: 1600px;
                        margin: auto;
                    }

                `}</style>

                <div className="landing">
                    <div className="masthead">
                        
                    </div>
                </div>
                <section className="catalogue">

                    <Row gutter={[40, 60]} justify="center" align="middle">
                        { this.props.products && this.props.products.map(item => (
                            <Col flex="0 0 350px">
                                <ProductCard {...item}></ProductCard>
                            </Col>
                        ))}
                    </Row>
                    
                </section>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
