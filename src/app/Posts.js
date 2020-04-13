import React, { Component } from 'react'
import {connect} from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';
import { Button } from 'react-bootstrap';
class Posts extends Component {
    
    componentDidMount(){
        this.props.fetchPosts();
    }
    render() {
        console.log(this.props.posts);

        const postsItems = this.props.posts.map((post) => (
            <div key={post.id}>
              <h3>{post.id}</h3>
              <h3>{post.title.rendered}</h3>
              <Button variant="primary">Primary</Button>
              {/* <p>{post.body}</p>  */}
            </div>
          ));
        return (
            <div>
                {postsItems}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    posts : state.postR.items,
});

export default connect(mapStateToProps,{ fetchPosts })(Posts);
