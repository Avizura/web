import React, { PropTypes } from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory  } from 'react-router';

import AuthButton from './components/AuthButton.jsx';
import Profile from './components/Profile.jsx';
import auth from './auth.js';

const APPID = '5627770';


const App = React.createClass({
    componentDidMount: function() {
        VK.init({
            apiId: APPID
        });
        VK.Auth.getLoginStatus(response => {
            auth.loggedIn = !!response.session;
        });
        VK.Observer.subscribe('auth.login', function(response) {
            auth.loggedIn = true;
            browserHistory.push('/');
        });
        VK.Observer.subscribe('auth.logout', function(response){
            auth.loggedIn = false;
            browserHistory.push('/login');
        });
    },
    render () {
        return (
            <div className="main">{this.props.children}</div>
        )
    }
});

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
