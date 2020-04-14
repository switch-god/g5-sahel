// Fetching APi's :
import axios from 'axios';

// Global Config :
   import { config, HOME_BLOC1_IMGS } from '../../constants/AppConfig';


export const getImagesBloc = () => async (dispatch) => {
  
  axios.get(`${config.url}posts?per_page=3&&categories=${HOME_BLOC1_IMGS}`)
        .then(response => {
         
          dispatch({
              type : 'GET_HOME_BLOC_IMAGES',
              payload : response.data,
          });
        })
        .catch(error => {
          console.log("erreur axios HOME PAGE ACTIONS / GET IMAGES BLOC");
        });
  

}

export const Name = () => async (dispatch) => {
  
  axios.get(`${config.url}/posts/categories=${HOME_BLOC1_IMGS}`)
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