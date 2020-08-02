import React, { Component } from 'react';

import DateAdded from './DateAdded';
import ReleaseDate from './ReleaseDate';

import { getPlaylistItems } from '../../api/apiRequest';
import { parsePlaylistItems } from '../../api/parseData';

class Statistics extends Component {
	constructor() {
		super()

		this.state = {
			playlistItems: {}
		}
	}

	componentDidMount() {
		this.fetchPlaylistData();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.selectedPlaylist !== this.props.selectedPlaylist) {
			this.fetchPlaylistData();
		}
	}

	fetchPlaylistData = async () => {
		const accessToken = this.props.accessToken;

		var playlistObj = await getPlaylistItems(accessToken, this.props.selectedPlaylist.id);

		playlistObj = await this.props.checkNext(playlistObj);

		const playlistItems = parsePlaylistItems(playlistObj);

		this.setState({ playlistItems: playlistItems });

		//console.log(playlistItems);
	}

	render() {
		//console.log(this.props.selectedPlaylist);
		//console.log(this.state.playlistItems);

		if (this.props.statsMode === 'datesAdded') {
			return (
				<DateAdded playlistItems={this.state.playlistItems}/>
			)
		} else {
			return (
				<ReleaseDate playlistItems={this.state.playlistItems}/>
			)
		}
	}
}


export default Statistics;