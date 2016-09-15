import React, { PropTypes } from 'react';

const Friend = React.createClass({
    render () {
        return (
            <div className="friend">
                <div className="friend-name">{this.props.firstName}</div>
                <img src={this.props.photo}></img>
            </div>
        )
    }
});

export default Friend;
