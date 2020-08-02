import React, { Component } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

import StatsNavDropdown from './StatsNavDropdown';

class StatsNav extends Component {
	

	render() {

		return (
			<Nav
				className='justify-content-center'
				variant='pills'			
			>
				<Nav
					variant='pills'
					defaultActiveKey={this.props.statsMode}
					onSelect={(selectedMode) => this.props.chooseMode(selectedMode)}
				>			
					<Nav.Item>
						<Nav.Link eventKey='datesAdded'>Dates Added</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link eventKey='releaseDate'>Release Year</Nav.Link>
					</Nav.Item>

				</Nav>
				
				
				<NavDropdown 
					title={this.props.selectedPlaylist.title || 'Playlist Not Found'}
					defaultactivekey={this.props.selectedPlaylist}
					onSelect={(selectedPlaylist) => this.props.choosePlaylist(selectedPlaylist)}
				>
					{this.props.playlistList.map((playlist) => (
						<StatsNavDropdown key={playlist.id} playlist={playlist}/>
					))}
				</NavDropdown>
			</Nav>		
		)
	}
}

export default StatsNav;