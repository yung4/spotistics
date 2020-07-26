import React, { Component } from 'react';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

class TopTrackItem extends Component {
	openLink = () => {
		console.log(this.props.track);
	}

	render() {
		const imgSize = 64;
		
		return (
			<ListGroup.Item action target='_blank' href={this.props.track.href}>
				<Row>
					<Image 
						src={this.props.track.images[2].url} 
						height={imgSize} 
						width={imgSize}
						roundedCircle 
					/>
					
					<Col>
						<h3> {this.props.track.title} </h3>
						<p> {this.props.track.artistName} </p>
					</Col>
				</Row>
			</ListGroup.Item>
		)
	}
}

// PropTypes
TopTrackItem.propTypes = {
	track: PropTypes.object.isRequired
}

export default TopTrackItem;