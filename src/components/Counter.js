import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        count: this.props?.value || 1
    }

    decrease = () => {
        const count = this.state.count > 0 ? this.state.count - 1 : 0
        this.update(count)
    }

    increase = () => {
        const count = this.state.count + 1
        this.update(count)
    }

    update = (count) => {
        this.props.onChange(count)
        this.setState({
            count: count
        })
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
        if (this.props?.value !== nextProps.value) {
            this.setState({ count: nextProps.value });
        }
    }

    render() {
        return (
            <div className="counter fr" style={{ transform: `scale(${this.props.scale || 1})` }}>
                
                <style jsx>{`

                    .counter {
                        font-family: 'Source Sans Pro', sans-serif;
                        width: 140px;
                        height: 40px;
                        font-size: 16px;
                        line-height: 1.6;
                        color: rgb(102, 102, 102);
                    }

                    .negative, .positive, .count {
                        display: flex;
                        color: rgb(85, 85, 85);
                        width: 45px;
                        height: 100%;
                        justify-content: center;
                        align-items: center;
                    }

                    .negative, .positive {
                        cursor: pointer;
                        font-size: 22px;
                        border: 1px solid #d9d9d9;
                    }

                    .negative {
                        border-top-left-radius: 2px;
                        border-bottom-left-radius: 2px;
                    }
                    .negative.disabled {
                        color: rgba(0, 0, 0, 0.25);
                        background: #f5f5f5;
                        border-color: #d9d9d9;
                        cursor: not-allowed;
                    }

                    .positive {
                        border-top-right-radius: 2px;
                        border-bottom-right-radius: 2px;
                    }

                    .negative:hover:not(.disabled), .positive:hover, .negative:focus:not(.disabled), .positive:focus {
                        color: #40a9ff;
                        background: #fff;
                        border-color: #40a9ff;
                    }

                    .count {
                        border-top: 1px solid #d9d9d9;
                        border-bottom: 1px solid #d9d9d9;
                        background-color: rgb(247, 247, 247);
                    }

                `}</style>

                <div className={ `negative ${this.state.count === 0 && 'disabled'}` } onClick={ this.decrease }> - </div>
                <div className="count"> {this.state.count} </div>
                <div className="positive" onClick={ this.increase }> + </div>

            </div>
        )
    }
}