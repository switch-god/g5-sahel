import React, { Component } from 'react'

import {
    Col,
    Row,
    Jumbotron,
    Nav,
    Button,
} from 'react-bootstrap';

import {Link} from 'react-router-dom'

import Layout from '../../components/Layout';
import Newsletter from '../../components/Newsletter';
// Styling :
    import './documentation.css';

export default class Documentation extends Component {
    render() {
        return (
            <>
               <Layout>

                   <Row>

                    <Col md={2} className="stickyNavbar">

                        <Nav className="flex-column mtNavbar">
                            <Nav.Link className="stickyNavbarLink">Organigramme</Nav.Link>
                            <Nav.Link className="stickyNavbarLink">Réglementation</Nav.Link>
                            <Nav.Link className="stickyNavbarLink">Publications</Nav.Link>
                            <Nav.Link className="stickyNavbarLink">Discours</Nav.Link>
                            <Nav.Link className="stickyNavbarLink">Correspondance</Nav.Link>
                            <Nav.Link className="stickyNavbarLink">Multimédias</Nav.Link>
                            <Nav.Link className="stickyNavbarLink">Autres documents</Nav.Link>
                        </Nav>
                        
                    </Col>
                    <Col md={1}/>
                    <Col md={6}>
                        <Jumbotron  className="box">
                            <h4 className="boxTitle">Convention portant création du G5 Sahel </h4>
                            <p className="boxDesc">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eraLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt…
                            </p>
                            <p style={{float : 'right'}}>
                                <Link to="#" className="boxButton">Download</Link>
                            </p>
                        </Jumbotron>
                        <Jumbotron  className="box">
                            <h4 className="boxTitle">Convention portant création du G5 Sahel </h4>
                            <p className="boxDesc">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eraLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt…
                            </p>
                            <p style={{float : 'right'}}>
                                <Link to="#" className="boxButton">Download</Link>
                            </p>
                        </Jumbotron>
                        <Jumbotron  className="box">
                            <h4 className="boxTitle">Convention portant création du G5 Sahel </h4>
                            <p className="boxDesc">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eraLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt…
                            </p>
                            <p style={{float : 'right'}}>
                                <Link to="#" className="boxButton">Download</Link>
                            </p>
                        </Jumbotron>
                        <Jumbotron  className="box">
                            <h4 className="boxTitle">Convention portant création du G5 Sahel </h4>
                            <p className="boxDesc">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eraLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt…
                            </p>
                            <p style={{float : 'right'}}>
                                <Link to="#" className="boxButton">Download</Link>
                            </p>
                        </Jumbotron>
                        
                    </Col>  

                    <Col>
                    </Col> 

                    </Row>

                    <Newsletter />
                   
                </Layout> 



            </>
        )
    }
}

const styles = {
    
}