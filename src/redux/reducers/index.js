import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import documentationReducer from './documentationReducer';


export default combineReducers({
    postsR : postsReducer,
    docsR : documentationReducer,
});
