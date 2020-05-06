/* eslint-disable import/first */
import React, { Component } from 'react'

import Layout from './Layout';

import { Link } from 'react-router-dom';

// ANIMATIONS :
import Lottie from 'react-lottie';
import Loaderr from '../assets/JSON/loader.json';
const loaderOptions = {
    loop: true,
    autoplay: true, 
    animationData: Loaderr,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

import LOGO from '../assets/images/Header/LOGOOO.png';

export default class LottieLoader extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const { devText,text,HomeButton } = this.props;
        return (
            <Layout style={{textAlign : 'center'}}>
                <Lottie 
                    options={loaderOptions}
                    height={200}
                    width={400}
                    isStopped={false}
                    isPaused={false}
                />
                {
                    devText === true && 
                        <div style={{textAlign : 'center',marginTop : 40+"px", marginBottom : 40+"px"}}>
                            <img src={LOGO} height={'200px'} style={{marginBottom: '30px'}} />
                            <h1 style={{fontFamily : 'Poppins SemiBold'}}>
                                {text ? text : "Cette Page en cours de développement, Merci pour votre compréhension"}
                            </h1>
                            { 
                                HomeButton && 
                                <div style={{marginTop:'50px'}}> 
                                    <Link className="buttonContactForm" style={{textDecoration: 'none',paddingRight : '40px', paddingLeft: '40px',fontSize: '20px'}} to="/">Page d'accueil</Link>
                                
                                </div>
                            }
                        </div> 
                }
                <div style={{height: '600px'}}></div>
            </Layout>
        )
    }
}
