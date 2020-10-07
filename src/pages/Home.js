import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductCard from '../components/ProductCard'
// import CategoryCard from '../components/CategoryCard'
import ProductView from '../components/ProductView'

import { Row, Col } from 'antd'

export class Home extends Component {

    viewProduct = (e) => {s

    }

    render() {
        return (
            <div id="app">

                <ProductView/>
                
                <style jsx>{`

                    #app {
                        font-family: 'Source Sans Pro', sans-serif;
                        padding: 50px;
                    }

                    .landing {
                        min-height: 80px;
                        {/* height: calc(30vh - 200px); */}
                    }

                    nav {
                        height: 10px;
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
                        line-height: 1rem;
                    }
                    #logo span {
                        font-weight: 500;
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
                    <nav className="fr">
                        <div id="logo" className="fg">
                            <span>Amari</span> store
                        </div>
                        <div className="fr ma">
                            <div className="nav-item">Cart</div>
                            <div className="nav-item">Login</div>
                        </div>
                    </nav>
                    <div className="masthead">
                        
                    </div>
                </div>
                <section className="catalogue">

                    {/* <Row gutter={[40, 60]} justify="center" align="middle">
                        { api.categories.map(item => (
                            <Col flex="0 0 350px">
                                <CategoryCard {...item}></CategoryCard>
                            </Col>
                        ))}
                    </Row> */}

                    <Row gutter={[40, 60]} justify="center" align="middle">
                        { this.props.products && this.props.products.map(item => (
                            <Col flex="0 0 350px">
                                <ProductCard {...item}></ProductCard>
                            </Col>
                        ))}
                    </Row>
                    
                </section>
                <footer>

                </footer>

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
