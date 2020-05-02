import React, { Component } from 'react'


import {
    Col,
    Row,
    Jumbotron,
    Button,
    Image,
} from 'react-bootstrap';
// import THUMB_LOGO from '../assets/images/Thumbs/thumb.png';
import THUMB_LOGO from '../assets/images/Footer/Logo.png';

export default class ThumbDoc extends Component {
    
    constructor(props) {
        super(props)
    };
   
    render() {
        const { containerClass, imageClass, titleClass, descClass,title } = this.props;

        return (
            <Col xl={12} className={containerClass}>
                <Row>
                    <Image src={THUMB_LOGO} fluid className={imageClass} />
                </Row>

                <Row>
                    <h5 className={titleClass}>{title}</h5>
                </Row>

                <Row>
                    <h6 className={descClass}>Aperçu non disponible</h6>
                </Row>
            </Col>
        )
    }
}
