import React from 'react';
import './checkout-item.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, increaseItem, decreaseItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, clearItemFromCart, increaseItem, decreaseItem }) => {
    const { imageUrl, name, price, quantity, id } = item;
    console.log("id item: " + id);
    return (
        <div className="checkout-item">
            <div className='checkout-item'>
                <div className='image-container'>
                    <img src={imageUrl} alt='item' />
                </div>
                <span className='name'>{name}</span>
                <span className='quantity'>
                    <span className="arrow" onClick={() => decreaseItem(item)}>&#10094;</span>
                    {quantity}
                    <span className="arrow" onClick={() => increaseItem(item)}>&#10095;</span>
                </span>
                <span className='price'>{price}</span>
                <div className='remove-button' onClick={() => clearItemFromCart(item)}>&#10005;</div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
    increaseItem: (item) => dispatch(increaseItem(item)),
    decreaseItem: (item) => dispatch(decreaseItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);