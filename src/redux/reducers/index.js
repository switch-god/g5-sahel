import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import documentationReducer from './documentationReducer';
import nosActivitesReducer from './nosActivitesReducer';
import eventsReducer from './eventsReducer';

export default combineReducers({
    postsR: postsReducer,
    docsR: documentationReducer,
    activitesR: nosActivitesReducer,
    eventsR: eventsReducer,
});
