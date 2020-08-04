import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class HistoryNav extends Component {
	render() {
		return (
			<Nav
				className='justify-content-center'
				variant='pills'
				defaultActiveKey={this.props.historyMode}
				onSelect={(mode) => this.props.chooseMode(mode)}
			>
				<Nav.Item>
					<Nav.Link eventKey='tracks'>Tracks</Nav.Link>
				</Nav.Item>
				
				<Nav.Item>
					<Nav.Link eventKey='artists'>Artists</Nav.Link>
				</Nav.Item>
			</Nav>		
		)
	}
}

export default HistoryNav;