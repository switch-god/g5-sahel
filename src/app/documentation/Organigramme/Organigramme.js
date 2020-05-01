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

// import {
//     Link,
// } from "react-router-dom";

import LottieLoader from '../../../components/LottieLoader';
import ORGANIGRAMME from '../../../assets/pdf/organigramme.pdf';

export default class Organigramme extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            numPages: 1, 
            pageNumber: 1,
            loading : true,
        };
    }

    componentDidMount() {
        setTimeout(() => {
             this.setState({loading : false})
         },2500);
    };

    render() {
        const { pageNumber,loading } = this.state;

        return (
            loading 
            ?
            <Col xs={12} xl={10} style={{textAlign : 'center'}}>
                  <LottieLoader />
            </Col>
            :
            <Col xs={12} xl={10}>
                  
            <Row className="ml-5">
                <Document
                    file={ORGANIGRAMME}
                    className="organigrammePdf"
                    loading={null}
                    // onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} width={800} loading={null} />
                </Document>
            </Row>
        
            </Col>
        )
    }

    // onDocumentLoadSuccess = ({ numPages }) => {
    //     this.setState({ numPages });
    // };
}
