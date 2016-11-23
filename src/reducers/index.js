import { combineReducers } from 'redux';
import pages from './pages';
import posts from './posts';
import {routerReducer} from 'react-router-redux';

// TODO: try to import * from './' instead of importing individual reducers

const rootReducer = combineReducers({
    pages,
    posts,
    routing: routerReducer
});

export default rootReducer;
