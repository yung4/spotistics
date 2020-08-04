import React, { Component } from 'react';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

import '../../style/content.css';

class TopArtistItem extends Component {
	render() {
		const imgSize = 50;
		
		return (
			<ListGroup.Item action href={this.props.artist.href} style = {{padding: 5}}>
				<Row >
					<Col xs={1} className='my-auto' style={{textAlign: 'right'}}>
						<h3>{this.props.artist.id}</h3>
					</Col>
					
					<Image 
						src={this.props.artist.image} 
						height={imgSize} 
						width={imgSize}
						roundedCircle 
					/>
					
					<Col className='my-auto'>
						<h3 style={{fontSize:20}}> {this.props.artist.title} </h3>
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