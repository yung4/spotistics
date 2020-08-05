import React, { Component } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

import About from './About';

//import LoginImage from '../assets/From Up On Poppy Hill (17).png'

var link = ('https://accounts.spotify.com/authorize?' + 
            'client_id=' + process.env.REACT_APP_CLIENT_ID + 
            '&redirect_uri=' + process.env.REACT_APP_REDIRECT_URI + 
			'&scope=' + process.env.REACT_APP_SCOPES +
            '&response_type=' + process.env.REACT_APP_RESPONSE_TYPE +
            '&show_dialog=true' 
            );
			
			//TODO: figure out how to use state for added security

var loginStyle = {
	textAlign: 'center',
	//backgroundImage: `url(${LoginImage})`
}

class Login extends Component {
	render() {
		return (
			<div style={loginStyle}>
				<h1 style={{ fontSize: 50 }}>Spotistics</h1>
				
				<Accordion>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="0">
								About
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body><About/></Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
				
				<Button size='lg' href={link}>
					Login to Spotify
				</Button>
			</div>
		);
	}
}

export default Login;