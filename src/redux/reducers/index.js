import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import documentationReducer from './documentationReducer';
import nosActivitesReducer from './nosActivitesReducer';

export default combineReducers({
    postsR : postsReducer,
    docsR : documentationReducer,
    activitesR : nosActivitesReducer,
});
