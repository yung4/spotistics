import React, { Component } from 'react';
import TopTrackItem from './TopTrackItem';

import PropTypes from 'prop-types';

class TopTracks extends Component {
	render() {
		return this.props.topTracks.map((track) => (
			< TopTrackItem key={track.id} track={track} />
		));
		
	}
}

// PropTypes
TopTracks.propTypes = {
	topTracks: PropTypes.array.isRequired
}

export default TopTracks;