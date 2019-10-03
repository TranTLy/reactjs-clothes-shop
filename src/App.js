import React, { Component } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import Shop from './page/shop/shop.component';
import Header from './components/header/header.component';
import { SignInAndSignUp } from './page/sign-in-sign-up/sign-in-sign-up.component';

class App extends Component {

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={Shop} />
					<Route path="/sign-in" component={SignInAndSignUp} />
				</Switch>

			</div>
		);
	}
}

export default App;
