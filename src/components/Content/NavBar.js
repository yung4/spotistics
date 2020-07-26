import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

/*import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';*/

class Header extends Component {
	
	render() {	
		/*return (
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to='/artists'>Artists</Link>
							</li>
							
							<li>
								<Link to='/tracks'>Tracks</Link>
							</li>
							
							<li>
								<Link to='/statistics'>Stats</Link>
							</li>
						
						</ul>
					</nav>
					
					 <Switch>
						<Route path="/artists">
							{this.props.artistView}
						</Route>
						
						<Route path="/tracks">
							{this.props.trackView}
						</Route>
						
						<Route path="/stats">
							{this.props.statsView}	
						</Route>
					</Switch>
				</div>
			</Router>
		)*/
		
		return (
			<Nav 
				fill justify variant='tabs'
				defaultActiveKey={0}
				onSelect={(selectedView) => (this.props.setView(selectedView))}
			>
				<Nav.Item>
					<Nav.Link eventKey={0}>
						<h2> Top Artists </h2>
					</Nav.Link>
				</Nav.Item>
				
				<Nav.Item>
					<Nav.Link eventKey={1}>
						<h2> Top Tracks </h2>
					</Nav.Link>
				</Nav.Item>
				
				<Nav.Item>
					<Nav.Link eventKey={2} disabled>
						<h2>Statistics</h2>
					</Nav.Link>
				</Nav.Item>	
			</Nav>
		)
	}
}

export default Header;