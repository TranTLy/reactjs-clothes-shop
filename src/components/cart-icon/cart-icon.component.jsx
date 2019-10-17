import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.style.scss';
import { selectCartItemsQuantity } from '../../redux/cart/cart.selector';

const CartIcon = ({ toggleCartHidden, cartItemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartItemCount}</span>
        </div>
    );
}

// const mapStateToProps = ({ cart: { cartItems } }) => {
//     return ({
//         cartItemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
//     })
// }

const mapStateToProps = (state) => ({
    cartItemCount: selectCartItemsQuantity(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);