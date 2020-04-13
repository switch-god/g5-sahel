import React, { Component } from 'react'

// Fetching Api's :
import axios from 'axios';

export class PostForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title : '',
            body : '',
        };
    };


    render() {
        return (
            <div>
                <h1>ADD POST</h1>

                <form onSubmit={this.onSubmit}>

                    <label>Title</label> <br />
                    <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>

                    <br /><br />

                    <label>Body</label> <br />
                    <textarea name="body" onChange={this.onChange} value={this.state.body} /> <br />

                    <input type="submit" />

                </form>
            </div>
        )
    }

    onSubmit = (e) => {
        e.preventDefault();

        console.log("Submitting");
        
        let {title , body} = this.state;

        let post = {
            title : title,
            body : body,
        };

        axios.post('https://jsonplaceholder.typicode.com/posts',{
            body: JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 1
            }),
        })
        .then(rep => {
            console.log("rep", rep.data);
        })
        .catch(err => {
            console.log("error axios PostFormPage",err);
        });
    };

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }
}

export default PostForm;
