import React from 'react';
import './checkout.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartTotal, selectCartItems } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item';

const Checkout = ({ cartItems, total }) => {
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="checkout-block">
                    <span>Name</span>
                </div>
                <div className="checkout-block">
                    <span>Description</span>
                </div>
                <div className="checkout-block">
                    <span>Quantity</span>
                </div>
                <div className="checkout-block">
                    <span>Price</span>
                </div>
                <div className="checkout-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => <CheckoutItem key={item.id} item={item} />)
            }
            <div className="total">${total}</div>

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);