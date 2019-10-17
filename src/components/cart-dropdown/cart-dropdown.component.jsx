import React from 'react';
import './cart-dropdown.component.jsx.scss';
import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    console.log("dispatch: ", dispatch)
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' >
                {
                    cartItems.length ?
                        (cartItems.map(item => <CartItem item={item} key={item.id} />)) :
                        <div className="cart-tempty">Your cart is empty</div>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/check-out');
                dispatch(toggleCartHidden());
            }}>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));