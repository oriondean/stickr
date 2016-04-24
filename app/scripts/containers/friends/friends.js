import * as ActionCreators from '../../actions/index';

import React from 'react';

import { connect } from 'react-redux';
import Header from '../../components/header/header';

class Friends extends React.Component {
    render() {
        let noFriendsMessage;
        let noFriendRequestMessage;

        if (this.props.friends.isEmpty()) {
            noFriendsMessage = <h2>You have no friends</h2>
        }

        console.log(this.props.friendRequests.toArray());

        if (this.props.friendRequests.size == 0) {
            noFriendRequestMessage = <h2>You have no friend requests</h2>
        }

        return <div>
            <Header isLoggedIn={this.props.isLoggedIn} user={this.props.user} viewHome={this.props.viewHome} viewFriends={this.props.viewFriends}/>
            <div className="content">
                <div>
                    <div className="col-lg-6">
                        <h1>FRIENDZZZZ</h1>
                        <ul>
                            { this.props.friends.valueSeq().map(friend => <li>{friend.name}</li>) }
                        </ul>
                        {noFriendsMessage}
                    </div>
                    <div className="col-lg-6">
                        <h1>Friend Requestzzz</h1>
                        <ul>
                            { this.props.friendRequests.toArray().map(user => <li>{user.name}</li>) }
                        </ul>
                        {noFriendRequestMessage}
                    </div>
                </div>
            </div>
        </div>;
    }

    componentWillMount() {
        this.props.getFriends();
        this.props.getFriendRequests();
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        friends: state.friends,
        friendRequests: state.friendRequests,
        isLoggedIn: state.authentication.get('isLoggedIn'),
        user: state.authentication.get('user')
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getFriendRequests: () => dispatch(ActionCreators.getFriendRequests()),
        getFriends: () => dispatch(ActionCreators.getFriends()),
        viewFriends: () => dispatch(ActionCreators.viewFriends()),
        viewHome: () => dispatch(ActionCreators.viewHome())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);