import React, { PropTypes } from 'react';
import User from './User.jsx';
import Friend from './Friend.jsx';

require('./profile.css');

const Profile = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        VK.Api.call('friends.get', {
            fields: 'first_name, sex, photo, photo_medium, photo_big'
        }, data => {
            this.setState({data: data.response});
        });
    },
    render () {
        var friends = this.state.data.map(friend => {
            return (
                <Friend firstName={friend.first_name} photo={friend.photo} key={friend.user_id}></Friend>
            )
        });
        friends.splice(5, friends.length);
        return (
            <div className="profile">
                <User></User>
                <div className="friends">
                    {friends}
                </div>
            </div>
            )
        }
    });

export default Profile;
