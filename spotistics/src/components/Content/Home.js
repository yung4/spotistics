import React, { Component } from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import { getUser } from '../../api/apiRequest';

class Home extends Component {
	constructor() {
		super();
		
		this.state = {
			//if content type is 0, show top artists
			//if content type is 1, show top tracks
			//if content type is 2, show stats
			contentType: 0, 
			user: {}
		};
	}
	
	componentDidMount() {
		getUser(this.props.hashFragment.accessToken)
			.then((response) => {
				(this.setState({ user: response }));
				console.log(this.state.user);
			})
			.catch(this.errorFunc);
		
		//console.log(this.state.user);
	}
	
	errorFunc = (error) => {
		console.log(error);
		window.location.replace(process.env.REACT_APP_REDIRECT_URI);
	}
	
	artistView = () => {
		this.setState({ contentType: 0 });
		console.log('showing artists');
	}
	
	trackView = () => {
		this.setState({ contentType: 1 });
		console.log('showing tracks');
	}
	
	statsView = () => {
		this.setState({ contentType: 2 });
		console.log('showing stats');
	}
	
	
	render() {
		return (
			<div>
				< Header artistView={this.artistView} trackView={this.trackView} 
						statsView={this.statsView} user={this.state.user}
				/>
				
				< Body hashFragment={this.props.hashFragment} contentType={this.state.contentType} 
						errorFunc={this.errorFunc}
				/>
				
				< Footer />
			</div>
		)
	}
}

export default Home;