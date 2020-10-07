import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CategoryCard extends Component {
    render() {
        return (
            <div className="card">
                <style jsx>{`

                    .card {
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                    }

                    .card .img-wrapper {
                        overflow: hidden
                    }

                    .card img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        -webkit-transition: transform 0.5s ease;
                        -o-transition: transform 0.5s ease;
                        -moz-transition: transform 0.5s ease;
                        transition: transform 0.5s ease;
                        transform: scale(1);
                    }

                    .card img:hover {
                        transform: scale(1.05);
                    }

                    .card .description {
                        font-family: Poppins;
                        font-size: 14px;
                        line-height: 1.4;
                        margin-top: 3px;
                    }

                    .card .name {
                        color: #999;
                    }

                    .card .price {
                        letter-spacing: 1px;
                        color: #666;
                    }

                `}</style>

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

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCard)
