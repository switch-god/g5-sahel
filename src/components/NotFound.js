import React, { Component } from 'react'

import { config } from '../constants/AppConfig';

import LottieLoader from './LottieLoader';

export default class NotFound extends Component {

    constructor() {
        document.title= `${config.siteName} - 404 Not found`;
    }

    render() {
        return (
            <div>
                 <LottieLoader 
                     text={"Cette page est est inaccessible"}  
                     devText
                     HomeButton  
                     bottom
                     logo   
                />

            </div>
        )
    }
}
