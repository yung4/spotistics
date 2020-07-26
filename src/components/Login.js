import React, { Component } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

import About from './About';

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
			<div style={{textAlign: 'center'}}>
				<h1>Spotistics</h1>
				
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