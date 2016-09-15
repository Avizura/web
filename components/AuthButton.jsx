import React from 'react';
import { browserHistory  } from 'react-router';
import auth from '../auth.js';

const AuthButton = React.createClass({
    login: function() {
        auth.login();
    },
    render: function() {
        return (
            <button onClick={this.login}>
                Авторизоваться
            </button>
        );
    }
});

export default AuthButton;
