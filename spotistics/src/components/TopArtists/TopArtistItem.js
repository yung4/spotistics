import React, { Component } from 'react';

import PropTypes from 'prop-types';

class TopArtistItem extends Component {
	render() {
		//console.log(this.props.artist.title);
		return (
			<div>
				<img src={this.props.artist.images[1].url} 
					alt={this.props.artist.title + ' image'}
					height='150' width='150'
				/>
				<h3> {this.props.artist.title} </h3>
				<p> {this.props.artist.genres} </p>
			</div>
		)
	}
}

// PropTypes
TopArtistItem.propTypes = {
	artist: PropTypes.object.isRequired
}

export default TopArtistItem;