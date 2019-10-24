import React from 'react';
// import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { HeaderContainer, LogoLink, OptionContainer, OptionLink } from './header.style';

const Header = ({ user, hidden }) => (
    <HeaderContainer >
        <LogoLink className="logo-container" to="/">
            <Logo className="logo" />
        </LogoLink>
        <OptionContainer>
            <OptionLink className="option" to="/shop">Shop</OptionLink>
            <OptionLink className="option" to="/contact">Contact</OptionLink>
            {
                user ? <OptionLink as='div' className="option" onClick={() => auth.signOut()}>Hi, {user.displayName} | Sign Out</OptionLink> :
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

export default connect(mapStateToProps)(Header);