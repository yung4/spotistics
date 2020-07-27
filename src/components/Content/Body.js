import React, { Component } from 'react';
import { Nav, ListGroup } from 'react-bootstrap';

import Statistics from '../Statistics/Statistics';
import TopArtists from '../TopArtists/TopArtists';
import TopTracks from '../TopTracks/TopTracks';

import { getTopArtists, getTopTracks } from '../../api/apiRequest';

class Body extends Component {
	constructor() {
		super();
		
		this.state = {		
			topArtists: [],
			topTracks: [],
			
			timeRange: 'short_term',
		};
	}
	
	componentDidMount() {
		const accessToken = this.props.hashFragment.accessToken;
		
		getTopArtists(accessToken, this.state.timeRange)
			.then((response) => (this.setState({ topArtists: response })))
			.catch(this.props.errorFunc);
			
		getTopTracks(accessToken, this.state.timeRange)
			.then((response) => (this.setState({ topTracks: response })))
			.catch(this.props.errorFunc);
	}
	
	componentDidUpdate(prevProps, prevState) {
		if (prevState.timeRange !== this.state.timeRange) {
			console.log(this.state.artistTimeRange);
			this.componentDidMount();
		}
	}
	
	updateTimeRangeState = (timeRange) => {
		this.setState({ timeRange: timeRange });
	}
	
	render() {
		//console.log(this.props.contentType);
		
		if (this.props.contentType == 0) {
			return (
				<ListGroup variant='flush'>
					<ListGroup.Item>
						
					</ListGroup.Item>
					
					< TopArtists topArtists={this.state.topArtists} />
				</ListGroup>
			)
		} else if (this.props.contentType == 1) {
			return (
				<ListGroup variant='flush'>
					<ListGroup.Item>
						<Nav
							className='justify-content-center'
							variant='pills'
							defaultActiveKey={this.state.timeRange}
							onSelect={(timeRange) => this.updateTimeRangeState(timeRange)}
						>
							<Nav.Item>
								<Nav.Link eventKey='short_term'>1 Month</Nav.Link>
							</Nav.Item>
							
							<Nav.Item>
								<Nav.Link eventKey='medium_term'>6 Months</Nav.Link>
							</Nav.Item>
							
							<Nav.Item>
								<Nav.Link eventKey='long_term'>All Time</Nav.Link>
							</Nav.Item>
						</Nav>	
					</ListGroup.Item>					
					
					< TopTracks topTracks={this.state.topTracks} />
				</ListGroup>
			)
		} else {
			return (
				<div>
					<h1>Statistics</h1>
					
					<Statistics/>
				</div>
			)
		}
	}
}

export default Body;