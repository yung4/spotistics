import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Header from './Header';
import NavBar from './NavBar';
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
				//console.log(this.state.user);
			})
			.catch(this.errorFunc);
		
		//console.log(this.state.user);
	}
	
	componentDidUpdate(prevProps, prevState) {
		if (prevState.contentType !== this.state.contentType) {
			this.componentDidMount();
		}
	}
	
	errorFunc = (error) => {
		console.log(error);
		window.location.replace(process.env.REACT_APP_REDIRECT_URI);
	}
	
	setView = (viewNum) => {
		this.setState({ contentType: viewNum });
		console.log(this.state.contentType);
	}
	
	render() {
		return (
			<div>
				< Header user={this.state.user} errorFunc={this.errorFunc}
				/>
				
				<Container>
					< NavBar setView={this.setView}/>
				
					< Body hashFragment={this.props.hashFragment} contentType={this.state.contentType} 
							errorFunc={this.errorFunc}
					/>
				</Container>
				
				< Footer />
			</div>
		)
	}
}

export default Home;