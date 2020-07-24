import React, { Component } from 'react';


class Header extends Component {
	constructor() {
		super();
		
		this.state = {
			userImg: '',
			userName: ''
		}
	}

	componentDidMount() {
		try {
			this.setState({ userImg: this.props.user.images[0].url });
			this.setState({ userName: this.props.user.display_name });
		} catch (e) {
			//console.log(e);
		}
	}
	
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.user !== this.props.user) {
			this.componentDidMount();
		}
	}
	
	render() {
		const imgSize = 50;
		
		return (
			<div>
				<div>
					<h1>Spotistics</h1>
				</div>
				
				<div>
					<img src={this.state.userImg}
						width={imgSize} height={imgSize}
						alt='User Profile'
					/>
					
					<p>logged in as {this.state.userName}</p>
				</div>
				
				<button onClick={this.props.artistView}>
					'Artists'
				</button>
				
				<button onClick={this.props.trackView}>
					'Tracks'
				</button>
				
				<button onClick={this.props.statsView}>
					'Statistics'
				</button>
			</div>
		)
	}
}

export default Header;