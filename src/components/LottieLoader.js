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

export default class LottieLoader extends Component {
    render() {
        return (
            <Layout style={{textAlign : 'center'}}>
                <Lottie 
                    options={loaderOptions}
                    height={200}
                    width={400}
                    isStopped={false}
                    isPaused={false}
                />
                {/* <Loader style={{height: '150px'}} /> */}
                <div style={{height: '600px'}}></div>
            </Layout>
        )
    }
}
