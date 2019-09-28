import React, { Component } from 'react';
import Counter from '../counter/counter'
import './counters.scss'


class Counters extends Component {



    render() {
        return (
            <div>
                <button className="btn btn-warning btn-2 btn-sm" onClick={this.props.onReset}>Reset</button>
                {this.props.counters.map((item, index) => (

                    < Counter key={index} onDelete={this.props.onHandleDelete} onIncrease={this.props.onIncrease} counter={item} />
                ))}
            </div>);
    }
}


export default Counters;