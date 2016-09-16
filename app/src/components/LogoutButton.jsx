import React from 'react';
import auth from '../auth.js';

const LogoutButton = React.createClass({
    logout: function() {
        auth.logout();
    },
    render: function() {
        return (
            <button onClick={this.logout}>
                Выйти
            </button>
        );
    }
});

export default LogoutButton;
