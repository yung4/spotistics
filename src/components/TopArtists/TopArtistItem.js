import React, { Component } from 'react';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

import '../../style/content.css';

class TopArtistItem extends Component {
	render() {
		const imgSize = 64;
		
		return (
			<ListGroup.Item action target='_blank' href={this.props.artist.href}>
				<Row>
					<Image 
						src={this.props.artist.images[2].url} 
						height={imgSize} 
						width={imgSize}
						roundedCircle 
					/>
					
					<Col className='my-auto'>
						<h3> {this.props.artist.title} </h3>
						<p style={{margin: 0}}> {this.props.artist.genres} </p>
					</Col>
				</Row>
			</ListGroup.Item>
		)
	}
}

// PropTypes
TopArtistItem.propTypes = {
	artist: PropTypes.object.isRequired
}

export default TopArtistItem;