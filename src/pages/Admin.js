import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProductCard from '../components/ProductCard'
// import CategoryCard from '../components/CategoryCard'

import { Row, Col } from 'antd'

import './Admin.css'

export class Admin extends Component {

    render() {
        return (
            <div>

                <section className="admin">

                    hello
                    
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
