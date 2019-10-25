import React, { useEffect } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import Shop from './page/shop/shop.component';
import Header from './components/header/header.component';
import { SignInAndSignUp } from './page/sign-in-sign-up/sign-in-sign-up.component';
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import Checkout from './page/checkout/checkout.component';
const App = ({ checkUserSession, currentUser }) => {

	useEffect(() => {
		checkUserSession();
	}, [])


	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={Shop} />
				<Route exact path="/sign-in"
					render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp />)} />
				<Route path="/check-out" component={Checkout} />
			</Switch>

		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
