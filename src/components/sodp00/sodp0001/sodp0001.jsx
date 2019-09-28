import React, { Component } from 'react';
import { CartItem } from '../../monster/cart-item/cart-item.component'

class SODP0001 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => {
            console.log(res.json());
        })
    }
    render() {
        return (
            <div>
                <div>
                </div>
                <CartItem>
                    <div>Hello childrent</div>
                </CartItem>
            </div>
        );
    }
}

export default SODP0001;