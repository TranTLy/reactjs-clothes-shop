import React, { Component } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import Shop from './page/shop/shop.component';
import Header from './components/header/header.component';
import { SignInAndSignUp } from './page/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserInDB, getUserRef } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setUserAction } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import Checkout from './page/checkout/checkout.component';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		}
	}
	unSubscribeFromAuth = null;
	componentDidMount() {
		const { setUser } = this.props;
		this.unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
			console.log("on auth change")
			if (user) {
				let userRef;
				if (user.displayName) {
					userRef = await createUserInDB(user);
				} else {
					userRef = await getUserRef(user.uid);
				}
				userRef.onSnapshot(snapshot => {
					setUser(user);
				})
			} else {
				setUser(user);
			}
		})
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={Shop} />
					<Route path="/sign-in" component={SignInAndSignUp} />
					<Route path="/check-out" component={Checkout} />
				</Switch>

			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	setUser: user => dispatch(setUserAction(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
