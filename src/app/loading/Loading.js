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
                {/* <h1 style={{fontFamily : 'Poppins Bold',marginTop : '30px',marginBottom : '30px'}}>G5 sahel vous souhaite une bonne visite</h1> */}
                <Image 
                    className="logoToRotate"
                    src={LOGO}
                    alt="logo-g5-sahel"
                />
            </div>
        )
    }
}
