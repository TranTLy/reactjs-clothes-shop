import React from 'react';
// import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { HeaderContainer, LogoLink, OptionContainer, OptionLink } from './header.style';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ user, hidden, signOutStart }) => (
    <HeaderContainer >
        <LogoLink className="logo-container" to="/">
            <Logo className="logo" />
        </LogoLink>
        <OptionContainer className="options">
            <OptionLink className="option" to="/shop">Shop</OptionLink>
            <OptionLink className="option" to="/contact">Contact</OptionLink>
            {
                user ? <> Hi, {user.displayName} | <OptionLink as='div' className="option sign-out" onClick={signOutStart}>Sign Out</OptionLink> </> :
                    <OptionLink className="option" to="/sign-in">Sign In</OptionLink>
            }
            <CartIcon />
        </OptionContainer>
        {
            hidden ? "" : <CartDropdown />
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);