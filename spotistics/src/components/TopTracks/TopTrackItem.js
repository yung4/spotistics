import React, { Component } from 'react';

import PropTypes from 'prop-types';

class TopTrackItem extends Component {
	render() {
		//console.log(this.props.artist.title);
		return (
			<div>
				<img src={this.props.track.images[2].url} 
					alt={this.props.track.title + ' image'}
				/>
				<h3> {this.props.track.title} </h3>
				<p> {this.props.track.artistName} </p>
			</div>
		)
	}
}

// PropTypes
TopTrackItem.propTypes = {
	track: PropTypes.object.isRequired
}

export default TopTrackItem;