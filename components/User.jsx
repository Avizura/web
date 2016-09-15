import React, { PropTypes } from 'react';

const User = React.createClass({
    getInitialState: function() {
        return {
            fullName: '',
            photo: ''
        };
    },
    componentDidMount: function() {
        let promise = new Promise(function(resolve, reject) {
            VK.Api.call('users.get', {}, data =>  {
                resolve(data);
            })
        }).then(data => {
            VK.Api.call('users.get', {user_ids: data.response[0].uid, fields: 'photo_medium'}, data => {
                this.setState({
                    fullName: `${data.response[0].first_name} ${data.response[0].last_name}`,
                    photo: data.response[0].photo_medium
                });
            });
        })
        .catch(function(rejection) {
            throw rejection;
        });
    },
    render () {
        return (
            <div className="user">
                <div className="user-name">{this.state.fullName}</div>
                <img src={this.state.photo}></img>
            </div>
        )
    }
})

export default User;
