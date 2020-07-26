import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<div style={{textAlign: 'left'}}>
				<p>
					Spotistics is a completely client sided React application that shows your Spotify listening habits. 
					This means that your browser does all the work and that none of your information is being stored on a server.
					This application does need access to your Spotify account to pull your Spotify data from the Spotify API.
				</p>
				
				<p>
					Even though this type of application has been done before, I always wanted to make my own version. 
					Working on Spotistics has given me good experience with JavaScript, ReactJS, and web development in general. 
				</p>
			</div>
		);
	}
}

export default About;