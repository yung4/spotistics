import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class Header extends Component {
	
	render() {	
		return (
			<Nav 
				fill justify variant='tabs'
				defaultActiveKey='artists'
				onSelect={(selectedView) => (this.props.setView(selectedView))}
			>
				<Nav.Item>
					<Nav.Link eventKey='artists'>
						<h2>Top Artists</h2>
					</Nav.Link>
				</Nav.Item>
				
				<Nav.Item>
					<Nav.Link eventKey='tracks'>
						<h2>Top Tracks</h2>
					</Nav.Link>
				</Nav.Item>
				
				<Nav.Item>
					<Nav.Link eventKey='stats'>
						<h2>Statistics</h2>
					</Nav.Link>
				</Nav.Item>	

				<Nav.Item>
					<Nav.Link eventKey='history'>
						<h2>History</h2>
					</Nav.Link>
				</Nav.Item>
			</Nav>
		)
	}
}

export default Header;