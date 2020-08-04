import React, { Component } from 'react';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

class HistoryItem extends Component {
	render() {
		const imgSize = 50;
		
		return (
			<ListGroup.Item action href={this.props.track.href} style = {{padding: 5}}>
				<Row style={{paddingLeft: 15, paddingRight: 15}}>
					<Image 
						src={this.props.track.image} 
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

                    <Col className='my-auto' style={{textAlign: 'right'}}>
                        <p style={{margin: 0, fontSize:16}}>
                            {this.props.track.playedAt}
                        </p>
                    </Col>
				</Row>
			</ListGroup.Item>
		)
	}
}

// PropTypes
HistoryItem.propTypes = {
	track: PropTypes.object.isRequired
}

export default HistoryItem;