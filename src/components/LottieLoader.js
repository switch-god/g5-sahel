/* eslint-disable import/first */
import React, { Component } from 'react'

import Layout from './Layout';


// ANIMATIONS :
// import Loader from '../loading/Loader';
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
        const { devText } = this.props;
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
                            <h1 style={{fontFamily : 'Poppins SemiBold'}}>Cette Page en cours de développement, Merci pour votre compréhension</h1>
                        </div> 
                }
                <div style={{height: '600px'}}></div>
            </Layout>
        )
    }
}
