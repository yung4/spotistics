import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import NavBar from '../Navigation/NavBar';

import { getUser } from '../../api/apiRequest';

class Home extends Component {
	constructor() {
		super();
		
		this.state = {
			contentType: 'artists', 
			user: {}
		};
	}
	
	componentDidMount() {
		this.fetchData();
	}
	
	componentDidUpdate(prevProps, prevState) {
		if (prevState.contentType !== this.state.contentType) {
			this.fetchData();
		}
	}

	fetchData = async () => {
		var user = await getUser(this.props.hashFragment.accessToken);
		this.setState({user: user});
	}
	
	errorFunc = (error) => {
		console.log(error);
		window.location.replace(process.env.REACT_APP_REDIRECT_URI);
	}
	
	setView = (viewType) => {
		this.setState({ contentType: viewType });
		//console.log(this.state.contentType);
	}
	
	render() {
		return (
			<div>
				< Header user={this.state.user} errorFunc={this.errorFunc}
				/>
				
				<Container>
					< NavBar setView={this.setView}/>
				
					< Body 
						hashFragment={this.props.hashFragment} 
						contentType={this.state.contentType} 
						errorFunc={this.errorFunc}
					/>
				</Container>
				
				< Footer />
			</div>
		)
	}
}

export default Home;