import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class PillNav extends Component {
	render() {
		return (
			<Nav
				className='justify-content-center'
				variant='pills'
				defaultActiveKey={this.props.timeRange}
				onSelect={(timeRange) => this.props.updateTimeRangeState(timeRange)}
			>
				<Nav.Item>
					<Nav.Link eventKey='short_term'>1 Month</Nav.Link>
				</Nav.Item>
				
				<Nav.Item>
					<Nav.Link eventKey='medium_term'>6 Months</Nav.Link>
				</Nav.Item>
				
				<Nav.Item>
					<Nav.Link eventKey='long_term'>All Time</Nav.Link>
				</Nav.Item>
			</Nav>		
		)
	}
}

export default PillNav;