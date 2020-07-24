import React, { Component } from 'react';

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
			
			artistTimeRange: 'short_term',
			trackTimeRange: 'short_term'
		};
	}
	
	componentDidMount() {
		const accessToken = this.props.hashFragment.accessToken;
		
		getTopArtists(accessToken, this.state.artistTimeRange)
			.then((response) => (this.setState({ topArtists: response })))
			.catch(this.props.errorFunc);
			
		getTopTracks(accessToken, this.state.trackTimeRange)
			.then((response) => (this.setState({ topTracks: response })))
			.catch(this.props.errorFunc);
	}
	
	componentDidUpdate(prevProps, prevState) {
		if ((prevState.artistTimeRange !== this.state.artistTimeRange) ||
			(prevState.trackTimeRange !== this.state.trackTimeRange)) {
			console.log(this.state.artistTimeRange);
			this.componentDidMount();
		}
	}
	
	updateArtistTimeRangeState = (timeRange) => {
		this.setState({ artistTimeRange: timeRange });
	}
	
	updateTrackTimeRangeState = (timeRange) => {
		this.setState({ trackTimeRange: timeRange });
	}
	
	render() {
		
		if (this.props.contentType === 0) {
			return (
				<div>
					<h1>Top Artists</h1>
					
					<button onClick={() => this.updateArtistTimeRangeState('short_term')}>
						1 month
					</button>

					<button onClick={() => this.updateArtistTimeRangeState('medium_term')}>
						6 months
					
					</button>
					
					<button onClick={() => this.updateArtistTimeRangeState('long_term')}>
						All time
					</button>					
					
					< TopArtists topArtists={this.state.topArtists} />
				</div>
			)
		} else if (this.props.contentType === 1) {
			return (
				<div>
					<h1>Top Tracks</h1>
					
					<button onClick={() => this.updateTrackTimeRangeState('short_term')}>
						1 month
					</button>
					
					<button onClick={() => this.updateTrackTimeRangeState('medium_term')}>
						6 months
					</button>
					
					<button onClick={() => this.updateTrackTimeRangeState('long_term')}>
						All time
					</button>
					
					< TopTracks topTracks={this.state.topTracks} />
				</div>
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