// Fetching APi's :
import axios from 'axios';
import moment from 'moment';

// Global Config :
  import { 
    config, 
} from '../../constants/AppConfig';

// HOME PAGE FUNCTIONS //

export const getJobs = () => dispatch => {
  
  axios.get(`${config.url}wp/v2/job-listings`)
        .then(response => {
          dispatch({
              type : 'GET_JOBS',
              payload : response.data,
          });
        })
        .catch(error => {
          // console.log("erreur axios getLatestNews/PostsActions");
        });
};

export const toogleSearch = (value) => dispatch => {

  if (value == 1) {

    dispatch ({
      type : 'TOOGLE_SEARCH',
      payload : true,
    });

  } else {

    dispatch ({
      type : 'UNTOOGLE_SEARCH',
      payload : false,
    });
  };

};

export const setLoading = (value) => dispatch => {
    dispatch ({
      type : 'SET_LOADING',
      payload : value,
    });
}
