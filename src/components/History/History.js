import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HistoryItem from './HistoryItem';

class History extends Component {
	render() {
		//console.log(this.props.history);

		return this.props.history.map((track) => (
			< HistoryItem key={track.id} track={track} />
		));
		
	}
}

// PropTypes
History.propTypes = {
	history: PropTypes.array.isRequired
}

export default History;