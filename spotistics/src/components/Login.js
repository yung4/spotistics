import React, { Component } from 'react';

var link = ('https://accounts.spotify.com/authorize?' + 
            'client_id=' + process.env.REACT_APP_CLIENT_ID + 
            '&redirect_uri=' + process.env.REACT_APP_REDIRECT_URI + 
			'&scope=' + process.env.REACT_APP_SCOPES +
            '&response_type=' + process.env.REACT_APP_RESPONSE_TYPE +
            '&show_dialog=true' 
            );
			
			//TODO: figure out how to use state for added security

class Login extends Component {
	render() {
		return (
			<div>
				<a className='App-link' href={link}>
					Login to Spotify
				</a>
			</div>
		);
	}
}

export default Login;