import React, { Component } from 'react'

import {
    Col,
    Row,
} from 'react-bootstrap';

export default class Layout extends Component {
    
    constructor(props) {
        super(props);
    };

    render() {
        let {columns} = this.props
        return (
            <Row style={this.props.style}>
                <Col />

                <Col md={columns ? columns : 10}>
                    {this.props.children}
                </Col>
        
                <Col />
            </Row>
        )
    }
};
