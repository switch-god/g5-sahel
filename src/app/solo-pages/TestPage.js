import React, { Component } from 'react'

export default class TestPage extends Component {

    constructor(props) {
        super(props);

        console.log(this.props.match.params);
    }

    render() {
        // console.log("from render =>",this.props.match.params);

        return (
            <div>
                hello
            </div>
        )
    }
}
