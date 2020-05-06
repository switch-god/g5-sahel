import React, { Component } from 'react'

import {Link} from 'react-router-dom';

import LottieLoader from './LottieLoader';

export default class NotFound extends Component {
    render() {
        return (
            <div>
                 <LottieLoader 
                     text={"Cette page est inaccessible"}  
                     devText
                     HomeButton     
                />

            </div>
        )
    }
}
