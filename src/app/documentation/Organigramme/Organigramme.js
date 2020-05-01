/* eslint-disable import/first */
import React, { Component } from 'react'
import { Document, Page } from "react-pdf/dist/entry.webpack";

import {
    Col,
    Row,
    Jumbotron,
    Nav,
    Button,
    Image,
} from 'react-bootstrap';

import {
    Link,
} from "react-router-dom";

import ORGANIGRAMME from '../../../assets/pdf/organigramme.pdf';

export default class Organigramme extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            numPages: null, 
            pageNumber: 1,
        };
    }


    render() {
        const { pageNumber } = this.state;

        return (
            <Col xs={12} xl={10}>
                  
            <Row className="ml-5">
                <Document
                    file={ORGANIGRAMME}
                    className="organigrammePdf"
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} width={800} />
                </Document>
            </Row>
        
            </Col>
        )
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };
}
