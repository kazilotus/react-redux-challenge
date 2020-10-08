import React, { Component } from 'react'

import './Counter.css'

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

                <div className={ `negative ${this.state.count === 0 && 'disabled'}` } onClick={ this.decrease }> - </div>
                <div className="count"> {this.state.count} </div>
                <div className="positive" onClick={ this.increase }> + </div>

            </div>
        )
    }
}