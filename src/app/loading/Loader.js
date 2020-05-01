import React, { Component } from 'react'

import {
    Image
} from 'react-bootstrap';

import LOGO from '../../assets/images/Header/logo2.png';

import './loading.css';

export default class Loader extends Component {
    render() {
        return (
            <Image 
                className="logoToRotate"
                src={LOGO}
                style={this.props.style}
                alt="logo-g5-sahel"
            />
        )
    }
}
