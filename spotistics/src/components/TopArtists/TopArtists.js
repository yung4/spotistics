import React, { Component } from 'react';
import TopArtistItem from './TopArtistItem';

import PropTypes from 'prop-types';

class TopArtists extends Component {
	render() {
		return this.props.topArtists.map((artist) => (
			< TopArtistItem key={artist.id} artist={artist} />
		));
		
	}
}

// PropTypes
TopArtists.propTypes = {
	topArtists: PropTypes.array.isRequired
}

export default TopArtists;