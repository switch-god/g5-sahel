import React, { Component } from 'react'

import {
    Image
} from 'react-bootstrap';

import LOGO from '../../assets/images/Header/logo2.png';

import './loading.css';



export default class Loading extends Component {
    render() {
        return (
            <div className="fullScreen">
                <Image 
                    className="logoToRotate"
                    src={LOGO}
                    alt="logo-g5-sahel"
                />
            </div>
        )
    }
}
