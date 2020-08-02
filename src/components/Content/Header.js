import React, { Component, useState  } from 'react';
import { Container, Row, Col, Modal, Button, Image } from 'react-bootstrap';

import '../../style/header.css';

class Header extends Component {
	constructor() {
		super();
		
		this.state = {
			userImg: '',
			userName: ''
		}
	}

	componentDidMount() {
		this.setUserInfo();
	}
	
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.user !== this.props.user) {
			this.setUserInfo();
		}
	}

	setUserInfo = () => {
		try {
			this.setState({ userImg: this.props.user.images[0].url });
			this.setState({ userName: this.props.user.display_name });
		} catch (e) {
			//console.log(e);
		}
	}

	logout = () => {
		const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);
		
		const imgSize = 50;
		
		//console.log(this.state.userName);
	
		return (
			<>
				<Button variant="link" onClick={handleShow}>
					{this.state.userName}
					
					<Image className='userImg'
							src={this.state.userImg}
							width={imgSize} height={imgSize}
							roundedCircle 
					/>
				</Button>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Not you?</Modal.Title>
					</Modal.Header>
				<Modal.Body>Click this to logout!</Modal.Body>
				
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					
					<Button variant="primary" onClick={this.props.errorFunc}>
						Logout
					</Button>
				</Modal.Footer>
			  </Modal>
			</>
		);
	}
	
	render() {	
		return (
			<Container fluid className='header'>
				<Container>
					<Row>
						<Col className='my-auto'>				
							<h1>Spotistics</h1>
						</Col>
						
					
						<Col className='logout'>
							<this.logout/>
						</Col>
					</Row>
				</Container>
			</Container>
		)
	}
}

export default Header;