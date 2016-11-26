import React from 'react';
import {render} from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import LexiTheme from './containers/LexiTheme';
import PostsContainer from './containers/PostsContainer';
import PostContainer from './containers/PostContainer';
import AboutPageContainer from './containers/AboutPageContainer';
import '../sass/bootstrap.css';
import '../sass/bootstrap-blog.css';
import { ROOT } from './wp-url.js';

// const history = new createBrowserHistory();
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
let rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path={ROOT} component={LexiTheme}>
                <IndexRoute component={PostsContainer} />
                <Route path={`${ROOT}/about`} component={AboutPageContainer} />
                <Route path={`${ROOT}/post/:pageNum`} component={PostsContainer} />
                <Route path={`${ROOT}/:year/:month/:name`} component={PostContainer} />
            </Route>
        </Router>
    </Provider>,
    rootElement
);
