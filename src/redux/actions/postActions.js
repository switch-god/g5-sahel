// Fetching APi's :
import axios from 'axios';

export const fetchPosts = () => {
    return (dispatch) => {
        axios.get("https://g5sahel.switch.tn/backend/wp-json/wp/v2/posts")
        .then(posts => {
          dispatch({
              type : 'FETCH_POSTS',
              payload : posts.data,
          });
        })
        .catch(error => {
          console.log("erreur axios app component");
        });
    }
};

export const searchPosts = () => {
    return (dispatch) => {
        
    }
}