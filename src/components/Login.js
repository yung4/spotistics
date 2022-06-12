import React, { Component } from 'react';
import { Accordion, Button, Card, Container, Row, Col } from 'react-bootstrap';

//import LoginIcon from '@mui/icons-material/Login';

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
	//textAlign: 'center',
	//backgroundImage: `url(${LoginImage})`
}

var buttonStyle = {
	color: "lavender",
	fontWeight: "bold",
	padding: "15px 25px",
	borderRadius: "40px"
}

var upperContainerStyle = {
	display: "flex",
  	justifyContent: "center",
  	alignItems: "center",
	height: "100%",
	//width: "75%"
}

var upperRowStyle = {
	display: "flex",
  	justifyContent: "center",
  	alignItems: "center",
	//height: "100%",
	width: "100%"
}

var lowerContainerStyle = {
	padding: "25px 50px",
	//display: "flex",
  	justifyContent: "center",
	textAlign: "center",
  	//alignItems: "center",
}

var centeredContainerStyle = {
	padding: "50px",
	textAlign: "center",
	height: "100%"
}

var leftAlignRow = {
	textAlign: "left",
}

var titleStyle = {
	fontSize: "6em"
}

var paragraphStyle = {
	fontSize: "1.5em"
}

/*
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
			*/

class Login extends Component {
	render() {
		return (
			<div style={loginStyle}>
				<Container fluid style={{height: "75vh", backgroundColor: "lavender"}}>
					<Container style={upperContainerStyle}>
						<Row style={upperRowStyle}>
							<Col md="6">
								<Row>
									<h1 style={titleStyle}>Spotistics</h1>
								</Row>

								<p></p>

								<Row>
									<p style={paragraphStyle}>spotify + statistics.</p>
								</Row>
							</Col>

							<Col md="6" style={centeredContainerStyle}>
								<Button size='lg' href={link} style={buttonStyle}>
									<h2>Login to Spotify</h2>
								</Button>
							</Col>
						</Row>
					</Container>
				</Container>

				<Container fluid style={lowerContainerStyle}>
						<Row style={leftAlignRow}>
							<Col lg={4}>
								<h2>Listening habits.</h2>
								<p>Like many other Spotify web applications, Spotistics shows you your top artists and songs from the past month to your entire Spotify career. 
									You can also see your Spotify listening history.</p>
							</Col>

							<Col lg={4}>
								<h2>Visual breakdowns.</h2>
								<p>Spotistics uses the ChartJS plugin to animate breakdowns of your playlists. 
									As of right now Spotistics groups songs by release date or added date, but more features are planned for the future!</p>
							</Col>

							<Col lg={4}>
								<h2>Completely client sided.</h2>
								<p>Spotistics just runs in your browser, ensuring that none of your information is being stored on a server.
									However, this application does need access to your Spotify account to pull the necessary data from the Spotify API.</p>
							</Col>
						</Row>
					</Container>
			</div>
		);
	}
}

export default Login;