import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

import Statistics from '../Statistics/Statistics';
import TopArtists from '../TopArtists/TopArtists';
import TopTracks from '../TopTracks/TopTracks';
import History from '../History/History';

import PillNav from '../Navigation/PillNav';
import StatsNav from '../Navigation/StatsNav';

import { getTopArtists, getTopTracks, getRecentlyPlayed, getPlaylistList, getNext } from '../../api/apiRequest';
import { parsePlaylistList } from '../../api/parseData';

class Body extends Component {
	constructor() {
		super();
		
		this.state = {		
			topArtists: [],
			topTracks: [],
			playlistList: [],
			history: [],

			timeRange: 'short_term',

			selectedPlaylist: {},
			
			statsMode: 'datesAdded',
		};
	}
	
	componentDidMount() {
		try {
			this.fetchTop();
			this.fetchPlaylists();
			this.fetchHistory();
		} catch (e) {
			console.log(e);
			this.props.errorFunc();
		}
	}
	
	componentDidUpdate(prevProps, prevState) {
		if ((prevState.timeRange !== this.state.timeRange)) {
			this.fetchTop();
		}
	}

	// fetch data
	fetchTop = async () => {
		const accessToken = this.props.hashFragment.accessToken;

		var topArtists = getTopArtists(accessToken, this.state.timeRange);
		var topTracks = getTopTracks(accessToken, this.state.timeRange)

		this.setState({ topArtists: await topArtists });
		this.setState({ topTracks: await topTracks });
	}

	fetchPlaylists = async () => {
		const accessToken = this.props.hashFragment.accessToken;

		var playlistListObj = await getPlaylistList(accessToken);

		playlistListObj = await this.checkNext(playlistListObj);

		const playlistList = parsePlaylistList(playlistListObj);

		this.updatePlaylistList(playlistList);
	}

	fetchHistory = async () => {
		const accessToken = this.props.hashFragment.accessToken;

		var history = await getRecentlyPlayed(accessToken);

		this.setState({ history: history });

		//console.log(this.state.history);
	}

	//helper function for checking if there are more requests to be made
	checkNext = async (object) => {
		const accessToken = this.props.hashFragment.accessToken;

		//console.log(object);

		if (object.next !== null) {
			var nextObject = await getNext(accessToken, object.next);

			nextObject = await this.checkNext(nextObject);

			object.items = object.items.concat(nextObject.items);
		} 
		
		//console.log(object);
		return object;
	}

	// set state helper functions
	updatePlaylistList = (playlistList) => {
		this.setState({ playlistList: playlistList })
		this.setState({ selectedPlaylist: playlistList[0] })
	}
	
	updateTimeRangeState = (timeRange) => {
		this.setState({ timeRange: timeRange });
	}

	updateStatsModeState = (mode) => {
		this.setState({ statsMode: mode });
	}

	updateSelectedPlaylist = (playlistID) => {
		for (var i = 0; i < this.state.playlistList.length; i++) {
			var playlist = this.state.playlistList[i];

			if (playlistID === playlist.id) {
				this.setState({ selectedPlaylist: playlist });
				break;
			}
		}
	}
	
	render() {
		
		if (this.props.contentType === 'artists') {
			return (
				<ListGroup variant='flush'>
					<ListGroup.Item>
						< PillNav 
							timeRange={this.state.timeRange} 
							updateTimeRangeState={this.updateTimeRangeState} 
						/>		
					</ListGroup.Item>
					
					< TopArtists topArtists={this.state.topArtists} />
				</ListGroup>
			)
		} else if (this.props.contentType === 'tracks') {
			return (
				<ListGroup variant='flush'>
					<ListGroup.Item>
						< PillNav 
							timeRange={this.state.timeRange} 
							updateTimeRangeState={this.updateTimeRangeState} 
						/>		
					</ListGroup.Item>					
					
					< TopTracks topTracks={this.state.topTracks} />
				</ListGroup>
			)
		} else if (this.props.contentType === 'stats') {
			return (
				<ListGroup variant='flush'>
					<ListGroup.Item>
						<StatsNav 
							statsMode={this.state.statsMode}
							selectedPlaylist={this.state.selectedPlaylist}
							playlistList={this.state.playlistList}
							choosePlaylist={this.updateSelectedPlaylist}
							chooseMode={this.updateStatsModeState}
						/>
					</ListGroup.Item>

					<Statistics 
						statsMode={this.state.statsMode}
						selectedPlaylist={this.state.selectedPlaylist}
						checkNext={this.checkNext}
						accessToken={this.props.hashFragment.accessToken}
					/>
				</ListGroup>
			)
		} else {
			return (
				<ListGroup variant='flush'>
					<History history={this.state.history}/>
				</ListGroup>
			)
		}
	}
}

export default Body;