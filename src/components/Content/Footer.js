import React, { Component, useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';

import About from '../About';

import '../../style/footer.css';

class Footer extends Component {
	aboutModal = () => {
		const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);
		
		//console.log(this.state.userName);
	
		return (
			<>
				<a onClick={handleShow}>about</a>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>About</Modal.Title>
					</Modal.Header>
				<Modal.Body>
					<About />
				</Modal.Body>
			  </Modal>
			</>
		);
	}
	
	render() {
		return (
			<Container fluid className='footer'>
				<Row>
					<Col>
						<p>Made by Christopher Yung</p>
					</Col>
					
					<Col>
						<a target='_blank' href='https://github.com/yung4/spotistics'>github repo</a>
					</Col>
					
					<Col>
						<this.aboutModal/>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Footer;