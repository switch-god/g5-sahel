// Fetching APi's :
import axios from 'axios';
// import moment from 'moment';

// Global Config :
  import { 
    config, 
} from '../../constants/AppConfig';

export const getJobs = () => dispatch => {
  
  axios.get(`${config.url}wl/v1/listjobs`)
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


export const getJobs1 = () => dispatch => {
  
  axios.get(`${config.url}wp/v2/job-listings`)
        .then(response => {
          dispatch({
              type : 'GET_JOBS_1',
              payload : response.data,
          });
        })
        .catch(error => {
          // console.log("erreur axios getLatestNews/PostsActions");
        });
};


