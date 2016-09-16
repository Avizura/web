import React, { PropTypes } from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory  } from 'react-router';

import App from './components/App.jsx';
import AuthButton from './components/AuthButton.jsx';
import Profile from './components/Profile.jsx';
import auth from './auth.js';


function requireAuth(nextState, replaceState) {
    !auth.loggedIn && replaceState('/login');
}

function isAuth(nextState, replaceState) {
    auth.loggedIn && replaceState('/');
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Profile} onEnter={requireAuth} />
            <Route path="login" component={AuthButton} onEnter={isAuth}/>
        </Route>
        <Route path="/*">
            <IndexRedirect to="/" />
        </Route>
    </Router>
), document.getElementById('content'));
