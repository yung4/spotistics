import React, { Component } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

import StatsNavDropdown from './StatsNavDropdown';

class StatsNav extends Component {
	constructor() {
		super();

		this.state = {
			playlistTitle: 'Playlist Not Found'
		}
	}

	componentDidMount() {
		if (this.props.selectedPlaylist) {
			this.updateTitle(this.props.selectedPlaylist.title);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if ((this.props.selectedPlaylist) &&
			(prevProps.selectedPlaylist.title !== this.props.selectedPlaylist.title)) {
			this.updateTitle(this.props.selectedPlaylist.title);
		}
	}

	updateTitle = (title) => {
		this.setState({ playlistTitle: title });
	}
	

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
					title={ this.state.playlistTitle }
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