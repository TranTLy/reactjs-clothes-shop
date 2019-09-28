import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters/counters';
import NavBar from './components/navbar';
import ToolipComponent from './components/toolip.component/toolip.component';
import DetectMobile from './components/detect-mobile/detect-mobile';
import DropZone from './components/03.react-dropzone.component/03.react-dropzone.component';
import CrudApi from './components/crudApi/crudApi';
import { Switch, Route } from 'react-router-dom';
import SODP0001 from './components/sodp00/sodp0001/sodp0001';
import Monsters from './components/monster/monster.component';
class App extends Component {
	state = {
		counters: [{ id: 1, count: 1 }, { id: 2, count: 2 }, { id: 3, count: 3 }, { id: 4, count: 4 }]
	};
	onHandleDelete = (id) => {
		console.log('id delete: ' + id);
		const newCounters = this.state.counters.filter((item) => item.id !== id);
		console.log('newCounters: ' + JSON.stringify(newCounters));
		this.setState({ counters: newCounters });
	};

	onIncrease = (counter) => {
		// console.log("counter: " + JSON.stringify(counter));
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter); //** */
		counters[index] = { ...counter };
		counters[index].count++;
		this.setState({ counters });
	};

	onReset = () => {
		const counters = this.state.counters;
		counters.map((item) => {
			item.count = 0;
		});
		this.setState({ counters });
	};

	render() {
		return (
			<div>
				<div>
					<Switch>

						<Route path="/" component={Monsters} />
						<Route path="/crud" component={CrudApi} />
						<Route path="/dropzone" component={DropZone} />
						{/* <Route path="/counter" component={}/> */}
					</Switch>
				</div>
				{/* <NavBar total={this.state.counters.filter((item) => item.count > 0).length} />
				<Counters
					onHandleDelete={this.onHandleDelete}
					onReset={this.onReset}
					onIncrease={this.onIncrease}
					counters={this.state.counters}
        /> */}
				{/* <ToolipComponent />
				<DetectMobile /> */}
			</div>
		);
	}
}

export default App;
