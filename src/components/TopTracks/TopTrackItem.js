import React, { Component } from 'react';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

class TopTrackItem extends Component {
	openLink = () => {
		console.log(this.props.track);
	}

	render() {
		const imgSize = 50;
		
		return (
			<ListGroup.Item action target='_blank' href={this.props.track.href} style = {{padding: 5}}>
				<Row >
					<Col xs={1} className='my-auto' style={{textAlign: 'right'}}>
						<h3>{this.props.track.id}</h3>
					</Col>
					
					<Image 
						src={this.props.track.images[2].url} 
						height={imgSize} 
						width={imgSize}
						roundedCircle
					/>
					
					<Col className='my-auto'>
						<h3 style={{fontSize:20}}> {this.props.track.title} </h3>
						<p style={{margin: 0, fontSize:16}}> 
							{this.props.track.artistName} - {this.props.track.albumTitle}
						</p>
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