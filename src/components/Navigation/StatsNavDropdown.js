import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';

class StatsNavDropdown extends Component {
    render() {
        //console.log(this.props.playlist);

        return (
            <NavDropdown.Item eventKey={this.props.playlist.id}>
                {this.props.playlist.title}
            </NavDropdown.Item>
        )
    }
}

export default StatsNavDropdown;