import React, {Component} from 'react';

import Login from './components/Login';
import Home from './components/Content/Home';

import { getAuthorization, paramObj } from './api/auth';


class App extends Component {
	constructor() {
		super();
		
		this.state = {
			loggedInStatus: false,
			hashFragment: {},
		}
	}
	
	componentDidMount() {
		this.setState({loggedInStatus: getAuthorization()});
		this.setState({hashFragment: paramObj });
	}
	
	render() {
		//console.log(this.state);

		if (!this.state.loggedInStatus) {
			return (
				<div className="App">
					< Login />
				</div>
			);
		} else {
			return (
				<div className="App">
					< Home hashFragment={this.state.hashFragment}/>
				</div>
			);
		}
	}
}

export default App;