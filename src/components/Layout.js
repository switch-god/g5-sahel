import React, { Component } from 'react'

import {
    Col,
    Row,
} from 'react-bootstrap';

export default class Layout extends Component {
    
    render() {
        let {columns,xsColumns} = this.props;
        
        return (
            <Row style={this.props.style}>
                <Col />

                <Col xs={xsColumns ? xsColumns : 0} xl={columns ? columns : 10}>
                    {this.props.children}
                </Col>
        
                <Col />
            </Row>
        )
    }
};
